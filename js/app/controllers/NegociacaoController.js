class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $("#data-campo");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
		this._listaNegociacoes = new Bind(
			new ListaNegociacoes, 
			new NegociacoesView($(".negociacoes-view")), 
			'add', 'clear', 'ordena', 'ordenaReverso'
		);
		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagem-view'));
		this._ordenacaoAnterior = '';
	}

	adiciona(event) {
		event.preventDefault();	
		let texto = '';

		try{	
				this._listaNegociacoes.add(new Negociacao(
					DataHelper.textoParaData(this._inputData.value),
					this._inputQuantidade.value,
					this._inputValor.value)
				);		
				this._limpaFormulario();		
				texto = 'Negociação adicionada com sucesso'		
		} catch(erro) {
			texto = erro;
		}

		this._mensagem.texto = texto;
		this._mensagemView.update(this._mensagem);
	}

	apaga() {
		this._listaNegociacoes.clear();		
		this._mensagem.texto = 'Negocioções apagadas com sucesso';
		this._mensagemView.update(this._mensagem);
	}

	importaNegociacoes() {
		let ngcServ = new NegociacaoService();
		Promise.all([ngcServ.obterNegociacoesDaSemana(), 
			ngcServ.obterNegociacoesDaSemanaAnterior(),
			ngcServ.obterNegociacoesDaSemanaRetrasada()]
		).then(negociacoes => {	
			let lista = negociacoes.reduce((primeiro, segundo)=>primeiro.concat(segundo));
			lista.map((obj)=>this._listaNegociacoes.add(obj));			
		}).catch(err => {
			console.log(err);
			this._mensagem.texto = err;
			this._mensagemView.update(this._mensagem);
		});
	}

	_criaNegociacao(data, quantidade, valor) {
		return new Negociacao(data, quantidade, valor);
	}

	_limpaFormulario() {
		this._inputData.value = "";
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0;
		this._inputData.focus();
	}

	ordena(coluna) {	
		let criterio = (a, b) => a[coluna] - b[coluna];
		let tagOrdenacao = "#ordenacao-" + coluna;		

		if (coluna != this._ordenacaoAnterior || !this._ordenacaoAnterior) {
			this._listaNegociacoes.ordena(criterio);	
			document.querySelector(tagOrdenacao).innerHTML = '˅';
		} else {
			this._listaNegociacoes.ordenaReverso(criterio);
			document.querySelector(tagOrdenacao).innerHTML = '˄';
			coluna = '';
		}
		
		this._ordenacaoAnterior = coluna;
	}
}