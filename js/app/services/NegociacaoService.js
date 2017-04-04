class NegociacaoService {

	constructor(){
		this._http = new HttpService();
	}

	obterNegociacoesDaSemana() {
		return new Promise((resolve, reject) => {
			this._http.get('negociacoes/semana')
			.then(negociacoes => {
				resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
			})
			.catch(err => reject('Não foi possível recuperar as negociações da semana'));
		});
	}

	obterNegociacoesDaSemanaAnterior() {
		return new Promise((resolve, reject) => {
			this._http.get('negociacoes/anterior')
			.then(negociacoes => {
				resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
			})
			.catch(err => reject('Não foi possível recuperar as negociações da semana anterior'));
		});
	}

	obterNegociacoesDaSemanaRetrasada() {
		return new Promise((resolve, reject) => {
			this._http.get('negociacoes/retrasada')
			.then(negociacoes => {
				resolve(negociacoes.map(obj => new Negociacao(new Date(obj.data), obj.quantidade, obj.valor)));
			})
			.catch(err => reject('Não foi possível recuperar as negociações da semana retrasada'));
		});
	}
}