# Especificações do Projeto

Baseando-se no problema do desemprego, atrelado à dificuldade dos candidatos em elaborarem currículos e em desempenharem boas entrevistas, bem como na necessidade dos recrutadores encontrarem candidatos adequados e guiarem processos seletivos de forma mais dinâmica e precisa, busca-se construir uma solução que atue nesse cenário. 
Aqui, constam as personas que representam os potenciais usuários a se beneficiarem deste sistema, as suas histórias dentro da aplicação, além dos Requisitos Funcionais e Não Funcionais.


## Personas

![José Carlos, 33](/docs/img/jose-carlos.png)

1. Arquiteto, possui experiência em Design de Interiores e Paisagismo, enfrenta o desafio de conciliar sua carreira com a recente paternidade. Busca uma oportunidade de trabalho em uma localidade mais próxima de sua casa, visando estar mais próximo de sua família. Para isso, procura uma plataforma que não apenas facilite a busca por empregos na área, mas também o auxilie na preparação para entrevistas e permita o acompanhamento mais próximo de suas candidaturas em processos seletivos. José Carlos necessita de um equílibrio entre sua carreira profissional e os momentos em família.
---

![Juliana, 24](/docs/img/juliana.png)

2. Graduada em administração e atualmente cursando pós graduação em Gestão de Projetos. Sem experiência formal, por ter ingressado diretamente na faculdade após o ensino médio, fluente em inglês, com um excelente desemprenho acadêmico, com participação em projetos universitários e iniciação científica. Busca sua primeira oportunidade profissional na sua área e precisa de auxílio para ressaltar suas habilidades e potenciais, por meio de uma ferramenta que a ajude a encontrar oportunidades alinhadas com sua formação.
---

![Isabela, 31](/docs/img/isabela.png)

3. Psicóloga, analista comportamental e especialista em recrutamento e seleção. Vasta experiência profissional, apresenta dificuldades na divulgação das vagas na empresa em que trabalha, incluindo encontrar candidatos qualificados e alinhados às vagas com base em critérios comportamentais técnicos, além de currículos incompletos ou inconsistentes, dificuldade em manter um controle mais próximo do processo de seleção, desde a triagem, até a integração desses profissionais. Está a procura de uma solução integrada que a ajude a otimizar o processo de recrutamento, desde a identificação de candidatos até a seleção final.
---

![Marina, 19](/docs/img/marina.png)

4. Recém-formada no ensino médio, sem formação técnica ou graduação. Marina tem experiência apenas em atividades informais e está em busca de oportunidades de trabalho sem ter experiência formal prévia. Dessa forma, necessita de ajuda para elaboração de um currículo que destaque suas habilidades e potenciais, além de preparação para entrevistas de empreso e sugestões de habilidades a serem desenvolvidas. 
---

![João, 38](/docs/img/joao.png)

5. Tem mais de 10 anos de experiência na área comercial, desde vendedor até gerente de vendas. Atualmente está em um processo de transição de carreira, voltou a estudar e ingressou na faculdade no curso de Análise e Desenvolvimento de Sistemas e está tentando se inserir no mercado nessa área. Enquanto busca sua primeira oportunidade nesse novo campo, enfrenta desafios na elaboração de um currículo que reflita sua nova trajetória e na preparação para entrevistas nesse novo ramo. Está a procura de uma ferramenta que o possibilite criar um currículo de maneira adequada, se preparar melhor para entrevistas de emprego, encontrar vagas na área e uma orientação de quais habilidades devem ser aprimoradas e quais os principais erros a serem evitados nos processos soletivos futuras.

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
|RF-001| O sistema deve permitir que usuários e empresas não cadastrados registrem-se e gerenciem suas contas. | ALTA | Paola |
|RF-002| O sistema deve ter uma seção ensinando como estruturar um bom currículo. | ALTA | Bruna |
|RF-003| O sistema deve poder ser acessado por usuários não cadastrados. | MÉDIA | Leonardo |
|RF-004| O sistema deve permitir que empresas criem e gerenciem vagas de emprego. | ALTA | Abraão |
|RF-005| O sistema deve permitir que usuários cadastrados apliquem para as vagas de emprego disponíveis. | ALTA | Edlaine |
|RF-006| O sistema deve manter o histórico de aplicações dos usuários cadastrados. | MÉDIA | Bruna |
|RF-007| O sistema deve manter o histórico de vagas submetidas pelas empresas. | MÉDIA | Bruna |
|RF-008| O sistema deve definir o status "em aberto" quando uma nova vaga for cadastrada. | MÉDIA | Edlaine |
|RF-009| O sistema deve permitir que o recrutador altere o status das vagas para "fechada". | MÉDIA | Leonardo |
|RF-010| O sistema deve permitir que o usuário visitante pesquise uma vaga pelos parâmetros palavra-chave e localidade. | MÉDIA | Abraão |
|RF-011| O sistema deve permitir que o usuário cadastrado possa criar alertas para uma vaga de seu desejo. | BAIXA | Paola |
|RF-012| O sistema deve permitir que o usuário cadastrado anexe seu currículo em vagas para quais esteja se candidatando | ALTA | Leonardo |
|RF-013| O sistema deve permitir que o usuário cadastrado altere os dados do seu perfil| BAIXA | Abraão |


### Requisitos não-Funcionais: 

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema dispensa a necessidade de treinamento prévio para utilização.| MÉDIA | 
|RNF-002| O sistema deverá ser responsivo, adaptando-se às telas de desktop e de smartphone, retornando em até 3 segundos. |  MÉDIA | 
|RNF-003| O sistema deverá ter tempo de resposta de até 3 segundos. |  MÉDIA | 
|RNF-004| O sistema será configurado para executar apenas na web. |  BAIXA | 
|RNF-005| O sistema será constituído da parte de front-end utilizando HTML, CSS e JS. | ALTA | 
|RNF-006| O sistema estará em conformidade com as normas legais em vigor no território nacional, incluindo a LGPD. | ALTA | 
|RNF-007| O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge). | ALTA | 
|RNF-008| O sistema deve permitir a possibilidade de os usuários manterem várias versões de seus currículos | MÉDIA | 
|RNF-009| O sistema deve fornecer mensagens claras e orientações quando os usuários encontrarem erros ou problemas |  ALTA | 
|RNF-010| O sistema deve oferecer um layout simplificado e de fácil usabilidade. | MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

