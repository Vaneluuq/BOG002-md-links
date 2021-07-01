// module.exports = () => {
//   // ...
// };

const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const axios = require("axios");


// Se verifica si la ruta es abosluta o relativa
let absolutePathFuntion = (pathUser) => (path.isAbsolute(pathUser) ? pathUser : path.resolve(pathUser));

// Se lee el documento md primero identificando si es un archivo o un directorio
let readFiles = (pathUser) => {
  const pathAbsolute= absolutePathFuntion(pathUser);
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
  return arrayMdFiles;
};



// se obtienen los links del archivo 
const getLinks = (pathMd) => {
  let objLinks = [];
  let filesMdArray = readFiles(pathMd);
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
  console.log(objLinks)
};



const validarLinks = (arrayLink) => {
  return new Promise((res, rej)=> {
    const links = arrayLink
      links.forEach((link)=> {
        axios
        .get(link.href)
        .then(response => {
            console.log(response.statusText)
        })
        .catch(e => {
            console.log(e)
        });
      });
   });
};
 
 const mdLinks = (pathLink, options) => {
  new Promise((res, rej) => { 
   const fileExists = fs.existsSync(pathLink);

  });
 };
 

//  const mdLinks = (file, validate) => {
//   const extFile = path.extname(file);
//   if (extFile !== '.md') {
//       console.log('El archivo no se puede leer')
//   }
//   return functions.readFiles(file)
//       .then(functions.extractLinks)
//       .then(links => functions.objLink(links, file))
//       .then(array => {
//           if (validate === true) {
//               return Promise.all(functions.newObjLink(array))
//           } else {
//               return array
//           }
//       })
//       .catch(error => error)





  const arrayLinks = [
    {
      href: 'https://docs.npmjs.com/misc/scripts',
      text: 'Configuración de npm-scripts',
      file: 'C:\\Users\\usuario\\Desktop\\Laboratoria\\BOG002-md-links\\directorio\\read.md'
    }, 
    {
      href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
      text: '(CommonJS)',
      file: 'C:\\Users\\usuario\\Desktop\\Laboratoria\\BOG002-md-links\\directorio\\read.md'
    },
    {
      href: 'https://docs.npmjs.com/files/package.json',
      text: 'Configuración de package.json.',
      file: 'C:\\Users\\usuario\\Desktop\\Laboratoria\\BOG002-md-links\\directorio\\read.md'
    }
  ]


  validarLinks(arrayLinks) 
