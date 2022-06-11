const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function notaMedia(array) {
  var mediaTemp = 0;

  for (i = 0; i < array.length; i++) {

    const { nota } = array[i];
    mediaTemp = mediaTemp + nota;
  }
  return Math.floor(mediaTemp / array.length);
}

function corteAlunos(array, media) {

  let aprovados = [];

/*   media = Number(notaMedia(array)); */

  for (i = 0; i < array.length; i++){

    const { nota, nome } = array[i];

    if (nota >= media) {
      aprovados.push(nome);
    }
  }

  return aprovados;
}

console.log(corteAlunos(alunos, notaMedia(alunos)));