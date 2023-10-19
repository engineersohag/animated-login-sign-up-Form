let login = document.getElementById('login');
let create = document.getElementById('create');
let container = document.getElementById('container')

login.onclick = function(){
	container.classList.add('signinForm');
}
create.onclick = function(){
	container.classList.remove('signinForm');
}