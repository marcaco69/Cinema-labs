window.onload = function() {
    let selectfilme = document.getElementById("SelecionarFilme");
    let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

    filmes.forEach(filme => {
        let option = document.createElement("option");
        option.value = filme.titulo;
        option.textContent = filme.titulo;
        selectfilme.appendChild(option);
    });

    let selectsala = document.getElementById("SelecionarSala");
    let salass = JSON.parse(localStorage.getItem("salass")) || [];

    salass.forEach(sala => {
        let option = document.createElement("option");
        option.value = sala.sala;
        option.textContent = sala.sala;
        selectsala.appendChild(option);
    });
};

function CadastroSessao() {
    let CadastroSelecionarFilme = document.getElementById("SelecionarFilme");
    let selecionarfilme = CadastroSelecionarFilme.value;
    let CadastroSelecionarSala = document.getElementById("SelecionarSala");
    let selecionarsala = CadastroSelecionarSala.value;
    let CadastroData = document.getElementById("Data");
    let data = CadastroData.value;
    let CadastroPreco = document.getElementById("Preco");
    let preco = CadastroPreco.value;
    let CadastroIdioma = document.getElementById("Idioma");
    let idioma = CadastroIdioma.value;

    if(selecionarfilme == "Selecione um Filme" || selecionarsala == "Selecione uma Sala" || data == "" || preco == "") {
        alert("Digite todos os dados do filme!!");
        return;
    }

    let sessao = {
        selecionarfilme, selecionarsala, data, preco, idioma
    };

    let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];
    filmes.push(sessao);
    localStorage.setItem("sessoes", JSON.stringify(sessoes));

    exibirSessoes();

    CadastroSelecionarFilme.value = "Selecione um Filme";
    CadastroSelecionarSala.value = "Selecione uma Sala";
    CadastroData.value = "";
    CadastroPreco.value = "";
    CadastroIdioma.value = "Dublado";
}

function exibirSessoes() {
    let listadesessoes = document.getElementById("listadesessoes");
    listadesessoes.innerHTML = "";

    let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

    sessoes.forEach(sessao => {
        let linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${sessao.selecionarfilme}</td>
            <td>${sessao.selecionarsala}</td>
            <td>${sessao.data}</td>
            <td>${sessao.preco}</td>
            <td>${sessao.idioma}</td>
        `;
        listadesessoes.appendChild(linha);
    });
}

window.onload = exibirSessoes;