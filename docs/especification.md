# Especificações do Projeto

Baseando-se no problema do desemprego, atrelado à dificuldade dos candidatos em elaborarem currículos e em desempenharem boas entrevistas, bem como na necessidade dos recrutadores encontrarem candidatos adequados e guiarem processos seletivos de forma mais dinâmica e precisa, busca-se construir uma solução que atue nesse cenário. 
Aqui, constam as personas que representam os potenciais usuários a se beneficiarem deste sistema, as suas histórias dentro da aplicação, além dos Requisitos Funcionais e Não Funcionais.


## Personas

![Jose Carlos, 33](/docs/img/jose-carlos.png)
---

![Juliana, 24](/docs/img/juliana.png)
---

![Isabela, 31](/docs/img/isabela.png)
---

![Marina, 19](/docs/img/marina.png)
---

![joao, 38](/docs/img/joao.png)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Marina     | Saber como montar um currículo        | Começar a aplicar para vagas de emprego com facilidade |
| Marina     | Saber que experiências tenho que são relevantes        | Ter o currículo selecionado em processos |
| José Carlos    | Acompanhar o status das minhas candidaturas | Melhor me organizar e preparar para as etapas dos processos |
| José Carlos | Pesquisar vagas por localização | Encontrar oportunidades próximas à minha localização |
| João    | Entender melhor sobre entrevistas de emprego | Identificar onde estou cometendo erros e aprimorar meu desempenho durante as entrevistas |
| João | Um mecanismo de recomendação de cursos de aprimoramento profissional | Ajudar os candidatos a melhorar suas habilidades e avançar em suas carreiras |
| Juliana | Saber que experiências incluir em meu currículo | Aumentar minhas chances de ser selecionado em processos seletivos |
| Juliana     | Saber quais habilidades tenho que são valiosas | Conseguir uma oportunidade formal |
| Isabela        | Publicar vagas em aberto na minha empresa |  Encontrar pessoas qualificadas para os cargos |
| Isabela     | Encontrar candidatos melhor preparados | Realizar boas entrevistas e agilizar o processo seletivo na minha empresa |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que detalham o escopo do projeto.

### Requisitos Funcionais: 

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|--------|---------------------------------------|----| ----|
|RF-001| O sistema deve permitir que usuários e empresas não cadastrados registrem-se e gerenciem suas contas. | ALTA | Bruna |
|RF-002| O sistema deve ter uma seção ensinando como estruturar um bom currículo. | ALTA | Bruna |
|RF-003| O sistema deve poder ser acessado por usuários não cadastrados. | ALTA | Leonardo |
|RF-004| O sistema deve permitir que empresas criem e gerenciem vagas de emprego. | ALTA | Abraão |
|RF-005| O sistema deve permitir que usuários cadastrados apliquem para as vagas de emprego disponíveis. | ALTA | Edlaine |
|RF-006| O sistema deve manter o histórico de aplicações dos usuários cadastrados. | MÉDIA | Bruna |
|RF-007| O sistema deve manter o histórico de vagas submetidas pelas empresas. | MÉDIA | Bruna |
|RF-008| O sistema deve definir o status "em aberto" quando uma nova vaga for cadastrada. | MÉDIA | Edlaine |
|RF-009| O sistema deve permitir que o recrutador altere o status das vagas para "fechada". | MÉDIA | Leonardo |
|RF-010| O sistema deve permitir que o usuário visitante pesquise uma vaga pelos parâmetros palavra-chave e localidade. | MÉDIA | Abraão |
|RF-011| O sistema deve permitir que o usuário cadastrado possa criar alertas para uma vaga de seu desejo. | MÉDIA | |
|RF-012| O sistema deve permitir que o usuário cadastrado anexe seu currículo em vagas para quais esteja se candidatando | ALTA | Leonardo |
|RF-013| O sistema deve permitir que o usuário cadastrado altere seu perfil| MÉDIA | Abraão |


### Requisitos não-Funcionais: 

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema dispensa a necessidade de treinamento prévio para utilização.| BAIXA | 
|RNF-002| O sistema deverá ser responsivo, se adaptando às telas de desktop e de smartphone, retornando em até 3 segundos. |  ALTA | 
|RNF-003| O sistema inicialmente será configurado para executar apenas na web. |  BAIXA | 
|RNF-004| O sistema será desenvolvido a parte de front-end utilizando HTML, CSS e JS. | ALTA | 
|RNF-005| O sistema estará em conformidade com as normas legais em vigor no território nacional, incluindo a LGPD. | ALTA | 
|RNF-006| O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge). | ALTA | 
|RNF-007| O sistema deve permitir que os usuários tenham a capacidade de manter várias versões de seus currículos | MÉDIA | 
|RNF-008| O sistema deve fornecer mensagens de erro claras e orientações quando os usuários encontrarem erros ou problemas |  ALTA | 
|RNF-009| O sistema deve oferecer um layout simplificado e de fácil usabilidade. | MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

