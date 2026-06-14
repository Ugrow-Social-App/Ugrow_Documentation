# 📌 Architectural Constraints & Assumptions - Restrições e Premissas Arquiteturais

- [Architectural Constraints & Assumptions (EN)](#architectural-constraints--assumptions-en-1)
    ---
    - [Introduction](#introduction-1)
        ---
    - [Defined Constraints](#defined-constraints-1)
        ---
        - [Desktop Execution Environment](#desktop-execution-environment)
        - [Use of the Electron.js Framework](#use-of-the-electronjs-framework)
        - [Local Persistence of User Financial Controls](#local-persistence-of-user-financial-controls)
        - [External Persistence of Educational Content](#external-persistence-of-educational-content)
        - [Academic Context (PIBEX)](#academic-context-pibex)
    - [Defined Assumptions](#defined-assumptions-1)
        ---
        - [Open Source](#open-source)
        - [Basic Financial Knowledge of Users](#basic-financial-knowledge-of-users)
        - [Gradual Data Growth](#gradual-data-growth)
        - [Network Connectivity Not Guaranteed](#network-connectivity-not-guaranteed)
        - [Shared Usage Environment](#shared-usage-environment)
    - [Conclusion](#conclusion-1)
        ---
- [Restrições e Premissas Arquiteturais (PT-BR)](#restrições-e-premissas-arquiteturais-pt-br-1)
    ---
    - [Introdução](#introdução-1)
        ---
    - [Restrições Definidas](#restrições-definidas-1)
        ---
        - [Ambiente de Execução *Desktop*](#ambiente-de-execução-desktop)
        - [Utilização do *Framework* Electron.js](#utilização-do-framework-electronjs)
        - [Persistência Local dos Controles Financeiros do Usuário](#persistência-local-dos-controles-financeiros-do-usuário)
        - [Persistêcia Externa dos Conteúdos Educacionais](#persistência-externa-dos-conteúdos-educacionais)
        - [Contexto Acadêmico (PIBEX)](#contexto-acadêmico-pibex)
    - [Premissas Definidas](#premissas-definidas-1)
        ---
        - [Código Aberto](#código-aberto)
        - [Conhecimento Financeiro Básico dos Usuários](#conhecimento-financeiro-básico-dos-usuários)
        - [Volume de Dados Gradual](#volume-de-dados-gradual)
        - [Conectividade com Rede Não Garantida](#conectividade-com-rede-não-garantida)
        - [Ambiente de Uso Compartilhado](#ambiente-de-uso-compartilhado)
    - [Conclusão](#conclusão-1)
        ---

## Architectural Constraints & Assumptions (EN)

### Introduction
Architectural constraints represent limitations imposed on the system prior to the detailed definition of its architecture. These constraints may be technical, institutional, legal, or strategic in nature, and they directly influence architectural decisions.

On the other hand, assumptions represent hypotheses considered true during system planning and that support early decision-making.

### Defined Constraints
- #### Desktop Execution Environment:
    - Type: technical
    - Description: the system must be developed as a cross-platform desktop application.
    - Impact:
        - The architecture must consider local execution.
        - The architecture must account for machine resource management.

- #### Use of the Electron.js Framework:
    - Type: technical
    - Description: the application will be developed using Electron.js as the foundation for desktop execution.
    - Impact:
        - Architecture based on a main process (Browser/Main Process) and renderer processes.
        - Need to control and manage memory consumption.
        - Clear separation between the interface layer (GUI – Graphical User Interface) and the logic layer (BLL – Business Logic Layer).

- #### Local Persistence of User Financial Controls:
    - Type: technical
    - Description: financial control data must be stored locally on the user’s device.
    - Impact:
        - Use of a local database (e.g., SQLite).
        - Offline-first operation.
        - Independence from external services.

- #### External Persistence of Educational Content:
    - Type: technical
    - Description: educational content and materials must be stored externally and consumed by the application to ensure they remain updated.
    - Impact:
        - Use of external data storage tools (e.g., Firebase, Supabase, or MySQL instances).
        - Network/internet connection required.
        - Dependency on external services.

- #### Academic Context (PIBEX):
    - Type: institutional
    - Description: the project is part of a university extension program (PIBEX).
    - Impact:
        - Features must align with the objectives defined in the submission document.
        - It is necessary to collect data related to application usage by users.

### Defined Assumptions

- #### Open Source:
    - Type: institutional
    - Description: The project may be released as open-source software - Impact:
        - Clear documentation.
        - Transparency in architectural decisions.
        - Selection of compatible licenses.

- #### Basic Financial Knowledge of Users:
    - Description: it is assumed that the target audience has low to moderate financial knowledge.
    - Impact:
        - Complex interfaces or workflows may negatively impact user experience.
        - Complex language may make the application harder to use.

- #### Gradual Data Growth:
    - Description: over time, data may accumulate, meaning it is possible for stored data to grow gradually.
    - Impact:
        - Users are responsible for managing their available storage space.
        - Providing multiple data export and import features is recommended.

- #### Network Connectivity Not Guaranteed:
    - Description: it is not guaranteed that users will always be connected to a network.
    - Impact:
        - Network-dependent features, such as access to educational content, may become unavailable.

- #### Shared Usage Environment:
    - Description: it is assumed that the application may run on devices accessible to more than one person, even though control is individual.
    - Impact:
        - Need for local protection mechanisms (e.g., PIN or access key).
        - Simple access control for user data.
        - Does not require a multi-user system or synchronization with multiple email accounts.

### Conclusion

Through these defined constraints and assumptions, it is possible to determine the functional scope, technologies, and features to be provided to system users.   

## Restrições e Premissas Arquiteturais (PT-BR)

### Introdução
As restrições arquiteturais representam limitações impostas ao sistemas antecipadamente a definição detalhada de sua arquitetura. Por sua vez, podem ser técnicas, institucionais, legais ou estratégias e influenciam diretamente as decisões arquiteturais.

Por outro lado, as premissas representam hipóteses consideradas verdadeiras durante o planejamento do sistema e que auxiliam nas decisões iniciais.

### Restrições Definidas

- #### Ambiente de Execução *Desktop*:
    - Tipo: técnica.
    - Descrição: o sistema deve ser desenvolvido como uma aplicação *desktop* multiplataforma.
    - Impacto: 
        - A arquitetura deve considerar execução local.
        - A arquitetura deve considerar o gerenciamento de recursos de máquina.

- #### Utilização do *Framework* Electron.js:
    - Tipo: técnica.
    - Descrição: a aplicação será desenvolvida utilizando Electron.js como base para execução *desktop*.
    - Impacto:
        - Arquitetura baseada em processo principal (*Browser/Main Process*) e processos de renderização.
        - Necessidade de controle e gerenciamento do consumo de memória.
        - Separação clara entre camada de interface (GUI - *Graphical User Interface*) e lógica (BLL - *Business Logic Layer*).

- #### Persistência Local dos Controles Financeiros do Usuário:
    - Tipo: técnica.
    - Descrição: os dados de controle financeiro devem ser armazenados localmente no dispositivo do usuário.
    - Impacto:
        - Banco de dados local (ex.: SQLite).
        - Funcionamento *offline-first*.
        - Independência de serviços externos.

- #### Persistência Externa dos Conteúdos Educacionais:
    - Tipo: técnico.
    - Descrição: os conteúdos e materias educacionais devem ser armazenados externamento e consumidos pela aplicação para sempre estarem atualizados.
    - Impacto:
        - Utilização de ferramentas de armazenamento de dados externa (ex.: Firebase, Supabase ou instâncias de MySQL).
        - Conexão com rede/internet.
        - Dependência de serviços externos.

- #### Contexto Acadêmico (PIBEX):
    - Tipo: institucional.
    - Descrição: o projeto faz parte de um programa de extensão universitária.
    - Impacto:
        - Recursos alinhados ao objetivo inserido no documento de submissão.
        - Necessário levantar dados relacionados ao uso da aplicação pelos os usuários.

### Premissas Definidas

- #### Código Aberto:
    - Tipo: institucional.
    - Descrição: o projeto poderá ser disponibilizado como código aberto.
    - Impacto:
        - Documentação clara.
        - Transparência nas decisões arquiteturais.
        - Escolha de licenças compátiveis.

- #### Conhecimento Financeiro Básico dos Usuários:
    - Descrição: assume-se que o público-alvo possui pouco ou médio conhecimento sobre financeiro/finanças.
    - Impacto:
        - Interface ou fluxos de trabalho complexos podem influenciar negativamente a experiência dos usuários.
        - Linguagem complexa dificulta o uso da aplicação.

- #### Volume de Dados Gradual:
    - Descrição: com o tempo os dados podem ser acumulados, ou seja, é possível que os dados cresçam gradualmente.
    - Impacto:
        - Depende do usuário gerenciar o espaço disponível do seu armazenamento.
        - Oferecer diversos recursos de exportação ou importação de dados é interessante.

- #### Conectividade com Rede Não Garantida:
    - Descrição: não é garantido que o usuário esteja conectado na rede o tempo todo.
    - Impacto:
        - Recursos extensivos como acesso aos conteúdos educacionais se tornam indisponíveis.

- #### Ambiente de Uso Compartilhado:
    - Descrição: assume-se que o aplicativo pode ser executado em dispositivos acessíveis a mais de uma pessoa, ainda que o controle seja individual.
    - Impacto:
        - Necessidade de mecanismo de proteção local (ex.: PIN ou chave de acesso).
        - Controle de acesso simples aos dados.
        - Não requer sistema multiusuário ou sincronização com múltiplas contas de e-mail.

### Conclusão

Através dessas restrições e premissas definidas é possível definir o escopo funcional, tecnologias e recursos para os usuários do sistena.