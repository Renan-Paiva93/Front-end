class Despesa {
	constructor(ano, mes, dia, tipo, descricao, valor) {
		this. ano = ano
		this.mes = mes
		this.dia = dia 
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}
}

class Bd { // responsável por controlar a situação

	constructor() {
			let id = localStorage.getItem('id')

			if(id === null) {
				localStorage.setItem('id', 0)
			}
		}

	getProximoId() {
		let getProximoId = localStorage.getItem('id') 
		return parseInt(getProximoId)  + 1
	}

	gravar(d) {
		let id = this.getProximoId()

		localStorage.setItem('despesa', JSON.stringify(d))

		localStorage.setItem('id', id)
	}
}

let bd = new Bd()


function cadastrarDespesa() {

	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')

	console.log()
	
	let despesa = new Despesa(
		ano.value,
		mes.value,
		dia.value,
		tipo.value,
		descricao.value,
		valor.value
		)

	bd.gravar(despesa)
}

