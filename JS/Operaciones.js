//javascript

function realizarOperaciones(){

    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let operacion = document.getElementById('Operaciones').value;

    switch(operacion){
        case "Sumar":
            alert("La suma de los 2 numeros es: " + (num1+num2));
            break;
        case "Restar":
            alert("La resta de los 2 numeros es: " + (num1-num2));
            break;
        case "Multiplicar":
            alert("La multiplicacion de los 2 numeros es: " + (num1*num2));
            break;
        case "Dividir":
            if(num2 === 0){
                alert("NO esta permitido la division entre cero");
            }else{
                alert("La división de los 2 numeros es: " + (num1/num2))
            }
        break;
    }

}