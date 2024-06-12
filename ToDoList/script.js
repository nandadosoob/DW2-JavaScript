const listaTarefas = document.getElementById("espacoTarefas");
const botaoCriaTarefa = document.getElementById("botaoCriar");
const imagemPrancheta = document.getElementById("imgPrancheta");
const textoSemTarefa = document.getElementById("pSemTarefa");
const textoCriaTarefa = document.getElementById("pCriaTarefa");
const inputCriaTarefa = document.getElementById("inputAddTarefa");
// const botaoApaga = document.getElementsByClassName("ph ph-trash");
const contTarefaCriada = document.getElementById("contadorTarefaCriada");
const contTarefaConcluida = document.getElementById("contadorConcluidas");
const checkbox = document.querySelectorAll('[type="checkbox"]');
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
        <input type="checkbox" name="tarefa1" class="inputCheckbox" onclick="tarefaConcluida()">
    <span id="spanTarefa">${inputCriaTarefa.value}</span>
    </label>
    <button class="deletaItem" onclick="excluirTarefa()">
    <i class="ph ph-trash"></i>
    </button>
    `
    inputCriaTarefa.value = ""
    listaTarefas.appendChild(tarefa)
    inputCriaTarefa.focus();

}
// const tarefaExcluir = document.getElementsByClassName("tarefa");

// const lixoDeleta = tarefaExcluir.deletaItem


function excluirTarefa(e) {
    const itemRemovido = event.target.closest(".tarefa")
    listaTarefas.removeChild(itemRemovido);
    estado.tarefasCriadas -= 1;
    // estado.tarefasConcluidas -= 1;
    contTarefaConcluida.innerHTML = estado.tarefasConcluidas;
    // contTarefaCriada.innerHTML = estado.tarefasCriadas;
    //DEU CERTO QUE
}

function tarefaConcluida() {
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
// checkboxInput.addEventListener("change", tarefaConcluida)v
// lixoDeleta.addEventListener("click", excluirTarefa())
// checkbox.addEventListener("click", tarefaConcluida)