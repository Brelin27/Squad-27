document.getElementById("login-link")?.addEventListener("click", () => {
  window.location.href = "/2 - LOGIN/Telas_login/cadastrar.html";
});


function voltarinicio() {
    // redireciona para outra página
    window.location.href = "/2 - LOGIN/Telas_login/senhasalva.html";
}


const btnRedirecionar = document.getElementById('bntRedirecionar');

btnRedirecionar?.addEventListener('click', function() {
  // 1. Exibe o alerta para o usuário
  alert('E-mail enviado! Redirecionando para a página inicial...');
  // 3. Executa o redirecionamento para a nova página
  window.location.href = '/1 - HOME/Telas_Home/index.html';
});

//botao acessar - CNPJ
document.getElementById("cadCnpj")?.addEventListener("click", function() {
    window.location.href = "/3 -TELA_CADASTRO_CNPJ/telas/dados_acesso.html"; // coloque o caminho da página
});
