# 🧱 Architectural Characteristics - Características da Arquitetura

- [Architectural Characteristics (EN)](#architectural-characteristics-en-1)
    ---
    - [Introduction](#introduction-1)
        ---
    - [Selected Characteristics](#selected-characteristics-1)
        ---
        - [Availability](#availability)
        - [Usability](#usability)
        - [Reliability & Privacy](#reliability--privacy)
        - [Perfomance](#performance)
        - [Maintainability](#maintainability)
    - [Architectural Characteristics Table](#architectural-characteristics-table-1)
        ---

- [Características da Arquitetura (PT-BR)](#características-da-arquitetura-pt-br-1)
    ---
    - [Introdução](#introdução-1)
        ---
    - [Características Escolhidas](#características-escolhidas-1)
        ---
        - [Disponibilidade](#disponibilidade)
        - [Usabilidade](#usabilidade)
        - [Confiabilidade & Privacidade](#confiabilidade--privacidade)
        - [Desempenho](#desempenho)
        - [Manutenibilidade](#manutenibilidade)
    - [Tabela de Características da Arquitetura](#tabela-de-características-da-arquitetura-1)
        ---

## Architectural Characteristics (EN)

### Introduction

Architectural characteristics represent the quality attributes that guide and constrain the system’s architectural decisions. Unlike functional requirements, these characteristics directly influence the software structure, the adopted patterns, and the necessary trade-offs throughout development.

In the Ugrow Social App project, the architectural characteristics were defined based on the identified [architectural drivers](./architectural-drivers.md), derived from [research](../research/research.md), the [academic extension context (PIBEX)](../project-overview/project-context.md), and the system’s social impact objectives.

### Selected Characteristics

- #### Availability
    
    - **Priority and Code:** high priority. Code: AC001.

    - **Description:** the core features[¹](#note1) of the application must be available 100% of the time for users. Extended features[²](#note2) must be available 99.99% of the time. All data related to personal finance management must be stored locally.

    - **Justification:** users without an internet connection must be able to access the application at any time and use its core features. Users with connectivity can access extended features, with possible exceptions due to network instability or external services.

    - **Architectural Impact:** requires a clear separation between network-dependent and offline operations. Core features must not depend on extended features or connectivity. Extended features may depend on one or more core features. Financial control data must be stored locally in an SQLite database within the application domain.

- #### Usability

    - **Priority and Code:** high priority. Code: AC002.

    - **Description:** the system must provide an intuitive interface with simple workflows and low cognitive load.

    - **Justification:** users tend to abandon complex applications with excessive features or difficult usage flows. Additionally, complex financial terminology makes understanding harder for users with low or intermediate financial knowledge.

    - **Architectural Impact:** high usability limits interface complexity and the number of visual components. It requires a clear separation between interface and business logic, encouraging the use of architectural patterns such as MVC (Model-View-Controller) and simple, well-defined components.

- #### Reliability & Privacy

    - **Priority and Code:** high priority. Code: AC003.

    - **Description:** all data related to personal finance management and users’ personal information must remain private and accessible only to the user. After email synchronization, only basic personal information becomes visible to administrators, except for passwords, which must remain encrypted.

    - **Justification:** financial data and credentials are highly sensitive and must not be accessible to third parties. Administrative access occurs only after explicit user consent through email synchronization.

    - **Architectural Impact:** financial and personal data must be stored locally. Only minimal personal information, after synchronization, may be stored in an external database, while financial control remains under the user’s local domain.

- #### Performance

    - **Priority and Code:** high priority. Code: AC004.

    - **Description:** low memory and processing consumption, as well as fast startup time.

    - **Justification:** this is a cross-platform desktop application developed with Electron, which requires additional attention to performance and resource consumption.

    - **Architectural Impact:** requires strict process control, prevention of unnecessary operations, and continuous monitoring of computational resource usage throughout application execution.

- #### Maintainability

    - **Priority and Code:** medium priority. Code: AC005.

    - **Description:** the source code must be modular, well-documented, and extensible.

    - **Justification:** the project has an academic nature and may undergo future evolution during and after the university cycle.

    - **Architectural Impact:** components must follow well-defined standards, with clear separation between layers, facilitating maintenance, bug fixing, and system evolution.

Notes
---

<span id="note1">¹</span> Core features refer to all functionalities that do not depend on network connectivity. These are described in the [functional scope document](./functional-scope.md).

<span id="note2">²</span> Extended features refer to all functionalities that depend on network connectivity. These are described in the [functional scope document](./functional-scope.md).

---

### Architectural Characteristics Table

| Code  | Characteristic | Priority | Brief Description |
| --- | --- | --- | --- |
| AC001 | Availability | High | Core features available 100% of the time and extended features 99.99%. Local data.
| AC002 | Usability | High | Intuitive interface, simple workflows, and low cognitive load.
| AC003 | Reliability & Privacy | High | Financial and personal data kept private and under user control.
| AC004 | Performance | High | Low memory and processing usage with fast startup.
| AC005 | Maintainability | Medium | Modular, organized, and evolution-ready code.


## Características da Arquitetura (PT-BR)

### Introdução

As características arquiteturais representam os atributos de qualidade que orientam e restringem as decisões arquiteturais do sistema. Diferentemente de requisitos funcionais, essas características influenciam diretamente a estrutura do *software*, os padrões adotados e os *trade-offs* necessários ao longo do desenvolvimento.

No projeto Ugrow Social App, as características arquiteturais foram definidas com base nos [*drivers* arquiteturais](./architectural-drivers.md) identificados a partir da [pesquisa](../research/research.md), do [contexto acadêmico de extensão universitária (PIBEX)](../project-overview/project-context.md) e dos objetivos de impacto social do sistema.

### Características Escolhidas

- #### Disponibilidade:

    - **Prioridade e Código:** alta prioridade. Código: AC001.

    - **Descrição:** os recursos bases[¹](#nota1) do aplicativo devem estar disponíveis 100% do tempo para o usuário. Os recursos extesivos[²](#nota2) devem estar disponíveis 99,99% do tempo. Todos os dados relacionados aos controles de finanças pessoais devem ser persistidos localmente.

    - **Justificativa:** usuários sem conexão com a internet devem conseguir acessar o aplicativo a qualquer momento e utilizar seus recursos base. Usuários com conexão devem acessar os recursos extensivos, podendo ocorrer exceções em função de instabilidades de rede ou serviços externos.

    - **Impacto na Arquitetura:** exige um particionamento claro entre operações que dependem de rede e aquelas que não dependem. Recursos base não podem depender de recursos extensivos ou de conectividade. Já os recursos extensivos podem depender de um ou mais recursos base. Os dados de controle financeiro devem ser persistidos localmente em banco de dados SQLite, dentro do domínio da aplicação.

- #### Usabilidade:

    - **Prioridade e Código:** alta prioridade. Código: AC002.

    - **Descrição:** o sistema deve possuir uma interface intuitiva com fluxos simples e baixa carga cognitiva.

    - **Justificativa:** usuários tendem a abandonar aplicativos complexos, com excesso de funcionalidades ou fluxos de uso difíceis. Além disso, o uso de termos financeiros complexos dificulta a compreensão por usuários com pouco ou médio conhecimento financeiro.

    - **Impacto na Arquitetura:** alta usabilidade restringe a complexidade da interface e do número de componentes visuais. Exige separação clara entre interface e lógica de negócio, favorecendo o uso de padrões arquiteturais como MVC (Modelo, Visão e Controlador) e componentes simples e bem definidos.

- #### Confiabilidade & Privacidade:

    - **Prioridade e Código:** alta prioridade. Código: AC003.

    - **Descrição:** todos os dados relacionados ao controle das finanças pessoais e aos dados pessoais dos usuários devem ser privados, sendo acessíveis exclusivamente pelo próprio usuário. Após a sincronização de um e-mail, apenas informações pessoais básicas tornam-se visíveis para o(s) administrador(es), com exceção de senhas, que devem permanecer criptografadas.

    - **Justificativa:** dados financeiros e credenciais são altamente sensíveis e não devem ser acessíveis por terceiros. O acesso administrativo ocorre apenas após consentimento explícito do usuário, por meio da sincronização de e-mail.

    - **Impacto na Arquitetura:** os dados de controle financeiro e dados pessoais devem ser armazenados localmente. Apenas informações pessoais mínimas, após sincronização, podem ser persistidas em banco de dados externo, mantendo o controle financeiro sempre sob domínio local do usuário.

- #### Desempenho:

    - **Prioridade e Código:** alta prioridade. Código: AC004.

    - **Descrição:** baixo consumo de memória e processamento, além de inicialização rápida.

    - **Justificativa:** trata-se de uma aplicação *desktop* multiplataforma desenvolvida com Electron, o que exige cuidados adicionais com desempenho e consumo de recursos.

    - **Impacto na Arquitetura:** exige controle rigoroso de processos, prevenção de operações desnecessárias e monitoramento do uso de recursos computacionais ao longo da execução da aplicação.

- #### Manutenibilidade:
    - **Prioridade e Código:** média prioridade. Código: AC005.

    - **Descrição:** o código fonte deve ser modular, comentado e evolutivo.

    - **Justificativa:** o projeto possui caráter acadêmico e pode sofrer evoluções futuras, tanto durante quanto após o ciclo universitário.

    - **Impacto na Arquitetura:** os componentes devem seguir padrões bem definidos, com separação clara entre camadas, facilitando manutenção, correções e evolução do sistema.

Notas
---
<span id="nota1">¹</span>Os recursos bases se referem a todas as funconalidades que não dependem de conexão a rede. Estas se encontram no arquivo de [escopo funcional](./functional-scope.md).

<span id="nota2">²</span>Os recursos extensivos se referem a todas as funcionalidades que dependem de conexão a rede. Estas se encontram no arquivo de [escopo funcional](./functional-scope.md).

---

### Tabela de Características da Arquitetura

| Código | Característica | Prioridade | Breve Descrição |
| --- | --- | --- | --- |
| AC001  | Disponibilidade              | Alta       | Recursos base disponíveis 100% do tempo e recursos extensivos 99,99% do tempo. Dados persistidos localmente.
| AC002  | Usabilidade                  | Alta       | Interface intuitiva, fluxos simples e baixa carga cognitiva.
| AC003  | Confiabilidade & Privacidade | Alta       | Dados financeiros e pessoais privados e sob controle do usuário.
| AC004  | Desempenho                   | Alta       | Baixo consumo de memória e processamento, com inicialização rápida.
| AC005  | Manutenibilidade             | Média      | Código modular, organizado e preparado para evolução.|
