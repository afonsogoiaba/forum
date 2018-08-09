let btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = function(){
	let nome = document.getElementById("nome").value;
	let usuario = document.getElementById("usuario").value;
	let email = document.getElementById("email").value;
	let senha = document.getElementById("senha").value;


	if(nome ==''){
		let msgNome = document.getElementById("msgNome");
		msgNome.innerHTML = 'Nome obrigatório';
		}
		else if(usuario == ''){
			let msgUsuario = document.getElementById("msgUsuario");
			msgUsuario.innerHTML = 'Usuário obrigatório';
		}
		else if(email == ''){
			let msgEmail = document.getElementById("msgEmail");
			msgEmail.innerHTML = 'Email obrigatório';
		}
		else if (senha == ''){
			let msgSenha = document.getElementById("msgSenha");
			msgSenha.innerHTML = 'Senha obrigatória';
		}
		else{
			let user = new Usuario(nome, usuario, email, senha);
			let banco = new Banco('user');
			banco.inserir(user);
			limpar();
			alert('Realizamos seu cadastro');
		}
}