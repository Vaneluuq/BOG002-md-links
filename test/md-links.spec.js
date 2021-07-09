const {mdLinks, absolutePathFunction, readFiles, getLinks, checkLinks } = require('../src/index.js');
const relativePath = '.';
const pathPrueba = 'C:\\Users\\Asus\\Documents\\LABORATORIA\\BOG002-md-links';
const mocks = require('./_mocks_.js');
const axios = require("axios");
jest.mock('axios');



describe('absolutePathFunction', () => {
  test('deberia ser una funcion', () => {
    expect(typeof absolutePathFunction).toBe("function")
  });
   test("deberia resolver la ruta relativa a absoluta", () => {
    expect(absolutePathFunction(relativePath)).toEqual('C:\\Users\\Asus\\Documents\\LABORATORIA\\BOG002-md-links');
  })
  test("deberia returnar la ruta absoluta", () => {
    expect(absolutePathFunction(pathPrueba)).toEqual(pathPrueba);
  })
});


describe('readfiles', () => {
  test('deberia ser una funcion', () => {
    expect(typeof readFiles).toBe('function')
  })
  test('la ruta deberia retornar un objeto', () => {
    expect(typeof readFiles(pathPrueba)).toBe("object")
  })
  test('deberia ser un archivo', () => {
    const pathPrueba = 'directorio\\otra\\read.md'
    expect(readFiles(pathPrueba)).toEqual(mocks.arrayMd)
  })
  test('deberia ser un directorio', () => {
   const pathPrueba = 'C:\\Users\\Asus\\Documents\\LABORATORIA\\BOG002-md-links\\directorio'
   expect(readFiles(pathPrueba)).toHaveLength(2)
 })
})

describe('getLinks', () => {
  test('deberia ser una funcion', () => {
    expect(typeof getLinks).toBe('function')
  })
  test("Deberia retornar un objeto con {href, text, file}", () => {
    expect(getLinks(mocks.arrayMd)).toEqual(mocks.noValidate)
  })
  test("la ruta deberia ser un objeto", () => {
    expect(typeof getLinks(mocks.arrayMd)).toBe("object")
  })
})


describe('checkLinks', () => {
  test('deberia ser una funcion', () => {
    expect(typeof checkLinks).toBe('function')
  })
  test('deberia responder el status del link', () => {
     const urlLink = [{href: 'https://nodejs.org/api/path.html'}];
     const resp = mocks.checkLinksResponse;
     axios.get.mockResolvedValue(resp)
      
     return Promise.all(checkLinks(urlLink)).then(data => expect(data).toEqual([resp]));
    });
  test('deberia responder error el status del link', () => {
    const urlLink = [{href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Stat'}];
    const resp = mocks.checkLinksResponseFail;
    axios.get.mockResolvedValue(resp)

    return Promise.all(checkLinks(urlLink)).then(data => expect(data).toEqual([resp]));
    });
  });


describe('mdLinks', () => {
  test('deberia ser una funcion', () => {
    expect(typeof mdLinks).toBe("function")
  });
});



