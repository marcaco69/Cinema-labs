function CadastroFilme() {
    let CadastroTitulo = document.getElementById("Titulo");
    let titulo = CadastroTitulo.value.trim();
    let CadastroDescricao = document.getElementById("Descricao");
    let descricao = CadastroDescricao.value;
    let CadastroGenero = document.getElementById("Genero");
    let genero = CadastroGenero.value;

    if(titulo == "") {
        alert("Digite os dados do filme");
    }

    else{ //apagar (só teste)
        let listadefilmes = document.getElementById("listadefilmes");
        let novofilme = document.createElement("li");
        novofilme.textContent = titulo;
        listadefilmes.appendChild(novofilme);
        } // até aqui

    CadastroTitulo.value = "";
    CadastroDescricao.value = "";
}
