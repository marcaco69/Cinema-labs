function CadastroSala() {
    let CadastroSal = document.getElementById("Sala");
    let sala = CadastroSal.value.trim();
    let CadastroCapacidade = document.getElementById("Capacidade");
    let capacidade = CadastroCapacidade.value;
    let CadastroTipo = document.getElementById("Tipo");
    let tipo = CadastroTipo.value;

    if(sala == "" || capacidade == "") {
        alert("Digite todos os dados do filme!!");
        return;
    }

    let salas = {
        sala, capacidade, tipo
    };

    let salass = JSON.parse(localStorage.getItem("salass")) || [];
    salass.push(salas);
    localStorage.setItem("salass", JSON.stringify(salass));

    exibirFilmes();

    CadastroSal.value = "";
    CadastroCapacidade.value = "";
    CadastroTipo.value = "2D";
}

function removerSala() {
    let remover = document.getElementById("RemoverSala");
    let salaRemover = remover.value.trim();

    if (salaRemover == "") {
        alert("Digite o nome da sala a ser removida!!");
        return;
    }

    let salass = JSON.parse(localStorage.getItem("salass")) || [];

    // Filtra os filmes que NÃO têm o título indicado
    let salasAtualizadas = salass.filter(sala => sala.sala.toLowerCase() !== salaRemover.toLowerCase());

    if (salass.length == salasAtualizadas.length) {
        alert("Sala não encontrada");
    } else {
        localStorage.setItem("salass", JSON.stringify(salasAtualizadas));
        exibirSalas();
        remover.value = "";
    }
}

function exibirSalas() {
    let listadesalas = document.getElementById("listadesalas");
    listadesalas.innerHTML = "";

    let salass = JSON.parse(localStorage.getItem("salass")) || [];

    salass.forEach(sala => {
        let linha = document.createElement("tr");   
        linha.innerHTML = `
            <td>${sala.sala}</td>
            <td>${sala.capacidade}</td>
            <td>${sala.tipo}</td>
        `;
        listadesalas.appendChild(linha);
    });
}

// Mostra as salas ao carregar a página
window.onload = exibirSalas;