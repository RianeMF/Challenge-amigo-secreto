let nomes = [];

function adicionarAmigo(){ 
    let amigo = document.querySelector('input').value;
    
if  ( amigo.trim().length === 0) {
    alert ('Por favor, insira um nome.');
}else{
    nomes.push(amigo); 
    limparCampo();
}
}
function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}

function mostrarAmigos(){
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    nomes.forEach((nome) => {
        ul.innerHTML += `<li>${nome}</li>\n`;
    })
}
function sortearAmigo () {
    if (nomes.length > 0){
        let sorteio = Math.floor(Math.random() * nomes.length);
        let nomeSorteado = nomes [sorteio];
        ul = document.getElementById('resultado');
        ul.innerHTML = `<li>${nomeSorteado}</li>\n`;
    }
}


