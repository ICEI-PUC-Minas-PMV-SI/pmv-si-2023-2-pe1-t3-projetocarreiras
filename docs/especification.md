# Especificações do Projeto

Baseando-se no problema do desemprego, atrelado à dificuldade dos candidatos em elaborarem currículos e em desempenharem boas entrevistas, bem como na necessidade dos recrutadores encontrarem candidatos adequados e guiarem processos seletivos de forma mais dinâmica e precisa, busca-se construir uma solução que atue nesse cenário. 
Aqui, constam as personas que representam os potenciais usuários a se beneficiarem deste sistema, as suas histórias dentro da aplicação, além dos Requisitos Funcionais e Não Funcionais.


## Personas

<!-- Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros-->

José Carlos tem 33 anos, mora no Espírito Santo, e há mais de 10 anos trabalha na área comercial, tendo sido vendedor e gerente de vendas. Atualmente, José está embarcando em uma emocionante jornada de transição de carreira e, para concretizar essa mudança, deu início a uma graduação no curso de Análise e Desenvolvimento de Sistemas. Entre seus familiares e amigos, não há referências na área da tecnologia, sendo tudo muito novo para ele. Em busca de novas oportunidades, José tem enviado currículos através de sites de empresas. No entanto, ele ainda não obteve o sucesso desejado e enfrenta a incerteza sobre as estratégias mais eficazes para ingressar na área de tecnologia. 

![Jose Carlos, 33](/docs/img/jose-carlos.png)
---

Juliana Souza tem 24 anos, e mora em Belo Horizonte. Sempre gostou muito de estudar, está sempre envolvida em algum projeto na faculdade. Hoje, está no quarto período de Economia. Até o momento, Juliana nunca trabalhou formalmente, já que dedicou seus esforços totalmente para a graduação. Durante o Ensino Médio, ela participou de várias simulações de sessões da ONU que acontecem em diversas escolas pela cidade, e também na PUC Minas. 
Juliana busca sua primeira oportunidade profissional na sua área, e precisa de auxílio para ressaltar suas habilidades e potenciais, por meio de uma ferramenta que a ajude a encontrar oportunidades alinhadas com sua formação.

![Juliana, 24](/docs/img/juliana.png)
---

Isabela Pereira tem 31 anos, é psicóloga, analista comportamental e especialista em recrutamento e seleção na rede de panificação de sua família, em Xique-Xique, na Bahia. No entanto, sua empresa enfrenta desafios significativos na busca por funcionários adequados para cargos de extrema importância. Diante dessa necessidade premente, Isabela está ativamente procurando por uma solução integrada que possa revolucionar e otimizar o processo de recrutamento, desde a identificação inicial de candidatos até a seleção final. Ela busca uma abordagem que simplifique e aprimore o processo de identificação e seleção dos melhores talentos, visando a assegurar o sucesso contínuo dos negócios de sua empresa.

![Isabela, 31](/docs/img/isabela.png)
---

Marina Yoshida tem 19 anos, mora em São Caetano, São Paulo, e há 1 ano se formou no Ensino Médio. É uma pessoa muito comunicativa e estudiosa, demonstrando habilidades notáveis ao falar três idiomas: português, inglês e francês. Depois de sua formatura, ficou alguns meses no Canadá, onde sua mãe reside, enriquecendo sua experiência internacional e ampliando seu conhecimento cultural. Agora, de volta ao Brasil, Marina está ansiosa para iniciar sua trajetória profissional, mas se encontra diante de um desafio: não sabe por onde começar a elaborar seu currículo. Ela busca orientação e assistência para dar os primeiros passos nessa nova fase de sua vida e aproveitar ao máximo suas habilidades e conhecimentos.

![Marina, 19](/docs/img/marina.png)
---

João Marques tem 38 anos, mora em Pernambuco, e nunca trabalhou formalmente. Sempre se esforçou muito para conseguir ajudar a família, tendo várias experiências informais em comércio, atendimento e prestação de serviços de manutenção. João também demonstra habilidades excepcionais na escrita e, em seus momentos de lazer, gosta de escrever poesias. Atualmente, ele almeja uma mudança em sua trajetória, buscando mais segurança e estabilidade em sua vida profissional através de um trabalho formal, mas enfrenta a incerteza sobre como funciona o ambiente corporativo.

![Orlando, 38](/docs/img/joao.png)

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
|RF-005| O sistema deve permitir que usuários cadastrados apliquem para as vagas de emprego disponíveis. | ALTA | Leonardo |
|RF-006| O sistema deve manter o histórico de aplicações dos usuários cadastrados. | MÉDIA | Bruna |
|RF-007| O sistema deve manter o histórico de vagas submetidas pelas empresas. | MÉDIA | Bruna |
|RF-008| O sistema deve definir o status "em aberto" quando uma nova vaga for cadastrada. | MÉDIA | Leonardo |
|RF-009| O sistema deve permitir que o recrutador altere o status das vagas para "fechada". | MÉDIA | Leonardo |
|RF-010| O sistema deve permitir que o usuário visitante pesquise uma vaga pelos parâmetros palavra-chave e localidade. | MÉDIA | Abraão |
|RF-011| O sistema deve permitir que o usuário cadastrado possa criar alertas para uma vaga de seu desejo. | MÉDIA | |
|RF-012| O sistema deve permitir que o usuário cadastrado anexe seu currículo em vagas para quais esteja se candidatando | ALTA | Leonardo |
|RF-013| O sistema deve permitir que o usuário cadastrado altere seu perfil| MÉDIA | Abraão |


### Requisitos não-Funcionais: 

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema não precisará de treinamento prévio para uso da mesma.| BAIXA | 
|RNF-002| O sistema deverá ser responsivo, se adaptando às telas de desktop e de smartphone, retornando em até 3 segundos. |  ALTA | 
|RNF-003| O sistema inicialmente será configurado para executar apenas na web. |  BAIXA | 
|RNF-004| O sistema será desenvolvido a parte de front-end utilizando HTML, CSS e JS. |  ALTA | 
|RNF-005| O sistema atenderá as normas legais vigentes no território nacional e a LGPD. |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

