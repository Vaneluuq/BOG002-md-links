#!/usr/bin/env node

const { mdLinks } = require("../src/index.js");
const { getStats, statsAndValidate} = require("../src/stats.js")
// const program = require("commander");
const chalk = require('chalk')
// const args = process.argv


const welcome = mesaje => {
  console.log(chalk.bold.cyan(mesaje));
}

(async () => {
  welcome(`                        Md-Links!                          `);
})();

const cli = (path, options) => {
  const {validate, stats} = options
  let style1 = chalk.bold.italic.cyan
  let style2 = chalk.bold.white
  let style3 = chalk.cyan.bold

  // El usuario no quiere validar se muestran solo {href, text & file}
  if(!validate && !stats){
    mdLinks(path, { validate: false })
    .then((links)=> { links.forEach(element => {
      console.log(`${style1('href:')} ${style1(element.href)}`)
      console.log(`${style3('text:')} ${style2(element.text)}`)
      console.log(`${style3('file:')} ${style2(element.file)}`) 
      });
    });
  };
  // El usuario quiere validar se muestran {href, text, file, status & statusText }
  if(validate && !stats){
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
  if(!validate && stats){
    mdLinks(path, { validate: false })
    .then((links)=> { links.forEach(element => { 
       console.log(`${chalk.bold.italic.cyan('href:')} ${chalk.bold.italic.cyan(element.href)}`)
       console.log(`${chalk.cyan.bold('text:')} ${chalk.bold.white(element.text)}`)
       console.log(`${chalk.cyan.bold('file:')} ${chalk.bold.white(element.file)}`)   
      });
    });
  };
 };




cli("directorio", {validate: true} )

// program
// .command("getLinks [command]")
// .action()

// program
// .arguments("<path>")
// .option('-v, -validate', "Validate links")
// .option("-st, -stats", "Links stats")
// program.parse(args)





















// const cli = (name, options, command) => {
//   if (options.validate || options.stats) {
//     if (options.validate) {
//       mdLink.mdLinks.validateLinks(name, { validate: true });
//     }
//     if (options.stats) {
//       mdLink.mdLinks.statusLinks(name);
//     }
//     return;
//   } else {
//     mdLink.mdLinks.irDirectorio(name);
//   }
// };

// program
//   .version("0.1.0")
//   .arguments("<path>")
//   .option("-v, --validate")
//   .option("-s, --stats")
//   .action(cli);
// program.parse(process.argv);




// if (validate && stats){
//   return mdLinks.mdLinks(path, {validate: true})
//   .then((result) => {
//       console.log(chalk.bold.magenta(` Total: ${Stats.getStats(result).total}`))
//       console.log(chalk.bold.magenta(` Unique: ${Stats.getStats(result).unique}`))
//       console.log(chalk.bold.magenta(` Broken: ${Stats.getStats(result).broken}`))