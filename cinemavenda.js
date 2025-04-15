window.onload = function() {
    let selectsessao = document.getElementById("SelecionarSessao");
    let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

    sessoes.forEach((sessao, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = `${sessao.selecionarfilme} -- ${sessao.selecionarsala} -- ${sessao.data}`;
        selectsessao.appendChild(option);
    });

    let selecionada = localStorage.getItem("sessaoSelecionada");
    if (selecionada != null) {
        selectsessao.value = selecionada;
        localStorage.removeItem("sessaoSelecionada");
    }
};

function Compra() {
    let CadastroSelecionarSessao = document.getElementById("SelecionarSessao");
    let selecionarsessao = CadastroSelecionarSessao.value;
    let CadastroNome = document.getElementById("Nome");
    let nome = CadastroNome.value;
    let CadastroCPF = document.getElementById("CPF");
    let cpf = CadastroCPF.value;
    let CadastroAssento = document.getElementById("Assento");
    let assento = CadastroAssento.value;
    let CadastroPagamento = document.getElementById("Pagamento");

    if(selecionarsessao == "Selecione uma Sessão" || cpf == "" || nome == "" || assento == "") {
        alert("Digite todos os dados da sessão!!");
        return;
    }

    alert("Compra do ingresso realizada com sucesso!!");
    CadastroSelecionarSessao.value = "";
    CadastroAssento.value = "";
    CadastroCPF.value = "";
    CadastroNome.value = "";
}