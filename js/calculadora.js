function calculate(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operador = document.getElementById("operator").value;
    let resultadoTxt;
    let esCorrecto = true;
    if(operador == '+'){
        resultadoTxt = num1 + num2;
    }
    if(operador == '-'){
        resultadoTxt = num1 - num2;
    }
    if(operador == '*'){
        resultadoTxt = num1 * num2;
    }
    if((num2 == 0) && (operador == '/')){
        alert("No se puede dividir por cero");
        esCorrecto = false;
    }else{
        resultadoTxt = num1 / num2;
    }

    if(esCorrecto){
        document.getElementById("resultado").textContent = `El resultado es: ${num1} ${operador} ${num2} = ${resultadoTxt}`;
    }
}


function calculate2(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operador = document.getElementById("operator").value;
    let resultadoTxt;

    switch(operador){
        case '+':
            resultadoTxt = num1 + num2;
            break;
        case '-':
            resultadoTxt = num1 - num2;
            break;
        case '*':
            resultadoTxt = num1 * num2;
            break;
        case '/':
            if(num2 == 0){
                document.getElementById("resultado").innerHTML = "No se puede dividir por cero";
                return;
            }
            resultadoTxt = num1 / num2;
            break;
    }
    document.getElementById("resultado").textContent = `El resultado es: ${num1} ${operador} ${num2} = ${resultadoTxt}`;

}


function limpiar(){
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("operator").value = '+';
    document.getElementById("resultado").textContent = "";
}