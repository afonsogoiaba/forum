class Banco{
	constructor(){
		this.dados = JSON.parse(localStorage.getItem('user')) || [];
	}

	inserir(obj){
		this.dados.push(obj);
		localStorage.setItem('user',  JSON.stringify(this.dados));
	}

	buscar(usuario, senha){
		this.dados = JSON.parse(localStorage.getItem('user'));
		var achei = false;
		for(var i = 0; i< this.dados.length; i++){
			if(this.dados[i].usuario == usuario && this.dados[i].senha == senha){
				achei = true;
				window.location.href = "http://localhost:3000";
			}
		}
	}
}