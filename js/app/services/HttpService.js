class HttpService {
	get(url) {
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', url); // Indica qual endereço vc quer acessar e através de qual verbo
			xhr.onreadystatechange = () => {
				if (xhr.readyState == 4){
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.responseText));
					} else {
						console.log(xhr.responseText);
						reject(xhr.responseText);	
					}					
				}
			};
			xhr.send();
		});		
	}

	post(url, dados) {
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();
			xhr.open("POST", url, true);
			xhr.setRequestHeader("Content-type", "application/json");
			xhr.onreadystatechange = () => {
				if (xhr.readyState == 4){
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.responseText));
					} else {
						console.log(xhr.responseText);
						reject(xhr.responseText);	
					}					
				}
			}
			xhr.send(JSON.stringfy(dados));
		});
	}
}