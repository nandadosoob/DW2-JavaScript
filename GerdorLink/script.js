const numeroTel = document.getElementById("numTel");

numeroTel.addEventListener("input", () => {
    let numLimpo = numeroTel.value.replace(/\D/g, "");
    let telFormatado = numLimpo.replace(/(\(\d{2}\)\s)(\d{4,5}\-\d{4})/g);
    numeroTel.value = telFormatado;


})
    

// let tiraLetras = numeroTel.replace(/\D/g,"")
// let telFormatado = tiraLetras.replace(\(\d{2}\)\s\d{5}\-\d{4});
// return telFormatado;

// //verificação da quantidade de dígitos
// if (numeroTel.length === 11){
//     numeroTel.mascara

// } else{
// }

// // \(\d{2}\)\s\d{5}\-\d{4}

// function geraLink(){
//     let boxLink = document.createElement("div");
//     boxLink = ;
//     boxLink.classList.add("linkBox")
//     document.body.appendChild(boxLink)
// }

// function linkAbre(){

// }
