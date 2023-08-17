function Soma(vl1,vl2){
    return vl1+vl2
}
function Subtrair(vl1,vl2){
    return vl1-vl2
}
function Mulitplicar(vl1,vl2){
    return vl1*vl2
}
function Dividir(vl1,vl2){
    return vl1/vl2
}
///Deixou de existir essa função//
function IniciaSoma(){
    let valor1 = 0;
    let valor2 = 0;
    valor1 = parseFloat(window.prompt("Informe o primeiro valor"));
    valor2 = parseFloat(window.prompt("Informe o segundo valor"));
    window.alert("A soma dos valores é: "+Soma(valor1,valor2))
}

function Operacao(op){
    let valor1 = 0;
    let valor2 = 0;
    let resultado = "";
    valor1 = parseFloat(window.prompt("Informe o primeiro valor"));
    valor2 = parseFloat(window.prompt("Informe o segundo valor"));
    if(op == "Somar"){
        resultado = "A soma de "+valor1+" + "+valor2+"é igual a: "+Soma(valor1,valor2);
    }
     else if(op == "Subtrair"){
        resultado = "A subtração de "+valor1+" - "+valor2+"é igual a: "+Subtrair(valor1,valor2);
    }
     else if(op == "Multiplicar"){
        resultado = "A multiplicação de "+valor1+" * "+valor2+"é igual a: "+Multiplicar(valor1,valor2);
    }
     else if(op == "Dividir"){
        resultado = "A divisão de "+valor1+" / "+valor2+"é igual a: "+Dividir(valor1,valor2);
    }
    document.querySelector('resultado').innerHTML = resultado;
}