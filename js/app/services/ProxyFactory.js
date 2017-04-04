class ProxyFactory {
	static create(objeto, props, action) {
		return new Proxy(objeto, {
			/* Este get será disparado toda a vez que eu tentar ler alguma propriedade do objeto em questão			
			** Sobre os parâmetros:
			** target: referência ao objeto original que está sendo encapsulado pelo Proxy
			** neste caso ListaNegociacoes.
			** property: a propriedade do target que está sendo acessada.
			** receiver: referência ao proxy.
			*/
			get: function(target, prop, receiver) {				
				if (props.includes(prop) && ProxyFactory._isFunction(target[prop])){		
					return function() {
						let retorno = Reflect.apply(target[prop], target, arguments); 
						action(target);
						return retorno;
					}					
				}

				return Reflect.get(target, prop, receiver);
			},
			// O "set" é executado na atribuição de uma propriedade
			set: function(target, prop, value, receiver) {
				//let retorno = Reflect.set(target, prop, value, receiver);
				if (props.includes(prop)) {
					action(target);	
				}				
				//return retorno;
				return Reflect.set(target, prop, value, receiver);
			}
		});
	}

	static _isFunction(func){
		return typeof(func) == typeof(Function);
	}
}