
let tarefas = [];
const retorno = document.getElementById("retorno");


function addTarefa(){

    let tarefa = document.getElementById("inputTodo").value;

    tarefas.push(tarefa);


    document.getElementById("inputTodo").value = '';

    escreverDados(tarefa);

    exibeTarefas();

}

function exibeTarefas(){

    retorno.innerHTML = '<ul>'
    
    for(let i = 0; i < tarefas.length; i++){

        retorno.innerHTML += "<li>" + tarefas[i] + "</li>";

    }

    retorno.innerHTML += '</ul>';
}
