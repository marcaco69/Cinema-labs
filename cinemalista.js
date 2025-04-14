
function exibirsessoes() {
    let listadesessoes = document.getElementById("listadesessoes");
    listadesessoes.innerHTML = "";

    let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

    sessoes.forEach((sessao, index) => {
        let linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${sessao.selecionarfilme}</td>
            <td>${sessao.selecionarsala}</td>
            <td>${sessao.data}</td>
            <td>${sessao.preco}</td>
            <td>
                <button onclick="comprarIngresso(${index})">Ingresso</button>
            </td>
        `;
        listadesessoes.appendChild(linha);
    });
}

function comprarIngresso(index) {
    localStorage.setItem("sessaoSelecionada", index);
    window.location.href = "cinemavenda.html";
}

window.onload = exibirsessoes;
