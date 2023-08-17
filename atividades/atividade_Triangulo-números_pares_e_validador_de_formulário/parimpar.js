function parimpar(numero){
    if ((numero % 2) == 0){
        return "par";
    } else{
        return "ímpar";
    }
}
    function geraPares(ate){
        const numeros = document.querySelector("#pNumeros");
        numeros.innerHTML = "";
        for (x=1;x <= ate;x++){
            console.log(x);
            if (parimpar(x) == "par"){
                numeros.innerHTML += + x + " ";
            }
        }
    }