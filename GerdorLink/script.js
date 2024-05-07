const numeroTel = document.getElementById("numTel");

numeroTel.addEventListener("input", () => {
    var numLimpo = numeroTel.value.replace(/\D\s*/g, "");
    numFormatado = numLimpo
    .replace(/(\d{2})/, "($1) ")
    .replace(/(\d{5})(\d{4})/, "$1-$2")
    numeroTel.value = numFormatado;
})

//verificação da quantidade de dígitos
// if (numeroTel.length === 11){
//     numeroTel.addEventListener("input", () => {
//         let numLimpo = numeroTel.value.replace(/\D/g, "");
//         let telFormatado = numLimpo.replace(/(\(\d{2}\)\s)(\d{4,5}\-\d{4})/g);
//         numeroTel.value = telFormatado;



// })
    

// } else{
// }



// function geraLink(){
//     let boxLink = document.createElement("div");
//     boxLink = ;
//     boxLink.classList.add("linkBox")
//     document.body.appendChild(boxLink)
// }

// function linkAbre(){

// }
