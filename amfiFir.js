firebase.initializeApp(config);

var database = firebase.database();

function escreverDados(tarefa) {
    database.ref('tarefas/' + tarefa).set({
      tarefa: tarefa
    });
  }

  database.ref('tarefas/').on('child_added', function(snapshot) {
    exibeTarefas(snapshot.val());
    console.log(snapshot.val());
    
    
  });