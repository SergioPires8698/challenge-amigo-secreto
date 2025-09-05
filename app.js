let amigos = [];
let amigosRestantes = []; 
  
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    } 
});

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nome);
    amigosRestantes = [...amigos];
    atualizarLista();
    input.value = '';
    input.focus();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    if (amigos.length === 0) {
        lista.innerHTML = '<li>Nenhum amigo adicionado ainda</li>';
        return;
    }

    amigos.forEach((nome, index) => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });

    document.getElementById('resultado').innerHTML = '';
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigosRestantes.length === 0) {
        if (amigos.length === 0) {
            alert('Adicione pelo menos um nome antes de sortear.');
        } else {
            alert('Todos os amigos já foram sorteados! Reinicie a lista.');
        }
        return;
    }

    resultado.textContent = 'Sorteando...';
    
    let indiceSorteado;
    let nomeSorteado;
    
    setTimeout(function() {
        indiceSorteado = Math.floor(Math.random() * amigosRestantes.length);
        nomeSorteado = amigosRestantes[indiceSorteado];
        
        amigosRestantes.splice(indiceSorteado, 1);
        resultado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}! 🎉`;
        
        atualizarListaRestantes();
    }, 1000);
}

function atualizarListaRestantes() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    if (amigosRestantes.length === 0) {
        lista.innerHTML = '<li>Todos os amigos foram sorteados!</li>';
        return;
    }

    amigosRestantes.forEach(nome => {
        let item = document.createElement('li');
        item.textContent = `${nome} (Não foi dessa vez)`;
        lista.appendChild(item);
    });
}
