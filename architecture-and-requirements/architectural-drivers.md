# ℹ️ Architectural Drivers - Drivers Arquitetônicos
- Architectural Drivers (EN)
- Drivers Arquitetônicos (PT-BR)
## Architectural Drivers (EN)

### Introduction
Architectural drivers represent the primary forces that shape and constrain the software architecture of a system. These drivers emerge from business goals, user needs, technical constraints, and institutional or academic requirements. In the Ugrow Social App project, architectural drivers were identified based on [field research](../field-research//survey-analysis.md), the academic extension context (PIBEX), and the intended social impact of the application.

These drivers guide architectural decisions and ensure that the resulting system aligns with real user needs, technical feasibility, and the project’s educational and social objectives.

### Group of Drivers
- #### Business & Social
    The Ugrow Social App is designed to promote financial inclusion and basic financial education. Field research indicates that many users struggle to organize their personal finances and lack access to simple, accessible tools. The project prioritizes social impact over commercial goals, emphasizing accessibility, ease of use, and educational value.

- #### User's Drivers
    The target users present low financial literacy and low tolerance for complex systems. Many respondents reported abandoning existing financial applications due to excessive features and confusing interfaces. Users also expressed a preference for autonomy, wishing to use the application without mandatory account creation or constant internet access.

- #### Technical Drivers
    From a technical perspective, the system must support offline usage and ensure local persistence of sensitive financial data. The application is expected to run on desktop environments with potentially limited hardware resources, requiring careful control of memory and processing consumption. Data privacy is a critical concern, influencing decisions related to storage and external integrations.

- #### Regulatory and Instituional Drivers
    The drivers of this group are related with the distribution, licenses, use of app, i.e.

### Summary of Architectural Drivers

| Group | Driver | Description |
| ----- | ------ | ----------- |
| Business & Social | Financial inclusion | Lack of access to simple financial management tools |
| Business & Social | Financial education | User interest in basic financial education |
| Business & Social | Academic extension          | Project developed under PIBEX context               |
| User | Low financial literacy      | Users lack basic financial knowledge |
| User | Low tolerance to complexity | Users abandon complex financial apps |
| User | Autonomy preference | Users prefer optional authentication |
| Technical | Offline-first requirement | System must operate without internet |
| Technical | Data sensitivity | Financial data requires privacy |
| Technical | Resource constraints | Limited hardware environments |
| Regulatory and Instituional Drivers | Open-source requirement | Knowledge sharing and reuse |
| Regulatory and Instituional Drivers | Maintainability | Long-term project evolution |


## Drivers Arquitetônicos (PT-BR)

### Introdução
Os drivers arquiteturais representam as principais forças que moldam e restringem a arquitetura de *software* de um sistema. Esses *drivers* emergem de objetivos sociais e institucionais, necessidades dos usuários, restrições técnicas e exigências acadêmas. No projeto *Ugrow Social App*, os *drivers* arquiteturais foram identificados com base na [pesquisa de campo](../field-research/survey-analysis.md), no contexto de extensão universitária (PIBEX) e no impacto social esperado da aplicação.

Esses drivers orientam as decisões arquiteturais e garantem que o sistema resultante esteja alinhado com as necessidades reais dos usuários, a viabilidade técnica e os objetivos educacionais e sociais do projeto.

### Grupos de *Drivers*

- #### Negócios & Sociais
    O *Ugrow Social App* foi concebido para promover a inclusão financeira e a educação financeira básica. A pesquisa de campo indica que muitos usuários enfrentam dificuldades para organizar suas finanças pessoais e carecem de ferramentas simples e acessíveis. O projeto prioriza o impacto social em detrimento de objetivos comerciais, enfatizando acessibilidade, facilidade de uso e valor educacional.

- #### *Drivers* dos Usuários
    Os usuários-alvo apresentam baixo nível de educação financeira e baixa tolerância a sistemas complexos. Muitos respondentes relataram ter abandonado aplicativos financeiros existentes devido ao excesso de funcionalidades e interfaces confusas. Os usuários também demonstraram preferência por autonomia, desejando utilizar a aplicação sem a obrigatoriedade de criação de conta ou dependência constante de conexão com a internet.

- #### *Drivers* Técnicos
    Do ponto de vista técnico, o sistema deve suportar uso offline e garantir a persistência local de dados financeiros sensíveis. Espera-se que a aplicação seja executada em ambientes *desktop* com possíveis limitações de *hardware*, exigindo controle cuidadoso do consumo de memória e processamento. A privacidade dos dados é uma preocupação crítica, influenciando decisões relacionadas ao armazenamento e às integrações externas.

- #### Fatores Regulatórios e Institucionais
    O projeto é desenvolvido no contexto de um programa de extensão universitária (PIBEX), o que impõe requisitos de transparência, documentação e compartilhamento de conhecimento. A natureza open-source do projeto favorece o reuso educacional e a manutenibilidade a longo prazo, mesmo após o ciclo acadêmico. Documentação arquitetural clara é necessária para apoiar a avaliação, disseminação e evolução futura do sistema.

### Tabela Resumo dos Drivers Arquiteturais

| Grupo | *Driver* | Descrição |
| ----- | -------- | ----------| 
| Negócios & Social        | Inclusão Financeira | Falta de acesso a ferramentas simples de gestão financeira |
| Negócios & Social        | Educação Financeira         | Interesse dos usuários em educação financeira básica       |
| Negócios & Social        | Extensão Acadêmica               | Projeto desenvolvido no contexto do PIBEX                  |
| Usuários                     | Baixo conhecimento Financeiro      | Usuários possuem baixo conhecimento financeiro             |
| Usuários                     | Baixa Tolerância a Complexidade | Usuários abandonam aplicativos financeiros complexos       |
| Usuários                   | Preferência de Autonomia         | Preferência por autenticação opcional                      |
| Técnico                | Funcionamento Offline  | Sistema deve operar sem internet                           |
| Técnico                | Dados Sensíveis            | Dados financeiros exigem privacidade |
| Técnico | Recursos Restritivos | Ambientes com recursos limitados |
| Fatores Regulatórios e Institucionais | Requisito Open-Source     | Compartilhamento e reuso de conhecimento                   |
|  Fatores Regulatórios e Institucionais | Manutenibilidade | Evolução do projeto a longo prazo |

