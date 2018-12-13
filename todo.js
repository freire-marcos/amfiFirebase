
let tarefas = [];
const retorno = document.getElementById("retorno");


function addTarefa(){

    let tarefa = document.getElementById("inputTodo").value;

    tarefas.push(tarefa);


    document.getElementById("inputTodo").value = '';

    escreverDados(tarefa);

}
