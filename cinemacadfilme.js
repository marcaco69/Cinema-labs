function CadastroFilme() {
    let CadastroTitulo = document.getElementById("Titulo");
    let titulo = CadastroTitulo.value.trim();
    let CadastroDescricao = document.getElementById("Descricao");
    let descricao = CadastroDescricao.value.trim();
    let CadastroGenero = document.getElementById("Genero");
    let genero = CadastroGenero.value;
    let CadastroClassificacao = document.getElementById("Classificacao");
    let classificacao = CadastroClassificacao.value;
    let CadastroDuracao = document.getElementById("Duracao");
    let duracao = CadastroDuracao.value;
    let CadastroEstreia = document.getElementById("Estreia");
    let estreia = CadastroEstreia.value;

    if(titulo == "" || descricao == "" || duracao == "" || estreia == "") {
        alert("Digite todos os dados do filme!!");
        return;
    }

    let filme = {
        titulo, descricao, genero, classificacao, duracao, estreia
    };

    let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    filmes.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmes));

    exibirFilmes();

    CadastroTitulo.value = "";
    CadastroDescricao.value = "";
    CadastroClassificacao.value = "Livre";
    CadastroDuracao.value = "";
    CadastroEstreia.value = "";
}

function removerFilme() {
    let remover = document.getElementById("RemoverTitulo");
    let tituloRemover = remover.value.trim();

    if (tituloRemover == "") {
        alert("Digite o título do filme a ser removido!!");
        return;
    }

    let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    let filmesAtualizados = filmes.filter(filme => filme.titulo.toLowerCase() !== tituloRemover.toLowerCase());
    if (filmes.length == filmesAtualizados.length) {
        alert("Filme não encontrado");
    } else {
        localStorage.setItem("filmes", JSON.stringify(filmesAtualizados));
        exibirFilmes();
        remover.value = "";
    }
}

function exibirFilmes() {
    let listadefilmes = document.getElementById("listadefilmes");
    listadefilmes.innerHTML = "";

    let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

    filmes.forEach(filme => {
        let linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${filme.titulo}</td>
            <td>${filme.descricao}</td>
            <td>${filme.genero}</td>
            <td>${filme.classificacao}</td>
            <td>${filme.duracao}</td>
            <td>${filme.estreia}</td>
        `;
        listadefilmes.appendChild(linha);
    });
}
window.onload = exibirFilmes;