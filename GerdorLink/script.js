const botaoCopiar = document.getElementById("geraOLinkDesktop");
const numeroTel = document.getElementById("numTel");
const abreLink = document.getElementById("abreOLinkDesktop");
const aBotao = document.getElementById("botaoAbreLink");
const textoClicar = document.getElementById("clickText");
const copy = document.getElementById("link");

// verificação da quantidade de dígitos
// const botaoGeraLink = document.getElementById("geraOLinkDesktop");
numeroTel.addEventListener("input", (evento) => {
    evento.target.value = evento.target.value.replace(/\D\s*/g, "");
    evento.target.value = evento.target.value.replace( /(\d{2})(\d)/, "($1) $2");
    evento.target.value = evento.target.value.replace( /(\d{5})(\d)/, "$1-$2");
    evento.target.value.style = "green"; 
});


botaoCopiar.addEventListener("click", () => {
    // copy.innerHTML = `https://wa.me/55${numeroTel.value.replace(/\D\s*/g, "")}`;
    copy.innerHTML = `https://wa.me/55${num}`;
    // textoClicar.innerHTML = "Clique no link para copiar";
    // const copiarLink = document.getElementById("link");
    // const cliqueTexto = document.getElementById("clickText");
    copy.addEventListener("click", () => {
    navigator.clipboard.writeText(copy.innerHTML).then(() => textoClicar.innerHTML = ("Link copiado para a área de transferência."))})

})

abreLink.addEventListener("click", () => {
    aBotao.href = `https://wa.me/55${numeroTel.value.replace(/\D\s*/g, "")}`;
    aBotao.target = "_blank"
}) 


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





