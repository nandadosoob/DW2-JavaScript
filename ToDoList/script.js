const listaTarefas = document.getElementById("espacoTarefas");
const botaoCriaTarefa = document.getElementById("botaoCriar");
const imagemPrancheta = document.getElementById("imgPrancheta");
const textoSemTarefa = document.getElementById("pSemTarefa");
const textoCriaTarefa = document.getElementById("pCriaTarefa");
const inputCriaTarefa = document.getElementById("inputAddTarefa");
const contTarefaCriada = document.getElementById("contadorTarefaCriada");
const contTarefaConcluida = document.getElementById("contadorConcluidas");


const estado = {
    listaTarefas: [],
    tarefasConcluidas: 0,
    tarefasCriadas: 0
}



function criaEntrada(){
    localStorage.setItem("lista", JSON.stringify(estado.listaTarefas))
}

function lerEntrada(){
    const item = JSON.parse(localStorage.getItem("lista"))
    console.log(item)
}

function removeTarefa(){
    localStorage.removeItem("item")
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
    lerEntrada()   
}

function excluirTarefa() {
    estado.tarefasCriadas -= 1;
    contTarefaCriada.innerText = estado.tarefasCriadas;
    const itemRemovido = event.target.closest("li")
    if(itemRemovido){
        itemRemovido.remove();
        estado.tarefasConcluidas -= 1;
        removeTarefa()
        contTarefaConcluida.innerHTML = `${estado.tarefasConcluidas} de ${estado.tarefasCriadas}`
    }

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


    if (checkboxInput.checked) {
        estado.tarefasConcluidas += 1;
        tarefaConteudo.style.textDecoration = "line-through"
    } else {
        estado.tarefasConcluidas -= 1;
        tarefaConteudo.style.textDecoration = "none"
    };
    contTarefaConcluida.innerHTML = `${estado.tarefasConcluidas} de ${estado.tarefasCriadas}`
}

botaoCriaTarefa.addEventListener("click", (e) => {
    adicionarTarefa()
})


inputCriaTarefa.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa()
    }
});

