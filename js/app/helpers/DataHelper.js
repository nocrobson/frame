class DataHelper {
	constructor() {	
		throw new Error("DateHelper cannot be instantiated");
	}

	static dataParaTexto(data) {
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}

	static textoParaData(texto) {
		if (!/\d{2}\/\d{2}\/\d{4}/g.test(texto)) {
			throw new Error('A data informada deve estar no formato dd/mm/aaaa');
		}

		return new Date(...texto.split('/').reverse().map((item, indice)=> item - indice % 2));
	}
}