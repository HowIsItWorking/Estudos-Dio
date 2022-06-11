function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}


const pessoa1 = {
  nome: "José",
  idade: 15,
}

const pessoa2 = {
  nome: "Maria",
  idade: 25
}

const animal = {
  nome: "Inu",
  idade: 2,
  raca: "border collie"
}

console.log(calculaIdade.apply(animal, [4]));