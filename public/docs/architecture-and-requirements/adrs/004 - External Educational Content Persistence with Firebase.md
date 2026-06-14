# 004 - External Educational Content Persistence with Firebase / Persistência de Conteúdos Educacionais Externa com Firebase

- [External Educational Content Persistence with Firebase (EN)]()
    ---
    - [Title](#external-educational-content-persistence-with-firebase)
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

## External Educational Content Persistence with Firebase

### Status: Accepted

### Context

Educational content may include YouTube videos and live streams, as well as materials in .pdf format. These contents must be constantly updated and available to the application whenever it is connected to the internet. The alternatives are: using Firebase to store hyperlinks and redirections to the content, centralizing access to content from different sources in a single location; or using a cloud file server to store the content directly.

### Decision

Firebase will be used to store hyperlinks and redirections to the educational content, centralizing access to materials from different sources. The application will consume this data through an integration service, and there will be no operational concerns regarding the updating of this content, since it will be stored externally.

### Consequences

* Dependency on an external service.
* Dependency on an internet connection to access the content.
* Possible resource limitations depending on the selected plan.
* High scalability for content management.
* Possibility of dynamic updates to educational content.
* Simple integration through APIs provided by Firebase.
* Reduced need to update the application when modifying content.

### Accordance

Through *Cloud Monitoring*, a tool provided by Firebase, it will be possible to monitor storage consumption, performance, and error rates. The system will be considered compliant if it does not reach the limits of the resources offered by the **Spark** billing plan of Firebase and if the error rate remains between 0% and 1%.

### Alternatives

* Cloud storage services provided by infrastructure providers (such as AWS) could be used to store the content. These services offer high reliability and advanced management features. However, they may present higher costs and greater configuration complexity for the context of the Ugrow Social App.

### Notes

Original Author: Guilherme Veiga Pedromilo.

Registration Date: March 10, 2026 at 11:15.

Modified by: No modifications.

Last Update: March 10, 2026 at 11:15.


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