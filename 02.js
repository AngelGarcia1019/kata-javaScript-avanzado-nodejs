// 2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
// Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
const Queue = require("./queue.js");

let queueOriginal = new Queue([
  { user: "User1", ticket: true },
  { user: "User2", ticket: true },
  { user: "User3", ticket: false },
  { user: "User4", ticket: true },
  { user: "User5", ticket: false },
  { user: "User6", ticket: false },
  { user: "User7", ticket: true },
  { user: "User8", ticket: true },
  { user: "User9", ticket: true },
  { user: "User10", ticket: false },
  { user: "User11", ticket: true },
]);

queueOriginal.print();

let queueWithoutTickets = new Queue([]);
let queueWithoutFinal = new Queue([]);

while (!queueOriginal.isEmpty()) {
  const element = queueOriginal.dequeue();
  if (element.ticket) {
    queueWithoutFinal.enqueue(element);
  } else {
    queueWithoutTickets.enqueue(element);
  }
}

queueWithoutTickets.print();
queueWithoutFinal.print();
