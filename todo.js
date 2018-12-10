


let tarefas = [];


function addTarefa(){

    let tarefa = document.getElementById("inputTodo").value;

    tarefas.push(tarefa);

/*
    tarefas.push({
        'tarefa': 'tarefa 1'
    });

    tarefas.push({
        tarefa: 'tarefa 2'
    });



    for(let i = 0; i < tarefas.length; i++){

        if(tarefas[i]){
            //tarefas[i].push(tarefa);
            console.log(tarefas[i]);
        }
    }

*/

    document.getElementById("inputTodo").value = '';

    exibeTarefas();



}

function exibeTarefas(){

    for(let i = 0; i < tarefas.length; i++){
        console.log(tarefas[i]);
    }
}

