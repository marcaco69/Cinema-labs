function CadastroFilme() {
    let CadastroTitulo = document.getElementById("Titulo");
    let titulo = CadastroTitulo.value.trim();
    let CadastroDescricao = document.getElementById("Descricao");
    let descricao = CadastroDescricao.value;

    if(titulo == "") {
        alert("Digite os dados do filme");
    }

    else{
        let listadefilmes = document.getElementById("listadefilmes");
        let novofilme = document.createElement("li");
        novofilme.textContent = titulo;
        listadefilmes.appendChild(novofilme);
        }

    CadastroTitulo.value = "";
    CadastroDescricao.value = "";
}