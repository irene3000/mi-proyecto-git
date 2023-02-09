
let ct = Number(prompt('Ingrese el costo del traje: '));

if (ct>2500) {
    dcto=ct*0.15;
} else {
    dcto=ct*0.08;
}

pf=ct-dcto;

document.write("El precio final es: ",pf,<br></br>,"El dcto es de:" ,dcto);