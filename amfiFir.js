firebase.initializeApp(config);

var database = firebase.database();

function escreverDados(tarefa) {
    firebase.database().ref('tarefas/' + tarefa).set({
      tarefa: tarefa
    });
  }