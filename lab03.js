function salvar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.getElementById('sexo').value;
    const cidade = document.getElementById('cidade').value;
    const interesses = document.getElementById('interesses').value;
    const mensagem = document.getElementById('mensagem').value;
  
    if (nome == "" || email == "" || idade == "" || sexo == "" || cidade == "") {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }
  
    const pessoa = { nome, email, idade, sexo, cidade, interesses, mensagem };
  
    const pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
    pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
  
    atualizarTabela();
    limparFormulario();
  }
  
  function atualizarTabela() {
    const tabela = document.getElementById('tabela');
    tabela.innerHTML = "";
    const pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
    pessoas.forEach((pessoa, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${pessoa.nome}</td>
        <td>${pessoa.email}</td>
        <td>${pessoa.idade}</td>
        <td>${pessoa.sexo}</td>
        <td>${obterNomeCidade(pessoa.cidade)}</td>
        <td>
          <button onclick="editarPessoa(${index})">Editar</button>
          <button onclick="excluirPessoa(${index})">Excluir</button>
        </td>
      `;
  
      tabela.appendChild(row);
    });
  }
  
  function obterNomeCidade(valor) {
    const cidades = {
      "1": "São Paulo",
      "2": "Rio de Janeiro",
      "3": "Belo Horizonte",
      "4": "Curitiba",
      "5": "Porto Alegre"
    };
    return cidades[valor] || "Desconhecida";
  }
  
  function editarPessoa(index) {
    const pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
    const pessoa = pessoas[index];
  
    document.getElementById('nome').value = pessoa.nome;
    document.getElementById('email').value = pessoa.email;
    document.getElementById('idade').value = pessoa.idade;
    document.querySelector(`input[name="sexo"][value="${pessoa.sexo}"]`).checked = true;
    document.getElementById('cidade').value = pessoa.cidade;
    document.querySelectorAll('input[name="interesses[]"]').forEach(el => {
      el.checked = pessoa.interesses.includes(el.value);
    });
    document.getElementById('mensagem').value = pessoa.mensagem;
  
    pessoas.splice(index, 1);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    atualizarTabela();
  }
  
  function excluirPessoa(index) {
    const pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
    pessoas.splice(index, 1);
    localStorage.setItem("pessoas", JSON.stringify(pessoas));
    atualizarTabela();
  }
  
  function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('idade').value = '';
    document.querySelectorAll('input[name="sexo"]').forEach(el => el.checked = false);
    document.getElementById('cidade').value = '1';
    document.querySelectorAll('input[name="interesses[]"]').forEach(el => el.checked = false);
    document.getElementById('mensagem').value = '';
  }
  
  document.addEventListener("DOMContentLoaded", atualizarTabela);
  