const listaTarefas = document.getElementById("espacoTarefas");
const botaoCriaTarefa = document.getElementById("botaoCriar");
const imagemPrancheta = document.getElementById("imgPrancheta");
const textoSemTarefa = document.getElementById("pSemTarefa");
const textoCriaTarefa = document.getElementById("pCriaTarefa");
const inputCriaTarefa = document.getElementById("inputAddTarefa");
const contTarefaCriada = document.getElementById("contadorTarefaCriada");
const contTarefaConcluida = document.getElementById("contadorConcluidas");
// const checkbox = document.querySelector('[type="checkbox"]');
// const checkbox = document.querySelectorAll('input[type="checkbox"]');
// const checkbox = document.querySelectorAll("inputCheckbox");
// const tarefaExcluir = document.getElementsByClassName("tarefa");


const estado = {
    listaTarefas: [],
    tarefasConcluidas: 0,
    tarefasCriadas: 0
}


function adicionarTarefa(e) {

    const novaTarefa = inputCriaTarefa.value
    estado.listaTarefas.push(novaTarefa)
    estado.tarefasCriadas += 1
    contTarefaCriada.innerHTML = estado.tarefasCriadas


    imagemPrancheta.style.display = "none";
    textoSemTarefa.style.display = "none";
    textoCriaTarefa.style.display = "none";
    listaTarefas.style.border = "none";

    const tarefa = document.createElement("li")
    tarefa.className = "tarefa"

    tarefa.innerHTML = `
        <label for="tarefa1">
        <input type="checkbox" name="tarefa1" class="inputCheckbox">
    <span id="spanTarefa">${inputCriaTarefa.value}</span>
    </label>
    <button class="deletaItem">
    <i class="ph ph-trash"></i>
    </button>
    `

    inputCriaTarefa.value = ""
    listaTarefas.appendChild(tarefa)
    inputCriaTarefa.focus();

    const botaoExclui = tarefa.querySelector(".deletaItem");
    botaoExclui.addEventListener("click", (excluirTarefa));

    const checkbox = document.querySelector('[type="checkbox"]');
    checkbox.addEventListener("click", (tarefaConcluida))

    criaEntrada()
    // lerEntrada()
    // carregarEntrada()    
    
}

function criaEntrada(){
    // console.log("---" + listaTarefas)
    // const jsonDados = JSON.stringify("listaTarefas")
    localStorage.setItem('lista', JSON.stringify(estado.listaTarefas))
    // alert('Dados salvos no localStorage');
    
    
    
}

function lerEntrada(){
    const lista = JSON.parse(localStorage.getItem('lista'))
    // localStorage.setItem(lista,estado.listaTarefas)
    estado.listaTarefas.push(novaTarefa)
    console.log(lista)
    
}

// function carregarEntrada(){
// }

function removeTarefa(){
    localStorage.removeItem(lista.tarefa)

}


function excluirTarefa() {
    const itemRemovido = event.target.closest(".tarefa")
    estado.tarefasCriadas -= 1;
    if(itemRemovido){
        listaTarefas.removeChild(itemRemovido);
        estado.tarefasConcluidas -= 1;

    }
    // contTarefaCriada.innerHTML = estado.tarefasCriadas;
    // removeTarefa()
    // contTarefaConcluida.innerHTML = estado.tarefasConcluidas;



    if (estado.tarefasCriadas === 0) {
        imagemPrancheta.style.display = "flex";
        textoSemTarefa.style.display = "flex";
        textoCriaTarefa.style.display = "flex";
        listaTarefas.style.borderTop = "1px solid #808080";
    }
}

function tarefaConcluida(e) {
    const checkboxInput = e.target
    const tarefaConteudo = checkboxInput.parentNode
    const spanConteudo = document.getElementById("spanTarefa")

    // const tarefaConteudo = checkboxInput.nextElementSibling;
    if (checkboxInput.checked) {
        spanConteudo.classList.add("concluido")
        tarefaConteudo.style.textDecoration = "line-through"
        estado.tarefasConcluidas += 1;
        contTarefaConcluida.innerHTML = `${estado.tarefasConcluidas} de ${estado.tarefasCriadas}`
        
    } else {
        spanConteudo.classList.remove("concluido")
        estado.tarefasConcluidas -= 1;
        tarefaConteudo.style.textDecoration = "none"
    };
}

botaoCriaTarefa.addEventListener("click", (e) => {
    adicionarTarefa()
})


inputCriaTarefa.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa()
    }
});

