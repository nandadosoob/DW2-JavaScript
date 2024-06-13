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
// const tarefaConteudo = document.getElementById("spanTarefa");
// const tarefaExcluir = document.getElementsByClassName("tarefa");


let estado = {
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

    // onclick="tarefaConcluida()"

}

function excluirTarefa(e) {
    const itemRemovido = event.target.closest(".tarefa")
    listaTarefas.removeChild(itemRemovido);
    estado.tarefasCriadas -= 1;
    contTarefaCriada.innerHTML = estado.tarefasCriadas;
    // estado.tarefasConcluidas -= 1;
    // contTarefaConcluida.innerHTML = estado.tarefasConcluidas;


    if (estado.tarefasCriadas === 0) {
        imagemPrancheta.style.display = "flex";
        textoSemTarefa.style.display = "flex";
        textoCriaTarefa.style.display = "flex";
        listaTarefas.style.borderTop = "1px solid #808080";
    }
}

function tarefaConcluida(e) {
    const checkboxInput = event.target;
    const tarefaConteudo = checkboxInput.nextElementSibling;
    if (checkboxInput.checked) {
        tarefaConteudo.style.textDecoration = "line-through"
        estado.tarefasConcluidas += 1;
    } else {
        estado.tarefasConcluidas -= 1;
        tarefaConteudo.style.textDecoration = "none"
    };
    contTarefaConcluida.innerHTML = estado.tarefasConcluidas
}

botaoCriaTarefa.addEventListener("click", (e) => {
    adicionarTarefa()
})


inputCriaTarefa.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa()
    }
});

