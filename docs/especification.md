# Especificações do Projeto
O problema identificado é a dificuldade enfrentada pelos usuários em ingressar no mercado de trabalho, seja por falta de experiência formal, transição de carreira ou necessidade de destacar suas habilidades e potenciais. Eles buscam uma ferramenta que ofereça suporte na elaboração de currículos, preparação para entrevistas e direcionamento para encontrar vagas alinhadas com suas formações e objetivos profissionais. Da mesma maneira, os recrutadores necessitam de uma ferramenta que ofereça um controle mais específico e mais próximo do processo de seleção, incluindo recursos para divulgação de vagas de maneira mais eficaz.
Para isso, foi necessário uma visão clara do problema a ser resolvido, das personas envolvidas, das necessidades dos usuários e dos requisitos que a solução deve atender. Bem como, criação de personas, elaboração das histórias dos usuários, identificação dos requisitos funcionais e não funcionais, além da definição de restrições do projeto.


## Personas

<!-- Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros-->

José Carlos tem 33 anos, mora no Espírito Santo, e há mais de 10 anos trabalha na área comercial, tendo sido vendedor e gerente de vendas. Atualmente, José está embarcando em uma emocionante jornada de transição de carreira e, para concretizar essa mudança, deu início à sua jornada acadêmica no curso de Análise e Desenvolvimento de Sistemas. Entre seus familiares e amigos, não há referências na área da tecnologia, sendo tudo muito novo para ele. Em busca de novas oportunidades, José tem enviado currículos através de sites de empresas, no entanto, ele ainda não obteve o sucesso desejado e enfrenta a incerteza sobre as estratégias mais eficazes para ingressar na área de tecnologia. 

![Jose Carlos, 38](/docs/img/jose-carlos.png)
---

Juliana Souza tem 24 anos, e mora em Belo Horizonte. Sempre gostou muito de estudar, está sempre envolvida em algum projeto na faculdade. Hoje, está no quarto período de Economia. Até o momento, Juliana nunca trabalhou formalmente, já que dedicou seus esforços totalmente para a graduação. Durante o Ensino Médio, ela participou de várias simulações de sessões da ONU que acontecem em diversas escolas pela cidade, e também na PUC Minas. 
Busca sua primeira oportunidade profissional na sua área e precisa de auxílio para ressaltar suas habilidades e potenciais, por meio de uma ferramenta que a ajude a encontrar oportunidades alinhadas com sua formação.

![Juliana, 24](/docs/img/juliana.png)
---
Isabela Pereira tem 31 anos, é psicóloga, analista comportamental e especialista em recrutamento e seleção na rede de panificação de sua família, em Xique-Xique, na Bahia. Sua empresa tem tido problemas em encontrar funcionários para preencher alguns cargos muito importantes. Está a procura de uma solução integrada que a ajude a otimizar o processo de recrutamento, desde a identificação de candidatos até a seleção final.

![Isabela, 32](/docs/img/isabela.png)
---

Marina Yoshida tem 19 anos, mora em São Caetano, São Paulo, e há 1 ano se formou no Ensino Médio. É uma pessoa muito comunicativa e estudiosa, demonstrando habilidades notáveis ao falar três idiomas: português, inglês e francês. Depois de sua formatura, ficou alguns meses no Canadá, onde sua mãe reside, enriquecendo sua experiência internacional e ampliando seu conhecimento cultural. Agora de volta ao Brasil, Marina está ansiosa para iniciar sua trajetória profissional, mas se encontra diante de um desafio: ela não sabe por onde começar a elaborar seu currículo. Ela busca orientação e assistência para dar os primeiros passos nessa nova fase de sua vida e aproveitar ao máximo suas habilidades e conhecimentos.

![Marina, 19](/docs/img/marina.png)
---

Orlando Marques tem 38 anos, mora em Pernambuco, e nunca trabalhou formalmente. Sempre se esforçou muito para conseguir ajudar a família, tendo várias experiências informais em comércio, atendimento e prestação de serviços de manutenção. Orlando também demonstra habilidades excepcionais na escrita e, em seus momentos de lazer, gosta de escrever poesias. Atualmente, ele almeja uma mudança em sua trajetória, buscando mais segurança, estabilidade em sua vida profissional e conseguir um trabalho formal, mas enfrenta a incerteza sobre como funciona o ambiente corporativo.

![Orlando, 38](/docs/img/orlando.png)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Nome persona 1 | Criar um currículo online    | Começar a aplicar para vagas de emprego com facilidade |
| Nome persona 1 | Acompanhar o status das minhas candidaturas | Melhor me organizar e preparar para as etapas dos processos |
| Nome persona 2 | Entender melhor sobre entrevistas de emprego   | Descobrir o que estou errando e melhorar meu desempenho |
| Nome persona 2 | Pesquisar vagas por localização | Encontrar oportunidades próximas à minha localização |
| Estudante Universitário | Saber o que escrevo em meu currículo | Ser selecionado em processos seletivos |
| Recém-Graduado | Saber quais habilidades tenho que são valiosas | Conseguir uma oportunidade formal |
| Recrutador     | Publicar vagas em aberto na empresa onde trabalho |  Encontrar pessoas qualificadas para os cargos |
| Gerente de RH  | Encontrar candidatos melhor preparados | Realizar boas entrevistas e agilizar o processo seletivo na empresa onde trabalho |
| pessoa | necessidade | finalidade |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que detalham o escopo do projeto.

### Requisitos Funcionais: 

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


### Reeuisitos não-Funcionais: 
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

