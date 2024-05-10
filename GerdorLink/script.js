

// verificação da quantidade de dígitos
// const botaoGeraLink = document.getElementById("geraOLinkDesktop");
const numeroTel = document.getElementById("numTel");
numeroTel.addEventListener("input", () => {
if (numeroTel.value.length === 11){
        const numLimpo = numeroTel.value.replace(/\D\s*/g, "");
        numFormatado = numLimpo.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        numeroTel.value = numFormatado;
        numeroTel.style.color = "green";
        
        const botaoCopiar = document.getElementById("geraOLinkDesktop");
        botaoCopiar.addEventListener("click", () => {
            var box1 = document.getElementById("geraLink");
            const copy = document.createElement("div");
            const textoClicar = document.createElement("p");
            copy.id = "link";
            textoClicar.id = "clickText";
    
            // copy.innerHTML = `https://wa.me/55${numeroTel.value.replace(/\D\s*/g, "")}`;
            copy.innerHTML = `https://wa.me/55${numLimpo}`;
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
    numeroTel.style.color = "";
   }
});


//TESTE
// function abreLink(){
//     let botaoAbreLink = document.getElementById("abreOLinkDesktop")
//     const vaiAbrir = document.createElement("a");
//     vaiAbrir.href = `https://wa.me/55${numLimpo}`;
//     vaiAbrir.target = "_blank";
//     botaoAbreLink.appendChild(vaiAbrir);

// }




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





