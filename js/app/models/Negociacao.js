// Isso é uma classe em javascript!
class Negociacao {
	// Construtor da classe
	constructor(data, quantidade, valor) {
		/* 	Atributos da classe (obs: Sempre tratar com o this)
			Até a data no qual este código foi escrito o javascript não
			possuí controladores de acesso iguais das linguagens de programação
			orientadas a objetos, por isso foi criada uma convenção para que
			todos os atributos do tipo "private" devem ser nomeados com o 
			caracter "_" na frente do nome, seguindo esta convenção o dev
			saberá que este atributo é do tipo private e só deve ser manipulado
			através de métodos dentro da classe.
		*/
		this._data = new Date(data.getTime()); // Programação defensiva (emulando o private para alteração da data através dos métodos da classe Date)
		this._quantidade = quantidade;
		this._valor = valor;

		// Para impedir que os dados dessas propriedades sejam alterados em tempo de execução
		// também podemos contar com o método Object.freeze([object])
		Object.freeze(this);

	}

	// Métodos da classe.
	// O js utiliza como gambeta a palavra chave "get" seguida pelo nome do método para "driblar" o problema da fata dos 
	// modificadores de acesso, ao utilizar a palavra chave "get" o método pode ser chamado com a mesma sintaxe de como 
	// fosse chamar o atributo.

	get data() {
		return new Date(this._data.getTime()); // Programação defensiva (emulando o private para alteração da data através dos métodos da classe Date)
	}

	get quantidade() {
		return this._quantidade;
	}

	get valor() {
		return this._valor;
	}

	get volume() {
		return this._quantidade * this._valor;
	}

}