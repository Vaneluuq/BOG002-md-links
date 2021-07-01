const { mdLinks } = require("./index.js");

const pathTest = "directorio"

mdLinks(pathTest, { validate: true })
  .then(console.log)
  .catch(console.error);
