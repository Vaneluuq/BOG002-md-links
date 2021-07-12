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
//  test("deberia returnar un objeto con {Total, Unique, Broken}", () => {
//     expect(statsAndValidate(mocks.validateMdStats)).toEqual({Total: 4, Unique: 4, Broken: 1})
 })