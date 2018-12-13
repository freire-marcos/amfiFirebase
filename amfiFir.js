const retornoDAO = document.getElementById("retorno");

firebase.initializeApp(config);

var database = firebase.database();


function escreverDados(tarefa) {
    database.ref('tarefas/' + tarefa).set({
      tarefa: tarefa
    });
  }

  database.ref('tarefas/').on('child_added', function(snapshot) {

    tarefas = [snapshot.val().tarefa];
    
    console.log(tarefas);

    exibeTarefas(tarefas);
    
  });

  function exibeTarefas(snapshot){


    retornoDAO.innerHTML = "<ul>";

    for(let i = 0; i < 11; i++){      
      retornoDAO.innerHTML += "<li>" + tarefas[i] + "</li>";      
    };

    retornoDAO.innerHTML += "</ul>";

  }

  