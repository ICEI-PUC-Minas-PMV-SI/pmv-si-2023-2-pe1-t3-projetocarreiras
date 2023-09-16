# Especificações do Projeto
O problema identificado é a dificuldade enfrentada pelos usuários em ingressar no mercado de trabalho, seja por falta de experiência formal, transição de carreira ou necessidade de destacar suas habilidades e potenciais. Eles buscam uma ferramenta que ofereça suporte na elaboração de currículos, preparação para entrevistas e direcionamento para encontrar vagas alinhadas com suas formações e objetivos profissionais. Da mesma maneira, os recrutadores necessitam de uma ferramenta que ofereça um controle mais específico e mais próximo do processo de seleção, incluindo recursos para divulgação de vagas de maneira mais eficaz.
Para isso, foi necessário uma visão clara do problema a ser resolvido, das personas envolvidas, das necessidades dos usuários e dos requisitos que a solução deve atender. Bem como, criação de personas, elaboração das histórias dos usuários, identificação dos requisitos funcionais e não funcionais, além da definição de restrições do projeto.


## Personas

<!-- Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros-->

José Carlos tem 38 anos, mora no Espírito Santo, e há mais de 10 anos trabalha na área comercial, tendo sido vendedor e gerente de vendas. Atualmente, está em um processo de transição de carreira, e para isso iniciou a faculdade no curso de Análise e Desenvolvimento de Sistemas. Entre seus familiares e amigos, não há referências na área da tecnologia, sendo tudo muito novo para ele. José tem enviado currículos pelos sites de algumas empresas, mas por enquanto não obteve sucesso, e não conhece outras estratégias. 

![Jose Carlos, 38](/docs/img/jose-carlos.png)

---
Isabela Pereira tem 32 anos, é psicóloga, analista comportamental e especialista em recrutamento e seleção na rede de panificação de sua família, em Xique-Xique, na Bahia. Sua empresa tem tido problemas em encontrar funcionários para preencher alguns cargos muito importantes. Está a procura de uma solução integrada que a ajude a otimizar o processo de recrutamento, desde a identificação de candidatos até a seleção final.

![Isabela, 32](/docs/img/isabela.png)

---

Marina Yoshida tem 19 anos, mora em São Caetano, São Paulo, e há 1 ano se formou no Ensino Médio. É uma pessoa muito comunicativa e estudiosa, e fala 3 idiomas: português, inglês e francês. Depois de sua formatura, ficou alguns meses no Canadá, onde sua mãe mora. Agora está de volta ao Brasil, não está cursando faculdade, mas gostaria de começar a trabalhar. Ela não sabe como começar a escrever seu currículo, e precisa de orientação.

![Marina, 19](/docs/img/marina.png)

---

Juliana Souza, 23 anos. Graduada em administração e atualmente cursando pós graduação em Gestão de Projetos. Sem experiência formal, por ter ingressado diretamente na faculdade após o ensino médio, fluente em inglês, com um excelente desemprenho acadêmico, com participação em projetos universitários e iniciação científica. Busca sua primeira oportunidade profissional na sua área e precisa de auxílio para ressaltar suas habilidades e potenciais, por meio de uma ferramenta que a ajude a encontrar oportunidades alinhadas com sua formação.


Ideias de personas:
1. adolescente M recém-formado no ensino médio, não cursa faculdade, sem experiências formais
  - fala inglês
  - trabalhou voluntariamente ensinando idosos a usar o computador
2. adulto M, formado em curso superior, há anos no mesmo cargo, aplica pra vagas sempre e nunca consegue oportunidade nova
  - sempre é reprovado das etapas de entrevista
3. adulto F, cursando faculdade, sem experiência
  - fez projetos de pesquisa na faculdade
4. adulto F, nunca trabalhou formalmente, sem curso superior
  - sabe lidar com o público


Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Nome persona 1 | Criar um currículo online    | Começar a aplicar para vagas de emprego com facilidade |
| Nome persona 1 | Acompanhar o status das minhas candidaturas | Melhor me organizar e preparar para as etapas dos processos |
| Nome persona 2 | Entender melhor sobre entrevistas de emprego   | Descobrir o que estou errando e melhorar meu desempenho |
| Nome persona 2 | Pesquisar vagas por localização | Encontrar oportunidades próximas à minha localização |
| Nome persona 3 | Saber o que escrevo em meu currículo | Ser selecionado em processos seletivos |
| Nome persona 4 | Saber quais habilidades tenho que são valiosas | Conseguir uma oportunidade formal |
| Nome Persona 5 | Publicar vagas em aberto na empresa onde trabalho |  Encontrar pessoas qualificadas para os cargos |
| Nome persona 5 | Encontrar candidatos melhor preparados | Realizar boas entrevistas e agilizar o processo seletivo na empresa onde trabalho |
| pessoa | necessidade | finalidade |


Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema deve permitir que usuários e empresas não cadastrados registrem-se e gerenciem suas contas | ALTA | Bruna |
|RF-002| O sistema deve ter uma seção ensinando como estruturar um bom currículo | ALTA | Bruna |
|RF-003| O sistema deve poder ser acessado por usuários não cadastrados | ALTA |  |
|RF-004| O sistema deve permitir que empresas criem e gerenciem vagas de emprego | ALTA | |
|RF-005| O sistema deve permitir que usuários cadastrados apliquem para as vagas de emprego disponíveis | ALTA | |
|RF-006| O sistema deve manter o histórico de aplicações dos usuários cadastrados | MÉDIA | |
|RF-007| O sistema deve manter o histórico de vagas submetidas pelas empresas | MÉDIA | |
|RF-008| O sistema deve definir o status "em aberto" quando uma nova vaga for cadastrada | MÉDIA | |
|RF-009| O sistema deve permitir que o recrutador altere o status das vagas para "fechada" | MÉDIA | |
|RF-010| O sistema deve permitir que o usuário visitante pesquise uma vaga pelos parâmetros palavra-chave e localidade | MÉDIA | |
|RF-011| O sistema deve permitir | MÉDIA | |
|RF-012| O sistema deve permitir | MÉDIA | |
|RF-013| O sistema deve permitir | MÉDIA | |


### Reeuisitos não Funcionai89
|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Requisito de usabilidade (facilidade de uso): não haverá necessidade de treinamento prévio para uso da plataforma.| MÉDIA | 
|RNF-002| Requisito de confiabilidade: O sistema deverá estar disponível em pelo o menos 95% do tempo. |  BAIXA | 
|RNF-003| Requisito de portabilidade: O sistema inicialmente será configurado para executar apenas na web. |  ALTA | 
|RNF-004| Requisito de entrega: Em toda manutenção deverá ser gerado um pequeno relatório sobre as modificações.  |  MÉDIA | 
|RNF-005| Requisito de implementação: Inicialmente será desenvolvido apenas a parte de front-end com HTML, CSS e JS. |  BAIXA | 
|RNF-006| Requisito de interoperabilidade: Posteriormente, o sistema deverá se comunicar com um banco SQL. |  BAIXA | 
|RNF-007| Requisito ético: O sistema não apresentará aos usuários quaisquer dados de cunho privativo. |  ALTA | 
|RNF-008| Requisito legai: O sistema atenderá as normas legais vigentes no território nacional. |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
