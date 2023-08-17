function fMaioridade(){
    const nome=document.querySelector("#iNome").value;
    const idade=parseInt(document.querySelector("#iIDade").value);
    const resultado=document.querySelector("#dResultado").value;

    if(idade >= 18){
        resultado.innerHTML = "Olá"+nome+"você tem "+idade+"anos e é maior de idade";
    } else{
        resultado.innerHTML = "Olá"+nome+"você tem "+idade+"anos e é menor de idade";
    }
    return false;
}