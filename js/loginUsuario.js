let btnLogin = document.getElementById('btnLogin');


btnLogin.onclick = function(){
  let user = document.getElementById('user').value;
  let password = document.getElementById('password').value;
  let usuario_login = new Usuario(nome, usuario, email, senha);
  let dados = new Banco('user');
  dados.buscar(user, password);
}