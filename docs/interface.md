
# Projeto de Interface

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## User Flow
Abaixo pode ser observado todo o fluxo experienciado pelo usuário, tanto pessoa quanto empresa, ao navegar pelo sistema.

![Exemplo de UserFlow](img/userflow.jpg)




## Wireframes

A tabela abaixo faz uma relação entre as telas aqui mostradas e os requisitos funcionais que constam nas especificações. Seguindo a tabela, encontram-se as wireframes da plataforma.

| Tela | Requisito funcional|
|--- |----|
| Inicial|RF-003 - O sistema deve poder ser acessado por usuários não cadastrados.|
| Aprimore-se | RF-002 - O sistema deve ter uma seção ensinando como estruturar um bom currículo. |
| Cadastro de usuário / Cadastro de empresa |RF-001 - O sistema deve permitir que usuários e empresas cadastrados registrem-se e gerenciem suas contas|
| Alteração de perfil de usuário |RF-013 - O sistema deve permitir que o usuário cadastrado altere os dados do seu perfil|
| Alteração de perfil de empresa |RF-0|
| Vagas |RF-010 - O sistema deve permitir que o usuário visitante pesquise uma vaga pelos parâmetros palavra-chave e localidade|
| Aplicar para vaga|RF-005 - O sistema deve permitir que usuários cadastrados apliquem para as vagas de emprego disponíveis.|
|Histórico de aplicações |RF-6 - O sistema deve manter o histórico de aplicações dos usuários cadastrados|
| Histórico de vagas da empresa | RF-007 - O sistema deve manter o histórico de vagas submetidas pelas empresas |
|Alerta de vaga|RF-11 - O sistema deve permitir que o usuário cadastrado possa criar alertas para uma vaga de seu desejo.|
| Nova vaga|RF-004 - O sistema deve permitir que empresas criem e gerenciem vagas de emprego / RF-008 - O sistema deve definir o status "em aberto" quando uma nova vaga for cadastrada*|
| Alteração de vaga|RF-009 - O sistema deve permitir que o recrutador altere o status das vagas para "fechada"|

------
 ### Telas

A página inicial, bem como os links da barra de navegação, podem ser acessados por qualquer pessoa, tendo ou não cadastro na plataforma. A única limitação seria para aplicar para alguma vaga, momento no qual é pedido o login no site. Assim, a tela inicial atende ao requisito funcional (RF) **RF-003 - O sistema deve poder ser acessado por usuários não cadastrados.**

![tela-inicial](img/telas-requisitos/pag-inicial.png)

---

Ao acessar o link "Aprimore-se", o usuário ou visitante é levado a uma seção de ensino sobre a estrutura de um currículo e sobre a etapa de entrevista em processos seletivos. Assim, essa tela atende ao **RF-002 - O sistema deve ter uma seção ensinando como estruturar um bom currículo**.

![](img/telas-requisitos/aprimore-se.png)

---

Pelo link "Vagas", o usuário ou visitante pode procurar por vagas de emprego disponíveis na plataforma, além de filtrar por palavra-chave ou localidade. Com isso, essa tela atende ao **RF-010 - O sistema deve permitir que o usuário visitante pesquise uma vaga pelos parâmetros palavra-chave e localidade**. 

![](img/telas-requisitos/vagas-publicas.png)

---

Para participar do processo seletivo, porém, é necessário estar logado na plataforma. O usuário pode aplicar para a vaga respondendo a perguntas submetidas pelas empresas e confirmando o envio. Assim, atende ao **RF-005 - O sistema deve permitir que usuários cadastrados apliquem para as vagas de emprego disponíveis.**

![](img/telas-requisitos/perguntas-vaga.png)

---

Os usuários podem acompanhar os processos dos quais estão participando pelo seu perfil. Essa tela atende ao **RF-6 - O sistema deve manter o histórico de aplicações dos usuários cadastrados**.

![](img/telas-requisitos/vagas-user.png)

---

O usuário da plataforma que está logado pode também criar alertas para vagas conforme os termos que escolher. Essa tela atende ao **RF-11 - O sistema deve permitir que o usuário cadastrado possa criar alertas para uma vaga de seu desejo.**.

![](img/telas-requisitos/alerta-vaga.png)

---

O usuário pode também alterar suas infomações de perfil. Essa tela atende ao **RF-013 - O sistema deve permitir que o usuário cadastrado altere os dados do seu perfil**.

![](img/telas-requisitos/editar-usuario.png)

---

Aquela pessoa ou empresa que não têm cadastro na plataforma podem criar uma conta pelas telas mostradas a seguir. Para cada tipo, existe uma tela de cadastro. Elas atendem ao **RF-001 - O sistema deve permitir que usuários e empresas cadastrados registrem-se e gerenciem suas contas**.

![](img/telas-requisitos/cadastro-usuario.png)

![](img/telas-requisitos/cadastro-empresa.png)

---

Em seu perfil, as empresas podem divulgar os processos em aberto, e fazer o gerenciamento dessas vagas. Ao iniciar o cadastro de uma nova vaga, o sistema determina seu status como "aberta". Essa tela atende aos **RF-004 - O sistema deve permitir que empresas criem e gerenciem vagas de emprego** e **RF-008 - O sistema deve definir o status "em aberto" quando uma nova vaga for cadastrada**.

![](img/telas-requisitos/nova-vaga.png)

---

Os processos enviados pelas empresas são guardados em sua seção de vagas. Essa tela atende ao **RF-007 - O sistema deve manter o histórico de vagas submetidas pelas empresas**.

![](img/telas-requisitos/vagas-empresa.png)

---



O recrutador pode alterar os detalhes das vagas, além de fechá-las. Essa tela atende ao **RF-009 - O sistema deve permitir que o recrutador altere o status das vagas para "fechada"**.

![](img/telas-requisitos/altera-vaga.png)