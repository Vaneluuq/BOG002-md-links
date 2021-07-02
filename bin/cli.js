#!/usr/bin/env node

const program = require("commander");
const chalk = require('chalk')
const args = process.argv
 const { mdLinks } = require("../src/index.js");
const { getStats, statsAndValidate } = require("../src/stats.js")



const welcome = mesaje => {
  console.log(chalk.bold.cyan(mesaje));
}

(async () => {
  welcome(`                        Md-Links!                          `);
})();


const cli = (path, options) => {
  const {validate, stats} = options
  const style1 = chalk.bold.italic.cyan
  const style2 = chalk.bold.white
  const style3 = chalk.cyan.bold
//el usuario desea validar y obtener estadisticas 
  if(validate && stats){
    mdLinks(path, { validate: true })
    .then((response)=> { 
      const stats = statsAndValidate(response);
      console.table(stats);
    });
  };
  //el usuario desea solo obtener estadisticas 
   if(!validate && stats){
    mdLinks(path, { validate: false})
    .then((response)=> { 
      const statsAndValidate = getStats(response)
      console.table(statsAndValidate);
    });
  };
  // El usuario no quiere validar se muestran solo {href, text & file}
  if(!validate){
    mdLinks(path, { validate: false })
    .then((links)=> { links.forEach(element => {
      console.log(`${style1('href:')} ${style1(element.href)}`)
      console.log(`${style3('text:')} ${style2(element.text)}`)
      console.log(`${style3('file:')} ${style2(element.file)}`) 
      });
    });
  // el usuario desea solo validar 
  } else{
    mdLinks(path, { validate: true })
    .then((links)=> { links.forEach(element => { 
       console.log(`${style1('href:')} ${style1(element.href)}`)
       console.log(`${style3('text:')} ${style2(element.text)}`)
       console.log(`${style3('file:')} ${style2(element.file)}`) 
       console.log(`${style3('status:')} ${style2(element.status)}`)   
       if(element.statusText == "OK"){
       console.log(`${style3('statusText:')} ${chalk.bold.green(element.statusText)}`)
       }else{
        console.log(`${style3('statusText:')} ${chalk.bold.red(element.statusText)}`)
       } 
      });
    });
  };
 };


program
  .version("0.1.0")
  .arguments("<path>")
  .option('-v, --validate', "Validate links")
  .option("-st, --stats", "Links stats")
  .action(cli)
program.parse(args)












