//  Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
// Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// Cola 1: [ amarillo, rojo, azul, morado]
// Cola 2: [rosa, verde, negro, blanco]

const Queue = require("./queue.js");

let queueOriginal = new Queue([
  "amarillo",
  "rosa",
  "rojo",
  "verde",
  "azul",
  "negro",
  "morado",
  "blanco",
]);

let queuePairs = new Queue([]);
let queueOdd = new Queue([]);

queueOriginal.print();
const limit = queueOriginal.size();
for (let i = 1; i <= limit; i++) {
  const element = queueOriginal.dequeue();
  if (i % 2 == 0) {
    queuePairs.enqueue(element);
  } else {
    queueOdd.enqueue(element);
  }
}

queueOdd.print();
queuePairs.print();
