const {mdLinks, absolutePathFunction, readFiles, getLinks, checkLinks } = require('../src/index.js');
const relativePath = '.';
const pathPrueba = 'C:\\Users\\Asus\\Documents\\LABORATORIA\\BOG002-md-links';
const mocks = require('./_mocks_.js')


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
  // test("la prueba deberia arrojar error si no es un archivo md", () => {
  //   const pathPrueba = 'C:\Users\Asus\Documents\LABORATORIA\BOG002-md-links\directorio\app.js'
  //    expect(()=> readFiles(pathPrueba)).toThrowError("the file md does not exist")
  // })
})


describe('getLinks', () => {
  test('deberia ser una funcion', () => {
    expect(typeof getLinks).toBe('function')
  })
  test('', () => {
    expect()
  })
  // test("la ruta deberia retornar un objeto", () => {
  //   expect(typeof getLinks(pathPrueba)).toBe("object")
  // })
})


describe('checkLinks', () => {
  test('deberia ser una funcion', () => {
    expect(typeof checkLinks).toBe('function')
  })
})


describe('mdLinks', () => {
  test('deberia ser una funcion', () => {
    expect(typeof mdLinks).toBe("function")
  });
});



// import axios from 'axios';

// class Users {
//   static all() {
//     return axios.get('/users.json').then(resp => resp.data);
//   }
// }

// export default Users;