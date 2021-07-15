# Markdown Links

La presente libreria permite extraer los links contenidos en un archivo markdown, 
obteniendo data relevante como aquellos que se encuentran rotos, el total de links 
asi como el total de links unicos dentro del archivo(s).  


## instalacion 

Puedes instalarlo a través de la linea de comando:

```sh
npm install @vaneluuq/mdlinksvane@0.1.0
```
ó instalarlo via package.json:

```sh
"@vaneluuq/mdlinksvane": "0.1.0"
```

## uso 

Requiere como argumento una ruta, la cual debe ser o contener los archivos de tipo markdown(.md),
asi mismo ingresar las opciones a ejecutar. 

```sh
md-links <path> [options]
```

### Caso 1 (default)
Cuando se ejecuta el comando, se muestran las propiedades:
  * href: URL encontrada.
  * text: texto dentro del link
  * file: ruta del archivo 

```sh
$ md-links ./some/example.md

{
  href: http://algo.com/2/3/ 
  text: Link a algo
  file: ./some/example.md 
},
{
  href: https://otra-cosa.net/algun-doc.html 
  text: algún doc
  file: ./some/example.md  
}
```

### Caso 2 (validación de los links)
Al ejecutar el comando con la opción `--validate || -v` es posble obtener el status del link (Código de respuesta HTTP.) 
y un mensaje de en caso de fallo `fail` y de exito `OK`. 

```sh
$ md-links ./some/example.md --validate

{
  href: http://algo.com/2/3/ 
  text: Link a algo
  file: ./some/example.md 
  status: 200
  statusText: "OK"
}
{
  href: https://otra-cosa.net/algun-doc.html 
  text: algún doc
  file: ./some/example.md 
  status: 404
  statusText: "Fail"
}
```

### Caso 3 (Estadisticas de los links basicas)
Al pasar la opción `--stats || -st` el output (salida) será un texto con estadísticas básicas sobre los links.
 
```sh
$ md-links ./some/example.md --stats

Total: 3
Unique: 3
```

### Caso 4 (Estadisticas y validación de los links)
Mediante la opcion  `--stats` y `--validate` es posible obtener estadisticas basadas
en los resultados de la validación, para el caso el numero de links rotos. 

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

## Objetivos de aprendizaje

### JavaScript

* [X] Uso de condicionales [(if-else | switch | operador ternario)](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
* [X] Uso de funciones [(parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
* [X] Manipular arrays[(filter | map | sort | reduce)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
* [X] Manipular objects (key | value)
* [X] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
* [ ] [Creación de Promesas.](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)

### Node

* [ ] Uso de sistema de archivos. ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [ ] Instalar y usar módulos. ([npm](https://www.npmjs.com/))
* [ ] Creación de modules. [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [ ] [Configuración de package.json.](https://docs.npmjs.com/files/package.json)
* [ ] [Configuración de npm-scripts](https://docs.npmjs.com/misc/scripts)
* [ ] Uso de CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)
* [ ] Uso de Mocks manuales.
* [ ] Testeo para múltiples Sistemas Operativos.

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### HTTP

* [ ] [Códigos de status HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Fundamentos de programación

* [ ] [Recursión.](https://www.youtube.com/watch?v=lPPgY3HLlhQ)


















