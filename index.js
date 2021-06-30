const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const axios = require("axios");


// Se verifica si la ruta es abosluta o relativa
let absolutePathFunction = (pathUser) => (path.isAbsolute(pathUser) ? pathUser : path.resolve(pathUser));

// Se lee el documento md primero identificando si es un archivo o un directorio
let readFiles = (pathAbsolute) => {
  // const pathAbsolute= absolutePathFunction(pathUser);
  let arrayMdFiles = [];
    if(fs.lstatSync(pathAbsolute).isFile()){    
      if(path.extname(pathAbsolute) == ".md"){
          arrayMdFiles.push(
            {data: fs.readFileSync(pathAbsolute, "utf8"), 
            route: pathAbsolute});
      }else{
        console.log("No hay archivo .md")
      }
    }else{
      let files = fs.readdirSync(pathAbsolute);
      files.map(file => {
       let absolutePathFiles = path.join(pathAbsolute, file);
       const allFilesMd = readFiles(absolutePathFiles);
       arrayMdFiles = arrayMdFiles.concat(allFilesMd);
      });
   };
  //  console.log(arrayMdFiles)
  return arrayMdFiles;
};


  const getLinks = (pathMd) => {
    let objLinks = [];
    let filesMdArray = pathMd
    filesMdArray.forEach((file) => {
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



const checkLinks = (arrayLink) => {
    const links = arrayLink
     const arrayObj = links.map((link)=> {
       return axios
        .get(link.href)
        .then(response => {
          if (response.status >= 200 && response.status < 300) {   //si la respuesta se encuentra en este rango la respuesta es satisfactoria
           return ({...link, StatusText: response.statusText, Status: response.status})
          }else{
           return ({...link, StatusText: "Fail", status: response.status})
          } 
        }) 
        .catch(e => {
           return ({...link, StatusText: "Fail", status: e.response.status})
        });
     });
     return Promise.all(arrayObj)
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
      checkLinks(links)
      .then(obj=> { res(obj)})
    }
  })
}


mdLinks("directorio", { validate: true }) 




// const arrayLinks = [
//   {
//     href: 'https://docs.npmjs.com/misc/scri',
//     text: 'Configuración de npm-scripts',
//     file: 'C:\\Users\\usuario\\Desktop\\Laboratoria\\BOG002-md-links\\directorio\\read.md'
//   }, 
//   {
//     href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
//     text: '(CommonJS)',
//     file: 'C:\\Users\\usuario\\Desktop\\Laboratoria\\BOG002-md-links\\directorio\\read.md'
//   },
//   {
//     href: 'https://docs.npmjs.com/files/package.json',
//     text: 'Configuración de package.json.',
//     file: 'C:\\Users\\usuario\\Desktop\\Laboratoria\\BOG002-md-links\\directorio\\read.md'
//   }
// ]


// validarLinks(arrayLinks).then(obj=> {
//   console.log(obj)});




// se obtienen los links del archivo 
// const getLinks = (pathMd) => {
//   new Promise ((res, rej)=> {
//     let objLinks = [];
//     let filesMdArray = readFiles(pathMd);
//     if(err){
//       rej(new Error(`${err.code}, verifica el path`));
//     }else{
//       filesMdArray.forEach((file) => {
//         const links = markdownLinkExtractor(file.data, true);
//          res(links.forEach(link =>{   
//            objLinks.push({
//              href: link.href,
//              text: link.text,
//              file: file.route
//              });
//           }));
//         });
//       }
//       console.log(objLinks)
//     })
//   }






