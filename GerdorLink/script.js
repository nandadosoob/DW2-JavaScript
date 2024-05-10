

// verificação da quantidade de dígitos
// const botaoGeraLink = document.getElementById("geraOLinkDesktop");
const numeroTel = document.getElementById("numTel");
numeroTel.addEventListener("input", () => {
if (numeroTel.value.length === 11){
        let numLimpo = numeroTel.value.replace(/\D\s*/g, "");
        numFormatado = numLimpo.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        numeroTel.value = numFormatado;
        numeroTel.style.color = "green";
        // botaoGeraLink.disabled = false;
        // document.getElementById("abreLink").disabled = false;
        
        const botaoCopiar = document.getElementById("geraOLinkDesktop");
        botaoCopiar.addEventListener("click", () => {
            var box1 = document.getElementById("geraLink");
            const copy = document.createElement("div");
            const textoClicar = document.createElement("p");
            copy.id = "link";
            textoClicar.id = "clickText";
    
            copy.innerHTML = `https://wa.me/55${numeroTel.value.replace(/\D\s*/g, "")}`;
            textoClicar.innerHTML = "Clique no link para copiar";
            box1.appendChild(copy);
            box1.appendChild(textoClicar);
    
    
            const copiarLink = document.getElementById("link");
            const cliqueTexto = document.getElementById("clickText");
            copiarLink.addEventListener("click", () => {
            navigator.clipboard.writeText(copiarLink.innerHTML).then(() => cliqueTexto.innerHTML = ("Link copiado para a área de transferência."))
    })

})      
        

        
        
    }
else{
    // botaoGeraLink.disabled = true;
    numeroTel.style.color = "";
    // document.getElementById("abreOLink").disabled = true;

}
});



// const botaoCopiar = document.getElementById("geraOLinkDesktop");
// botaoCopiar.addEventListener("click", () => {
//     var box1 = document.getElementById("geraLink");
//     const copy = document.createElement("div");
//     const textoClicar = document.createElement("p");
//     copy.id = "link";
//     textoClicar.id = "clickText";
    
//     copy.innerHTML = `https://wa.me/55${numeroTel.value.replace(/\D\s*/g, "")}`;
//     textoClicar.innerHTML = "Clique no link para copiar";
//     box1.appendChild(copy);
//     box1.appendChild(textoClicar);
    
    
//     const copiarLink = document.getElementById("link");
//     const cliqueTexto = document.getElementById("clickText");
//     copiarLink.addEventListener("click", () => {
//         navigator.clipboard.writeText(copiarLink.innerHTML).then(() => cliqueTexto.innerHTML = ("Link copiado para a área de transferência."))
//     })

// })



//FUNCIONA
// function geraLink(){





