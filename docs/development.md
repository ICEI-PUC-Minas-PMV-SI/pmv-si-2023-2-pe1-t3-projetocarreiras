## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| O sistema deve permitir que usuários e empresas não cadastrados registrem-se e gerenciem suas contas. | Leonardo | login.html <br> cadastro.html|
|RF-002| O sistema deve ter uma seção ensinando como estruturar um bom currículo. | Bruna | aprimore-se.html <br> curriculo.html <br> entrevista.html|
|RF-003| O sistema deve poder ser acessado por usuários não cadastrados. | Edlaine | index.html |
|RF-004| O sistema deve permitir que empresas criem e gerenciem vagas de emprego. | Edlaine | nova_vaga.html <br> editar_vaga.html |
|RF-005| O sistema deve permitir que usuários cadastrados apliquem para as vagas de emprego disponíveis. | Bruna | aplicar.html |
|RF-006| O sistema deve manter o histórico de aplicações dos usuários cadastrados. | Paola | minhasvagas.html |
|RF-007| O sistema deve manter o histórico de vagas submetidas pelas empresas. | Paola | minhasvagas_empresa.html |
|RF-008| O sistema deve definir o status "em aberto" quando uma nova vaga for cadastrada. | Edlaine | nova_vaga.html |
|RF-009| O sistema deve permitir que o recrutador altere o status das vagas para "fechada". | Edlaine | editar_vaga.html |
|RF-010| O sistema deve permitir que o usuário visitante pesquise uma vaga pelos parâmetros palavra-chave e localidade. | Bruna | vagas.html |
|RF-011| O sistema deve permitir que o usuário cadastrado possa criar alertas para uma vaga de seu desejo. | Bruna | alerta.html |
|RF-012| O sistema deve permitir que o usuário cadastrado anexe seu currículo em vagas para quais esteja se candidatando | Bruna | aplicar.html |
|RF-013| O sistema deve permitir que o usuário cadastrado altere os dados do seu perfil| Edlaine | perfil_user.html <br> perfil_empresa.html |

## Descrição das estruturas:

## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
Id | Numero (inteiro) | Número de identificação do usuário | 333 |
| CPF | Texto  | CPF do usuário |  123.456.789-00 |
| Nome  | Texto             | Nome do usuário| Marina Yoshida  |
| E-mail       | Texto             | E-mail de cadastro do usuário | marinayoshida@gmail.com |
Descrição | Texto | Breve frase de apresentação do usuário | Em busca de novas oportunidades para crescer profissionalmente. |
Localização | Texto | Local onde usuário reside | São Cateano, SP, Brasil|
Telefone | Texto | Número para contato do usuário | (99) 99999-9999
| Senha  | Texto  | Senha de acesso do usuário | MariYoshi@13 |

## Usuário: Aplicação em vagas
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Pergunta aberta | Texto  | Resposta aberta a alguma pergunta submetida pela empresa responsável pela vaga | Gostaria de trabalhar na empresa porque me identifico com os valores (...) |
| Pergunta fechada | Radio | Seleciona apenas uma opção em um formulário submetido pela empresa responsável pela vaga | [x] Não |
Anexo de documento | File | Carrega arquivos contendo o currículo do usuário | meucurriculo.pdf

## Empresa
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
Id | Numero (inteiro) | Número de identificação da empresa | 902 |
| CNPJ | Texto  | CNPJ da empresa  | 12.345.678/0001-00  |
|  Nome  | Texto  | Nome da empresa | Design Solutions  |
| E-mail       | Texto             | E-mail de cadastro da empresa | contato@designsolutions.com|
Descrição | Texto | Breve frase de apresentação da empresa | Desde 2012, somos uma empresa de design inovadora e comprometida em entregar soluções de design criativas e de alta qualidade para nossos clientes. |
Localização | Texto | Local da sede da empresa | São Caetano, SP, Brasil |
Telefone | Texto | Número para contato da empresa | (99) 99999-9999 |
Site | Texto | URL do site oficial da empresa | designsolutions.com.br |
Gestor de RH | Texto | Pessoa responsável pelos processos seletivos da empresa submetidos na platforma | Maria Aparecida Bento
| Senha  | Texto  | Senha de acesso da empresa | dsolutions2023selecao |

## Empresa: Cadastro de vagas
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
Titulo da vaga | Texto | Nome do cargo a ser ocupado | Pessoa Designer Gráfica |
Empresa | Texto | Nome da empresa contratante | Design Solutions |
Data de início | Data | Data de abertura do processo seletivo | 01/10/2023 |
Data de término | Data | Data prevista para encerramento do processo | 01/01/2024 |
Localidade | Texto | Local onde a função será exercida | Belo Horizonte, MG, Brasil |
Modalidade | Texto | Tipo de contratação | CLT |
Salário | Número (Decimal) | Valor do salário a ser pago | R$3.200,00 |
Descrição da empresa | Texto | Apresentação da empresa, sua história e valores | Desde 2012, somos uma empresa de design inovadora e comprometida em entregar soluções de design criativas e de alta qualidade para nossos clientes. |
Requisitos | Texto | Requisitos necessários para exercer o cargo a ser ocupado | Formação completa em Design Gráfico; Conhecimento em copy-writing; Conhecimento em Photoshop, Ilustrator e Figma. |
