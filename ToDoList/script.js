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
    localStorage.removeItem("lista")
}


window.onload = mostraTarefa()

function adicionarTarefa() {

    const novaTarefa = inputCriaTarefa.value
    estado.listaTarefas.push(novaTarefa)
    estado.tarefasCriadas += 1
    contTarefaCriada.innerHTML = estado.tarefasCriadas


    imagemPrancheta.style.display = "none";
    textoSemTarefa.style.display = "none";
    textoCriaTarefa.style.display = "none";
    listaTarefas.style.border = "none";

    atualiaTela(inputCriaTarefa.value)

    inputCriaTarefa.focus();
    inputCriaTarefa.value = ""

    

    criaEntrada()
    lerEntrada()   
}

function apagaTela(){
    for (let index = 0; index < estado.listaTarefas.length; index++) {
        document.getElementById(index+"").remove()
        
    }
}

function atualiaTela(value){
    const tarefa = document.createElement("li")
    tarefa.className = "tarefa"
    tarefa.id = estado.listaTarefas.length-1

    tarefa.innerHTML = `
        <label for="tarefa1">
        <input type="checkbox" name="tarefa1" class="inputCheckbox">
    <span id="spanTarefa">${value}</span>
    </label>
    <button class="deletaItem">
    <i class="ph ph-trash"></i>
    </button>
    `
    
    listaTarefas.appendChild(tarefa)

    const botaoExclui = tarefa.querySelector(".deletaItem");
    botaoExclui.addEventListener("click", (e)=>{excluirTarefa(tarefa.id)
    });

    const checkbox = document.querySelector('[type="checkbox"]');
    checkbox.addEventListener("click", (tarefaConcluida))  
}

function excluirTarefa(event) {
    estado.tarefasCriadas -= 1;
    contTarefaCriada.innerText = estado.tarefasCriadas;
    const itemRemovido = estado.listaTarefas[event]
    console.log(event)
    if(itemRemovido){
        apagaTela()
        estado.tarefasConcluidas -= 1;
        estado.listaTarefas.splice(event,1)
        const valorEstado = estado.listaTarefas.slice()
        estado.listaTarefas = []
        removeTarefa()
        valorEstado.forEach(element => {
            estado.listaTarefas.push(element)
            atualiaTela(element)
        });
        criaEntrada()

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

function mostraTarefa(){
    const item = JSON.parse(localStorage.getItem("lista"))
    item?.forEach(element => {
        estado.listaTarefas.push(element)
        atualiaTela(element)
    });
}


botaoCriaTarefa.addEventListener("click", (e) => {
    adicionarTarefa()
})


inputCriaTarefa.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa()
    }
});

