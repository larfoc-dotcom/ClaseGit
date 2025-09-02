let contador;

const url= "http://miapi.com";

let edad=17;
let acceso='';

if (edad < 16) {
    acceso = 'prohibido';
    console.log(acceso);
} else if (edad >=16 && edad <=18) {
    acceso = 'permitido sólo acompañado de un mayor';
} else {
    acceso = 'permitido';
}


console.log(acceso);