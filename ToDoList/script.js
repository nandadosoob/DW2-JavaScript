const listaTarefas = document.getElementById("espacoTarefas");
const botaoCriaTarefa = document.getElementById("botaoCriar");
const imagemPrancheta = document.getElementById("imgPrancheta");
const textoSemTarefa = document.getElementById("pSemTarefa");
const textoCriaTarefa = document.getElementById("pCriaTarefa");
const inputCriaTarefa = document.getElementById("inputAddTarefa");
const botaoApaga = document.getElementsByClassName("ph-trash");
const contTarefaCriada = document.getElementById("contadorTarefaCriada");
const contTarefaConcluida = document.getElementById("contadorConcluidas");


let estado = {
    listaTarefas:[],
    tarefasConcluidas: 0,
    tarefasCriadas:0
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

    // const criandoTarefa = document.createElement("li")
    // criandoTarefa.className = "tarefa"
    // criandoTarefa.innerHTML = inputCriaTarefa.value;
    // const p = document.createElement("p")
    // p.innerText = "Olá"
    // criandoTarefa.appendChild(p)
    // listaTarefas.appendChild(criandoTarefa)
    
    const tarefa = document.createElement("li")
    tarefa.className = "tarefa"
    
    tarefa.innerHTML = `
    <label for="tarefa1">
    <input type="checkbox" name="tarefa1" class="inputCheckbox">
    <span>${inputCriaTarefa.value}</span>
    </label>
    <i class="ph ph-trash"></i>
    `
    inputCriaTarefa.value = ""
    listaTarefas.appendChild(tarefa)
    inputCriaTarefa.focus();

}

function excluirTarefa(e){
    tarefa.parentNode.removeChild(tarefa)
}

botaoCriaTarefa.addEventListener("click", adicionarTarefa)
botaoApaga.addEventListener("click", excluirTarefa)
inputCriaTarefa.addEventListener("keypress", (e) => {
    if (e.key === 'Enter'){
        adicionarTarefa()
    }

})