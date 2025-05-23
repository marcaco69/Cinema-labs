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
        alert("Digite todos os dados da sessão!!");
        return;
    }

    let sessao = {
        selecionarfilme, selecionarsala, data, preco, idioma
    };

    let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];
    sessoes.push(sessao);
    localStorage.setItem("sessoes", JSON.stringify(sessoes));

    CadastroSelecionarFilme.value = "";
    CadastroSelecionarSala.value = "";
    CadastroData.value = "";
    CadastroPreco.value = "";
    CadastroIdioma.value = "Dublado";
}