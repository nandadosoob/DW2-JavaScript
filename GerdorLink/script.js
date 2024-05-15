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
    if (numeroTel.value.length === 15){
        numeroTel.style.color = "green";   
    } else{
        numeroTel.style.color = "";
    }
});


botaoCopiar.addEventListener("click", () => {
    // copy.style.display = flex;
    copy.innerHTML = `https://wa.me/55${numeroTel.value.replace(/\D\s*/g, "")}`
    // copy.innerHTML = `https://wa.me/55${numeroTel.value.replace(/\D\s*/g, "")}`;
    // copy.innerHTML = `https://wa.me/55${evento.target.value.replace(/\D\s*/g, "")}`;
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

