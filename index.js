// module.exports = () => {
//   // ...
// };

const path = require('path');
const fs = require('fs');

let absolutePathFuntion = (pathUser) => {
  if (path.isAbsolute(pathUser)) {
    getFile(pathUser)
  }else{
    let currentPath = path.resolve(pathUser)
    getFile(currentPath)
  }
}

let getFile = (pathAbsolute) => {
  let arrayMdFiles = [];
    if(fs.lstatSync(pathAbsolute).isFile()){
      if(path.extname(pathAbsolute) == ".md"){
          arrayMdFiles.push(fs.readFileSync(pathAbsolute, "utf8"))
          console.log("si hay un archivo md")
       }else {
        console.log("no hay un archivo de tipo '.md'") 
      }
    }else{
      let files = fs.readdirSync(pathAbsolute)
      files.forEach(file => {
        // absolutePathFuntion(file)
       let absolutePath = path.join(pathAbsolute, file)
      //  getFile(absolutePath)
       absolutePathFuntion(absolutePath)
      });
   };
   console.log(arrayMdFiles)
};


absolutePathFuntion("README.md")





