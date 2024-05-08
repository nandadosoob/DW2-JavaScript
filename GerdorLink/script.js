

// verificação da quantidade de dígitos
const numeroTel = document.getElementById("numTel");
numeroTel.addEventListener("input", () => {
if (numeroTel.value.length === 11){
        let numLimpo = numeroTel.value.replace(/\D\s*/g, "");
        numFormatado = numLimpo.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        numeroTel.value = numFormatado;
        numeroTel.style.color = "green";
        document.getElementById("geraOLink").disabled = false;
        document.getElementById("abreLink").disabled = false;
    }
else{
    numeroTel.style.color = "";
    document.getElementById("geraOLink").disabled = true;
    document.getElementById("abreOLink").disabled = true;

}
});

// function geraLink(){
//     let boxLink = document.createElement("div");
//     boxLink = ;
//     boxLink.classList.add("linkBox")
//     document.body.appendChild(boxLink)
// }

// function linkAbre(){

// }

const gerarLink = document.getElementById("geraOLink");
const abrirLink = document.getElementById("abreOLink");
gerarLink.addEventListener("click", () => {
    var box1 = document.getElementById("geraLink");
    // var copy = document.createElement("div");
    var textoClicar = document.createElement("p");
    textoClicar.innerHTML = "Clique no link para copiar";
    box1.appendChild(textoClicar);
})


function geraLink(){
    var box1 = document.getElementById("geraLink");
    var copy = document.createElement("div");
    var textoClicar = document.createElement("p");
    copy.id = "link";
    
    copy.innerHTML = "";
    textoClicar.innerHTML = "Clique no link para copiar";
    box1.appendChild(copy);
    box1.appendChild(textoClicar);
}

// function copyToClipboard() {
//     navigator.clipboard.writeText(numeroTel).then(() => {
//       alert('Copied to Clipboard')
//     })
//   }


//no site da w3shcools tem info pra ajudar a fazer o ngç de copiar link