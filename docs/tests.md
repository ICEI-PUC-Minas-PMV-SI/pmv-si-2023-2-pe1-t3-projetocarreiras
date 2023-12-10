# Testes
# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

**Caso de Teste** | **CT01 - Criar conta da Empresa**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome da empresa, e-mail, número de contato, CNPJ, senha e confirma a senha. Clica no botão "Criar".<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona a Empresa para a tela de perfil.
**Requisitos associados** | RF-001
**Resultado esperado** | Realizar o cadastro da Empresa.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Realizar login**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa e-mail e senha.<br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br> 3) A aplicação armazena os dados e direciona a Empresa para a tela de perfil.
**Requisitos associados** | RF-001
**Resultado esperado** | Verificação de Login
**Dados de entrada** | Inserção de dados válidos na validação de login.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Alterar os dados no perfil**
 :--------------: | ------------
**Procedimento**  | 1) Após a Empresa realizar o login, é direcionado a página de perfil. Onde poderá realizar a edição dos dados.<br>2) Clica no "lápis" no canto superior direito do perfil para realizar a edição dos dados.<br>3) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.<br>4) Após editar os dados a aplicação armazena os dados e direciona a Empresa para a tela de perfil novamente com os dados novos.
**Requisitos associados** | RF-010
**Resultado esperado** | Realizar o cadastro da Empresa.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Usuário aplica a uma vaga**
 :--------------: | ------------
**Procedimento**  | 1) Após o usuário selecionar uma vaga, é direcionado a página de detalhes. Onde poderá clicar no botão de aplicação para se candidatar a vaga<br>2) Ao selecionar o botão de "aplicar" será direcionado a um formulário para ser preenchido com algumas informações<br>3) A aplicação verifica se os dados estão todos preenchidos e informa ao usuário caso não estejam.<br>4) Após finalizar a aplicação, os dados são armazenados e a mensagem de aplicação realizada com sucesso é exibida.
**Requisitos associados** | RF-005 e RF-008
**Resultado esperado** | Aplicação realizada.
**Dados de entrada** | Inserção de dados válidos no formulário de candidatura.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Empresa cria nova vaga**
 :--------------: | ------------
**Procedimento**  | 1) Em "minhas vagas" a empresa poderá visualizar as vagas cadastradas e "criar vaga". Ao clicar em "criar vaga" será direcionado para uma página de criação da vaga.<br>2) Ao selecionar "criar vaga" será direcionado a um formulário com os dados da vaga para ser preenchido com algumas informações<br>3) O cadastro verifica se os todos os dados obrigatórios estão preenchidos e informa ao usuário caso não estejam.<br>4) Após finalizar o cadastro, os dados são armazenados e a mensagem de aplicação realizada com sucesso é exibida.
**Requisitos associados** | RF-003 e RF-005
**Resultado esperado** | Aplicação realizada.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro da vaga.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Empresa visualiza vagas cadastradas**
 :--------------: | ------------
**Procedimento**  | 1) Após o cadastro das novas vagas os dados são armazenados.<br>2) A nova vaga aparecerá em "minhas vagas". Nessa página, ela poderá ser visualizada junto com as demais vagas, bem como o título da vaga e o resumo.<br>4) Ao clicar no botão "ver mais", será direcionado para a página de visualização da vaga com os dados.
**Requisitos associados** | RF-005
**Resultado esperado** | Aplicação realizada.
**Dados de entrada** | Visualização da vaga cadastrada.
**Resultado obtido** | Sucesso.


## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT-01 - Criar conta da Empresa*                                         |
|---|---|
|Requisito Associado | RF-001 - Empresas não autenticadas podem se cadastrar para criar uma conta e serem autenticadas.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1jgycXJy3KD0RnYPBX6ny9ntVmDoBuBYW/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT-02 - Realizar Login*                                         |
|---|---|
|Requisito Associado | RF-001 - Empresas já cadastradas podem realizar login.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/13X8I_IeCRoufu-JUnBptQJje9s5RQu0B/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT-03 - Alterar os dados do perfil*                                         |
|---|---|
|Requisito Associado | RF-010 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1PoDlPP7Hpz_iCRjhMoCuNVzMRMdzvtIJ/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT-04 - Aplicar para a Vaga*                                         |
|---|---|
|Requisito Associado | RF-005 - O sistema deve permitir que os usuários apliquem para as vagas de emprego disponíveis.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1A6MWtXV1Ak5SR7-dXo6Eel5HESWniHj0/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT-05 - Formulário preenchido + Currículo*                                         |
|---|---|
|Requisito Associado | RF-008 - O sistema deve enviar o formulário preenchido e permitir que o usuário anexe seu currículo em vagas para quais esteja se candidatando.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1_heki9FA_qBhnYUQSIJeWiD1-3vd9oF8/view?usp=drive_link| 

