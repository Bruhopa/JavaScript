function fTabuada(){
    const numero = parseInt(document.querySelector("#iNumero").value);
    let mresult = "";
    const resultado = document.querySelector("#bResultado");
    for(x=0;x<=10;x++){
        mresult = mresult + numero+" x "+x+" = "+(numero*x)+"<br>";
    }
    resultado.innerHTML = mresult;
    return false
}