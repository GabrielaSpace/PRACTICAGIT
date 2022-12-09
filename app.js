/* Escriba un programa que pida un año y que escriba si es bisiesto o no. 
Se recuerda que los años bisiestos 
son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí */


let year =parseInt(prompt('introduce un año para saber si es bisiesto',0));

if(isNaN(year)){
    alert('Debe ingresar un número correcto');

}else if (year%4==0 && (year%100 != 0 || year%400 == 0)) {
    document.write("El año:"+year+"  SI es bisiesto");
    
} else {
    document.write("El año:"+year+"  NO es bisiesto");
    
}