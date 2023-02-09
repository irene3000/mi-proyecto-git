let x= Number(prompt("Ingrese el numero de lapices que desea comprar: "));

if(x>=1000){
    pago= x*0.85;
}else{
    pago=x* 0.90;
}

document.write("La cantidad a pagar es: ",pago);