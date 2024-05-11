

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
            navigator.clipboard.writeText(copiarLink.innerHTML).then(() => cliqueTexto.innerHTML = ("Link copiado para a área de transferência."))})
        
    })
    const abreLink = document.getElementById("abreOLinkDesktop");
    abreLink.addEventListener("click", () => {
        const aBotao = document.getElementById("botaoAbreLink");
        aBotao.href = `https://wa.me/55${numeroTel.value.replace(/\D\s*/g, "")}`;
    })      
    
    
}
else{
    numeroTel.style.color = "";
}
});





//ATE AQ FUNCIONA
// const abreLink = document.getElementById("abreOLinkDesktop");
// abreLink.addEventListener("click", () => {
//     // const linkDoBotao = document.getElementById("link").innerText;
//     const aBotao = document.getElementById("botaoAbreLink");
//     // aBotao.href = linkDoBotao;
//     aBotao.href = "https://www.w3schools.com/js/js_loop_for.asp"; //da certo
// })

//funciona
// const abreLink = document.getElementById("abreOLinkDesktop");
//     abreLink.addEventListener("click", () => {
//         const linkDoBotao = `https://wa.me/55${numeroTel.value.replace(/\D\s*/g, "")}`;
//         const aBotao = document.getElementById("botaoAbreLink");
//         aBotao.href = linkDoBotao;
//     )}




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





