# Squad-27

## Publicação do protótipo na Vercel

- Repositório: `Brelin27/Squad-27`
- Root Directory: `RiseUp-squad27-BBTS-main/Projeto residencia -`
- Framework Preset: `Other`
- Build Command: sem comando (não executar npm).
- Output Directory: `.`
- Nenhuma variável de ambiente é necessária.

O `vercel.json` dentro dessa pasta abre a página `1 - HOME/Telas_Home/index.html` em `/`, mantendo as demais pastas disponíveis para navegação. Não selecionar somente a pasta da Home como raiz.

## Escopo dos testes

Este é um protótipo em HTML, CSS e JavaScript. Cadastro, login, recuperação de senha e pesquisa continuam com o comportamento demonstrativo entregue pelos alunos. Não há backend, banco de dados, autenticação real nem envio de e-mail. A pesquisa usa dados fixos; a consulta de CEP depende do ViaCEP e os recursos externos de acessibilidade dependem dos respectivos serviços.

As correções de publicação ajustam caminhos e nomes de arquivos, referências com acentos, carregamento dos componentes compartilhados e erros de acesso a elementos inexistentes no JavaScript. Referências a um bootstrap Vite e analytics ausentes foram removidas da tela da startup; o JavaScript existente dessa tela foi preservado.

A pasta `Tela-de-busca-inteligente-BBTS-main` contém uma versão separada da pesquisa e não faz parte desta configuração de publicação.

## Verificação realizada

- 512 referências locais `src`/`href` nas páginas HTML resolvem para arquivos presentes.
- Os 25 arquivos JavaScript do portal passam na verificação de sintaxe do Node.
- Verificação pontual de execução do login, inicialização do cabeçalho e Home sem elementos opcionais.
- A página de entrada indicada na configuração da Vercel existe.

Essas verificações não substituem os testes de interação no navegador nem comprovam funcionalidades ausentes do protótipo.
