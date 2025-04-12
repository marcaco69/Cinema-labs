function CadastroNome() {
    let nome = document.getElementById("nome").value.trim();
    let mostrar = document.getElementById("mostrar");
    if (nome== ""){
        alert("Digite um nome");
    }
    else {
        mostrar.textContent = "Olá, " + nome.toUpperCase();
    }
}
