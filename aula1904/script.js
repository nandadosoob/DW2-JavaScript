const inputTexto = document.querySelector("[input-texto]")
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar]")


let modo = "caracteres"


function handleInputTexto(evento){
    divContador.innerText = `${evento.target.value.length} caracteres`
}

function handleBtnContar(evento){
    if (modo === "caracteres"){
        modo = "palavras"
        btnContar.innerText = "Contar Palavras"
    } else {
        modo = "caracteres"
        btnContar.innerText = "Contar Caracteres"
    }
}


inputTexto.addEventListener("input", handleInputTexto)
btnContar.addEventListener("click", handleBtnContar)