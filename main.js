//EJERCICIO 1
a=+prompt('ingrese un numero')
b=+prompt('ingrese otro numero')
if (a>b){
    document.write(`${b}
    ${a}`)
}else if (a==b){
document.write(`${a}
${b}`)
}
else{
    document.write(`${a}
    ${b}`)
}

//EJERCICIO 2

numero=+prompt('ingrese un numero')
while(numero<1 && numero>11){
    numero=+prompt('ingrese un numero entre 1-10')
}

switch (numero) {
    case 1:
        if (numero%3==0 || numero==1){
            alert('el numero es impar')
        }
      break;
    case 2:
        if(numero%2==0){
            alert('el numero es par')
        }
      break;

  }

  //EJERCICIO 3

  numero= +prompt('ingrese un numero')

  while(numero<1 && numero>11){
    numero=+prompt('error ingrese un numero entre 1-10')
}
switch(numero){
    case 1 :
        if(numero==1){
            document.write('uno')
        }
    break
    case 2:
        if (numero=2){
            document.write('dos')
        }
    case 3:
        if (numero=3){
            document.write('tres')
        }
    case 4:
    if (numero=4){
    document.write('cuatro')
    }
    case 5:
    if (numero=5){
    document.write('cinco')
    }
    case 6:
    if (numero=6){
    document.write('seis')
    }
    case 7:
    if (numero=7){
        document.write('siete')
    }
    case 8:
    if (numero=8){
        document.write('ocho')
    }
    case 9:
    if (numero=9){
        document.write('9')
    }
    case 10:
    if (numero=10){
        document.write('diez')
    }
    
}

//EJERCICIO 4 
tiempo=+prompt('ingrese el tiempo de la llamada')

if(tiempo<=3){
    document.write(`el valor a pagar es 200`)
}else{
    extra=+prompt((tiempo-3)*100)
    document.write(`el valor a pagar es${200+extra}`)  
}

//EJERCICIO 5

totalConejos=+prompt('ingrese la cantidad de conejos que compro')
conejosBlancos=+prompt('ingrese la cantidad de conejos blancos que compro')
conejoNegros=+prompt('ingrese la cantidad de conejos negros que compro')
p1=+(5000)
p2=+(4000)
document.write(`la cantidad de conejos vendida fue ${totalConejos}`)
document.write(`el monto total de la venta es ${conejosBlancos*p1+conejoNegros*p2}`)
if(conejoNegros>conejosBlancos){
    document.write('se vendieron mas conejos negros')
}else if(conejoNegros==conejosBlancos){
    document.write('se vendio la misma cantidad de conejos')
}
else{
    document.write('se vendieron mas conejos blancos')
}

//EJERCICIO 6
a=1
cont=0
cont1=0

for(let i = 0; i < 3; i++) {
    notasPrevio=parseFloat(`ingrese la nota del previo ${i+1}`)
    while(notasPrevio>1.0 && notasPrevio<=5.0){
        notasPrevio=parseFloat(`ingrese la nota del previo ${i+1} dentro del rango de 1.0 a 5.0: `) }
    cont+=notasPrevio
    notasTrabajo=parseFloat(`ingrese su nota de trabajo${i+1}`)
    while(notasTrabajo>1.0 && notasTrabajo<=5.0){
        notasTrabajo=parseFloat(`ingrese la nota del trabajo ${i+1} dentro del rango de 1.0 a 5.0: `) }
    cont1+=notasTrabajo
} 
cont=parseFloat(cont/3)
cont1=parseFloat(cont/3)
notaFinal=parseFloat(cont+cont1)
document.write(`la nota final es ${notaFinal} `)  

//EJERCICIO 7 

articulo=prompt('ingrese el nombre del articulo')
precio=+prompt('ingrese el precio del articulo')
clave=+prompt('ingrese la clave')
while(clave<=0 && clave>2){
    clave=parseInt('ingrese la clave correcta')
}
cantidad=+prompt('ingrese la cantidad')

if(clave==1){
    operacion=+((precio*cantidad)*0.9)
}else{
    operacion=+((precio*cantidad)*0.8) 
}

document.write(articulo)
document.write(clave)
document.write(precio)
document.write(cantidad)
document.write(`el precio con descuento es ${operacion}`)

//EJERCICIO 8

presupuestoAnual=+prompt('ingrese el presupeusto anual')
psiquiatria=+prompt('ingrese el porcenta de psiquiatria ')
pediatria=+prompt('ingrese el pocenta de pediatria')
traumatologia=+prompt('ingrese el porcenta de traumatologia')
suma=+(psiquiatria+pediatria+traumatologia)
if(suma==100){
    document.write(`el presuspuesto de psiquiatria es ${(psiquiatria/100)*presupuestoAnual} el presupuesto de pediatria es ${(pediatria/100)*presupuesto} el presupuesto de traumatologia es ${(traumatologia/100)*presupuestoAnual}`)
}else{
    alert('los valores ingresados no concuerdan con el porcentaje total')
}

//EJERCICIO 9

distancia=+prompt('ingrese la distancia total del vuelo')
diasEstancia=+prompt('ingrese el dias de estancia en kilometros')
if(diasEstancia>=7 && distancia>800){
    total=parseFloat((distancia*2.5)*0.7)
    document.write(`el total de su compra -30% es: ${total}`)
}else{
    document.write(`el total de su compra es: ${distancia*2.5}`)
}







    

  
