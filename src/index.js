const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const axios = require("axios");


// Se verifica si la ruta es abosluta o relativa
let absolutePathFunction = (pathUser) => (path.isAbsolute(pathUser) ? pathUser : path.resolve(pathUser));

// Se lee el documento md primero identificando si es un archivo o un directorio
let readFiles = (pathAbsolute) => {
  let arrayMdFiles = [];
    if(fs.lstatSync(pathAbsolute).isFile()){    
      if(path.extname(pathAbsolute) == ".md"){
          arrayMdFiles.push(
            {data: fs.readFileSync(pathAbsolute, "utf8"), 
            route: pathAbsolute});
        }else{
          new Error("the file md does not exist")
        }
    }else{
      let files = fs.readdirSync(pathAbsolute);
      files.map(file => {
       let absolutePathFiles = path.join(pathAbsolute, file);
       const allFilesMd = readFiles(absolutePathFiles);
       arrayMdFiles = arrayMdFiles.concat(allFilesMd);
      });
   };
  return arrayMdFiles;
};

// console.log(readFiles('directorio\\otra\\read.md'))
// se obtienen los links de el archivo(s) .md y su data(href, text, route) 
  const getLinks = (pathMd) => {
    let objLinks = [];
    pathMd.forEach((file) => {
     const links = markdownLinkExtractor(file.data, true);
      links.forEach(link =>{   
        objLinks.push({
          href: link.href,
          text: link.text,
          file: file.route
          });
       });
     });
    return objLinks;
  };
   

//Se genera un promesa mediante la cual se verifica el estado de los links 
const checkLinks = (arrayLink) => {
    const links = arrayLink
     const arrayObj = links.map((link)=> {
       return axios
        .get(link.href)
        .then(response => {
          if (response.status >= 200 && response.status < 300) {   //si la respuesta se encuentra en este rango la respuesta es satisfactoria
           return ({...link, statusText: response.statusText, status: response.status})
          }else{
           return ({...link, statusText: "Fail", status: response.status})
          } 
        }) 
        .catch(e => {
           return ({...link, statusText: "Fail", status: e.response.status})
        });
     });
     return arrayObj
    //  return Promise.all(arrayObj)
   };


const mdLinks = (route, {validate}) => {
  return new Promise ((res, rej) => {
    if(!fs.existsSync(route)){
       rej(new Error("path does not exist"))
    }
    const routeAbs = absolutePathFunction(route)
    const readFileMd = readFiles(routeAbs)
    if(validate==false){
      let links = getLinks(readFileMd)
       res(links)
    }else{
      let links = getLinks(readFileMd);
      Promise.all(checkLinks(links)) 
      .then(obj=> { res(obj)})
      .catch(error => {rej(error)})
    };
  });
};

module.exports= { mdLinks, 
                  absolutePathFunction, 
                  readFiles,
                  getLinks, 
                  checkLinks}









