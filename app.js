const calculadora = require("./moodules/calculadora")
const{argv} = require("process")

const operacion = argc[2];
const n1= argc[2];
const n2 = argc[2];
let resultado = 0;

switch (operacion) {
    case "sumar":
        sumar (n1,n2)
        break;

    default:
        break;
}

console.log(operacion);