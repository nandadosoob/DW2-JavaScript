const inputTexto = document.querySelector("[input-texto]")
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar]")


let modo = "caracteres"


function handleInputTexto(evento){
    let palavras
    if(modo ==="caracteres"){
        divContador.innerText = `${evento.target.value.length} caracteres`
} else {
    palavras = (inputTexto.value.trim() == "" ? 0 : inputTexto.value.trim().split(/\s+/).length)
    divContador.innerText = palavras + " Palavras"
    
}
}

function handleBtnContar(evento){
    if (modo === "caracteres"){
        modo = "palavras"
        btnContar.innerText = "Contar Palavras"
    } else {
        modo = "caracteres"
        btnContar.innerText = "Contar Caracteres"
        // divContador.innerText = `${evento.target.value.length} caracteres`
    }
}


inputTexto.addEventListener("input", handleInputTexto)
inputTexto.addEventListener("click", handleInputTexto)
btnContar.addEventListener("click", handleBtnContar)