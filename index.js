// module.exports = () => {
//   // ...
// };

const path = require('path');
const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');


// Se verifica si la ruta es abosluta o relativa
let absolutePathFuntion = (pathUser) => (path.isAbsolute(pathUser) ? pathUser : path.resolve(pathUser));

// Se lee el documento md primero identificando si es un archivo o un directorio
let readFiles = (pathUser) => {
  const pathAbsolute= absolutePathFuntion(pathUser) 
  let arrayMdFiles = [];
    if(fs.lstatSync(pathAbsolute).isFile()){    
      if(path.extname(pathAbsolute) == ".md"){
          arrayMdFiles.push({data: fs.readFileSync(pathAbsolute, "utf8"), route: pathAbsolute});
       }
    }else{
      let files = fs.readdirSync(pathAbsolute)
      files.map(file => {
       let absolutePathFiles = path.join(pathAbsolute, file)
       const allFilesMd = readFiles(absolutePathFiles);
       arrayMdFiles = arrayMdFiles.concat(allFilesMd)
      });
   };
  return arrayMdFiles;
};


// se obtienen los links del archivo 
const getLinks = (pathMd) => {
  let objLinks = [];
  let filesMdArray = readFiles(pathMd)
  filesMdArray.forEach((file) => {
   const links = markdownLinkExtractor(file.data, true);
    links.forEach(link =>{   
      objLinks.push({
        href: link,
        text: link.text,
        file: file.route
        })
     });
   })
  console.log(objLinks)
};

getLinks("directorio")










