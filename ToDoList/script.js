const listaTarefas = document.getElementById("espacoTarefas");
const botaoCriaTarefa = document.getElementById("botaoCriar");
const imagemPrancheta = document.getElementById("imgPrancheta");
const textoSemTarefa = document.getElementById("pSemTarefa");
const textoCriaTarefa = document.getElementById("pCriaTarefa");
const inputCriaTarefa = document.getElementById("inputAddTarefa");
// const botaoApaga = document.getElementsByClassName("ph ph-trash");
const contTarefaCriada = document.getElementById("contadorTarefaCriada");
const contTarefaConcluida = document.getElementById("contadorConcluidas");
// const checkboxInput = document.querySelectorAll('input[type="checkbox"]');
const checkboxInput = document.querySelectorAll("inputCheckbox");
const tarefaConteudo = document.getElementById("spanTarefa");
// const tarefaExcluir = document.getElementsByClassName("tarefa");

let estado = {
    listaTarefas: [],
    tarefasConcluidas: 0,
    tarefasCriadas: 0
}



function adicionarTarefa(e) {

    // console.log(e)

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
    <input type="checkbox" name="tarefa1" class="inputCheckbox" onclick="tarefaConcluida()">
    <span id="spanTarefa">${inputCriaTarefa.value}</span>
    </label>
    <button class="deletaItem">
        <i class="ph ph-trash"></i>
    </button>
    `
    inputCriaTarefa.value = ""
    listaTarefas.appendChild(tarefa)
    inputCriaTarefa.focus();
    
    }
    const tarefaExcluir = document.getElementsByClassName("tarefa");

    const lixoDeleta = tarefaExcluir.deletaItem
    

function excluirTarefa() {
    const itemRemovido = event.target.closest(".tarefa")
    listaTarefas.removeChild(itemRemovido);
    estado.tarefasCriadas -= 1;
    contTarefaCriada.innerHTML = estado.tarefasCriadas;


    //DEU CERTO QUE
}

function tarefaConcluida() {
    if (checkboxInput.checked) {
        tarefaConteudo.innerHTML = `<s>${inputCriaTarefa.value}</s>`
        estado.tarefasConcluidas += 1
        contTarefaConcluida.innerHTML = estado.tarefasConcluidas
    };
}

botaoCriaTarefa.addEventListener("click", (e) => {
    adicionarTarefa()
    //     console.log(e)

    //     const novaTarefa = inputCriaTarefa.value
    //     estado.listaTarefas.push(novaTarefa)
    //     estado.tarefasCriadas += 1
    //     contTarefaCriada.innerHTML = estado.tarefasCriadas


    //     imagemPrancheta.style.display = "none";
    //     textoSemTarefa.style.display = "none";
    //     textoCriaTarefa.style.display = "none";
    //     listaTarefas.style.border = "none";

    //     // const criandoTarefa = document.createElement("li")
    //     // criandoTarefa.className = "tarefa"
    //     // criandoTarefa.innerHTML = inputCriaTarefa.value;
    //     // const p = document.createElement("p")
    //     // p.innerText = "Olá"
    //     // criandoTarefa.appendChild(p)
    //     // listaTarefas.appendChild(criandoTarefa)

    //     const tarefa = document.createElement("li")
    //     tarefa.className = "tarefa"

    //     tarefa.innerHTML = `
    //     <label for="tarefa1">
    //     <input type="checkbox" name="tarefa1" class="inputCheckbox" onclick="tarefaConcluida()">
    //     <span id="spanTarefa">${inputCriaTarefa.value}</span>
    //     </label>
    //     <button onclick="excluirTarefa()">
    //         <i class="ph ph-trash"></i>
    //     </button>
    //     `
    //     inputCriaTarefa.value = ""
    //     listaTarefas.appendChild(tarefa)
    //     inputCriaTarefa.focus();

})


inputCriaTarefa.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa()
    }
});
lixoDeleta.addEventListener("click", excluirTarefa())
// checkboxInput.addEventListener("change", tarefaConcluida)v