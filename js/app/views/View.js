class View {
	constructor(elemento) {
		this._elemento = elemento;
	}

	template() {
		throw new Error('"template" method must be implemented.');
	}

	update(model) {
		this._elemento.innerHTML = this.template(model);
	}
}