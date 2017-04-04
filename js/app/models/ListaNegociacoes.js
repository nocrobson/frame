class ListaNegociacoes {
	constructor() {
		this._negociacoes = [];
	}

	add(negociacoes) {
		this._negociacoes.push(negociacoes);
	}

	get negociacoes() {
		return [].concat(this._negociacoes);
	}

	clear() {
		this._negociacoes = [];
	}

	get volumeTotal() {
		return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
	}

	ordena(criterio) {		
		this._negociacoes.sort(criterio);		
	}

	ordenaReverso(criterio) {
		this._negociacoes.reverse(criterio);	
	}
}
