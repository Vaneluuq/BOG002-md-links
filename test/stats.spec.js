const {getStats, statsAndValidate} = require('../src/stats.js')
const mocks = require('./_mocks_.js')

describe("getStats", () => {
 test("deberia ser una funcion", () => {
     expect(typeof getStats).toBe("function")
 })
 test("deberia returnar un objeto con { Total, Unique }", () => {
    expect(getStats(mocks.noValidate)).toEqual({Total: 7, Unique: 6})
 })
})

describe("statsAndValidate", () => {
 test("deberia ser una funcion", () => {
    expect(typeof statsAndValidate).toBe("function")
 })
 const data =   [{
   href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
   path: 'C:\\Users\\Asus\\Documents\\LABORATORIA\\BOG002-md-links\\directorio\\lol.md',
   text: '(parámetros | argumentos | valor de retorno)',
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
   href: ' https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements',
   path: 'C:\\Users\\Asus\\Documents\\LABORATORIA\\BOG002-md-links\\directorio\\lol.md',
   text: 'export',
   status: 404,
   Check: 'Fail'
}]

 test.only("deberia returnar un objeto con {Total, Unique, Broken}", () => {
  
  expect(statsAndValidate(data)).toEqual({Total: 3, Unique: 2, Broken: 1})
 })
})