|*Caso de Teste*                                 |*CT-06 - Empresa exibe Relatório de Candidatos*                                         |
|---|---|
|Requisito Associado | RF-009 - O sistema deverá gerar um relatório consolidado, contendo informações sobre os candidatos cadastrados, incluindo seus currículos anexados|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1EithvRvG_yKIgVKxSQcqlXdOyv7SUKGG/view?usp=drive_link | 

|*Caso de Teste*                                 |*CT-06 - Empresa cria nova vaga*                                         |
|---|---|
|Requisito Associado | RF-003 - O sistema deve permitir que empresas criem e gerenciem vagas de emprego. |
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1qRUnzbWkQrKhEYhUwC80CSNb4R2R24sn/view?usp=drivesdk |

|*Caso de Teste*                                 |*CT-07 - Empresa visualiza vagas cadastradas*                                         |
|---|---|
|Requisito Associado | RF-005 - O sistema deve manter o histórico de vagas submetidas pelas empresas.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1qRUnzbWkQrKhEYhUwC80CSNb4R2R24sn/view?usp=drivesdk |

## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

Realizando os testes de login, cadastro e edição dos dados no perfil da empresa consegui identificar que um dos pontos fortes é ser de fácil entendimento todos processos, tanto para login quanto para realização do cadastro. Um dos pontos negativos é a falta de instrução para edição do perfil, algo que pode ser mais trabalhado nos próximos projetos é deixar mais exposto e claro as funcionalidades para os usuários do sistema.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |


| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é o gestor de RH de uma empresa e precisa de um novo sistema para encontrar funcionários. Entre no Jobify e realize o cadastro da sua empresa, realize login e comece a gerenciar suas vagas.|
| 2             | Você é o diretor de uma empresa pequena que já tem conta no Jobify, e quer contratar jovens no mercado. Após realizar login no Jobify, altere os dados da sua empresa para manter seu perfil sempre atualizado. |
| 3             | Você é um recrutador de uma empresa e quer criar vagas e visualizar todas as vagas cadastradas na plataformapara Jobify, a fim de encontrar profissionais qualificados no mercado de trabalho. |

## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 35.44 segundos                  |
| 2       | SIM             | 5                    | 48.11 segundos                  |
| 3       | SIM             | 5                    | 1.20.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 67.88 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 22.66 segundos |


    Comentários dos usuários: Achei o site bonito, fácil de entender.
    Consegui realizar o cadastro bem tranquilo.
    Tudo funcionou beleza.


Cenário 2: Você é o diretor de uma empresa pequena que já tem conta no Jobify, e quer contratar jovens no mercado. Após realizar login no Jobify, altere os dados da sua empresa para manter seu perfil sempre atualizado.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 58.43 segundos                  |
| 2       | SIM             | 5                    | 1.39.62 segundos                  |
| 3       | SIM             | 5                    | 1.44.38 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 1.14.14 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 38.79 segundos |


    Comentários dos usuários: Bonito o perfil, gostei de todos campos pra preencher.
    Podia ser mais intuitivo o lápis pra editar, mas tudo funcionou perfeito.
    Ficaram boas as funcionalidades, tudo sem dar erro nenhum.

Cenário 3: Você é um recrutador de uma empresa e quer criar vagas e visualizar todas as vagas cadastradas na plataformapara Jobify, a fim de encontrar profissionais qualificados no mercado de trabalho.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 2.27 segundos                  |
| 2       | SIM             | 5                    | 1.31 segundos                  |
| 3       | SIM             | 5                    | 1.57 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 1.71 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 2.27 segundos |


    Comentários dos usuários: Gostei do sistema, funcionou adequadamente.
    Bom, funcional, rápido e intuitivo.
    Bonito e simples, não é complexo.

Cenário 4: Você é um candidato e deseja aplicar para uma determinada vaga de emprego.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 1.41.29 segundos                  |
| 2       | SIM             | 4                    | 1.28.12 segundos                  |
| 3       | SIM             | 5                    | 2.02.34 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 1.57.25 segundos                 |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 1.06.44 segundos |


    Comentários dos usuários: Gostei da facilidade de preenchimento do formulário de candidatura.
    O formulário de candidatura é fácil de preencher, mas seria mais conveniente se algumas informações 
    do meu currículo pudessem ser importadas automaticamente.
    As informações sobre as responsabilidades da vaga são claras e de facil de navegação.

## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



