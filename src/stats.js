//Se obtienen las estadisticas basicas de los links 
const getStats = () => {
  const totalLinks = links.length;   //se obtiene el total de links

  const linkArray = links.map((link) => link.href)  //se obtienen el total de links sin repetir
  const uniqueLinks = [...new Set(linkArray)].length
 
  return ({
    Total: totalLinks,
    Unique: uniqueLinks,
 });
};



// Se obtienen las estadisticas que necesitan de los resultados de la validación. 
const statsAndValidate = (links) => {
 
  const totalLinks = links.length;   //se obtiene el total de links

  const linkArray = links.map((link) => link.href)  //se obtienen el total de links sin repetir
  const uniqueLinks = [...new Set(linkArray)].length
 
  const brokenLinks = links.filter (link => link.statusText !=="OK").length  // Se obtiene los links rotos 

  return ({
   Total: totalLinks,
   Unique: uniqueLinks,
   Broken: brokenLinks
  })
};
 
module.exports = {
  getStats, 
  statsAndValidate
}




// const numeros  = [1, 2, 2, 3, 4, 4, 5];
//             // [ 1, 2, 3, 4, 5 ]

// const numerosUnicos = [...new Set(numeros)]; // Array sin duplicados

// let duplicados = [...numeros]; // Creamos una copia del array original
// numerosUnicos.forEach((numero) => {
// const indice = duplicados.indexOf(numero);
// console.log("este es el numero unico:"+ numero, "esta es su posicion:" + indice)
//   duplicados = duplicados.slice(0, indice)
//   .concat(duplicados.slice(indice + 1, duplicados.length));
// });

// console.log(duplicados); // [ 2, 4 ]


