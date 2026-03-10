# 004 - External Educational Content Persistence with Firebase / Persistência de Conteúdos Educacionais Externa com Firebase

- [External Educational Content Persistence with Firebase (EN)]()
    ---
    - [Title](#)
    - [Status](#status-accepted)
    - [Context](#context)
    - [Decision](#decision)
    - [Consequences](#consequences)
    - [Accordance](#accordance)
    - [Alternatives](#alternatives)
    - [Notes](#notes)

- [Persistência de Conteúdos Educacionais Externa com Firebase (PT-BR)]()
    ---
    - [Título](#persistência-de-conteúdos-educacionais-externa-com-firebase)
    - [Status](#status-aceito)
    - [Contexto](#contexto)
    - [Decisão](#decisão)
    - [Consequências](#consequências)
    - [Conformidade](#conformidade)
    - [Alternativas](#alternativas)
    - [Notas](#notas)

## Persistência de Conteúdos Educacionais Externa com Firebase 
### Status: Aceito

### Contexto
Os conteúdos educacionais podem ser: vídeos e lives do YouTube ou até materiais em .pdf. Eles constantemente precisam estar atualizados e disponíveis a aplicação quando estiver conectada a rede. Alternativas: utilizar o Firebase para armazenar os hiperlinks e redirecionamentos aos conteúdos, centralizando o acesso aos conteúdos de diversas origem em um único lugar; utilizar um servidor de arquivos na nuvem para armazenar os conteúdos.

### Decisão
Será utilizado o Firebase para armazenar os hiperlinks e redirecionamentos para os conteúdos, centralizando o acesso aos conteúdos de diversas origens. A aplicação consumirá estes dados através de um serviço de integração e não haverá preocupações operacionais com a atualização destes conteúdos, devido eles estarem armazenados externamente.

### Consequências

- Dependência de um serviço externo.
- Dependência de conexão com a internet para acesso aos conteúdos.
- Possível limitação de recursos dependendo do plano utilizado.
- Alta escalabilidade para gerenciamento de conteúdos.
- Possibilidade de atualização dinâmica dos conteúdos educacionais.
- Integração simples através de APIs fornecidas pelo Firebase.
- Redução da necessidade de atualizar a aplicação para alterar conteúdos.

### Conformidade
Através da *Cloud Monitoring*, ferramenta disponibilizada pelo Firebase, será possível monitorar o consumo de armazenamento, perfomance e taxa de erros. Estará em conformidade se caso não atinja os limites dos recursos oferecidos pelo o plano de faturamento [Spark](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans?hl=pt-br) do Firebase e a taxa de erros estiver entre 0% a 1%.

### Alternativas

- Serviços de armazenamento em nuvem, como os oferecidos por provedores de infraestrutura (ex: AWS), poderiam ser utilizados para armazenar os conteúdos. Esses serviços oferecem alta confiabilidade e recursos avançados de gerenciamento. Entretanto, podem apresentar custos mais elevados e maior complexidade de configuração para o contexto do Ugrow Social App.

### Notas

Autor Original: Guilherme Veiga Pedromilo.

Data do Registro: 10/03/2026 ás 11:15.

Modificado por: sem modificações.

Última Atualização: 10/03/2026 ás 11:15.