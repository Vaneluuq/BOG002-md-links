const arrayMd = [
    {
      data: 'soy el readme de prueba\r\n' +
        '\r\n' +
        '### Node\r\n' +
        '\r\n' +
        '* [ ] Uso de sistema de archivos. ([fs](https://nodejs.org/api), [path](https://nodejs.org/api/path.html))\r\n' +
        '* [ ] Instalar y usar módulos. ([npm](https://www.npmjs.com/))\r\n' +
        '* [ ] Creación de modules. [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)\r\n' +
        '* [ ] [Configuración de package.json.](https://docs.npmjs.com/files/pack)\r\n' +
        '* [ ] [Configuración de npm-scripts](https://docs.npmjs.com/misc/scripts)\r\n' +
        '* [ ] Uso de CLI (Command Line Interface - Interfaz de Línea de Comando)\r\n',
      route: 'directorio\\otra\\read.md'
    }
  ]

  const checkLinksResponse = {
    href: 'https://nodejs.org/api/path.html',
    status: 200,
    statusText: 'OK'
  }


const checkLinksResponseFail = {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Stat",
    status: 404,
    statusText: "Fail"
}


const validateMd = [
    {
        href: 'https://nodejs.org/api/path.html',
        text: 'path',
        file: 'C:\\Users\\Asus\\Documents\\LABORATORIA\\BOG002-md-links\\directorio\\otra\\read.md',
        status: 200,
        statusText: 'OK'
    },
    {
        href: 'https://nodejs.org/api',
        path: 'C:\\Users\\Asus\\Documents\\LABORATORIA\\BOG002-md-links\\directorio\\otra\\read.md',
        text: 'fs',
        status: 200,
        Check: 'OK'
    },
    {
        href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
        path: 'C:\\Users\\Asus\\Documents\\LABORATORIA\\BOG002-md-links\\directorio\\lol.md',
        text: '(parámetros | argumentos | valor de retorno)',
        status: 200,
        Check: 'OK'
    },
    {
        href: ' https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export',
        path: 'C:\\Users\\Asus\\Documents\\LABORATORIA\\BOG002-md-links\\directorio\\lol.md',
        text: 'export',
        status: 200,
        Check: 'OK'
    }
]

const noValidate = [
    {
      href: 'https://nodejs.org/api',
      text: 'fs',
      file: 'directorio\\otra\\read.md'
    },
    {
      href: 'https://nodejs.org/api/path.html',
      text: 'path',
      file: 'directorio\\otra\\read.md'
    },
    {
      href: 'https://www.npmjs.com/',
      text: 'npm',
      file: 'directorio\\otra\\read.md'
    },
    {
      href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
      text: '(CommonJS)',
      file: 'directorio\\otra\\read.md'
    },
    {
      href: 'https://docs.npmjs.com/files/pack',
      text: 'Configuración de package.json.',
      file: 'directorio\\otra\\read.md'
    },
    {
      href: 'https://docs.npmjs.com/misc/scripts',
      text: 'Configuración de npm-scripts',
      file: 'directorio\\otra\\read.md'
    }
  ]








const mocks = {
    arrayMd,
    validateMd, 
    noValidate,
    checkLinksResponse,
    checkLinksResponseFail
}

module.exports= mocks  