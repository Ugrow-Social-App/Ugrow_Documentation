# 📋 Architectural Design Decisions - Decisões de Design Arquitetural

- [Architectural Design Decisions (EN)]()
    ---
    - []()
        ---
    - []()
        ---
        - []()
        - []()
        - []()
        - []()
        - []()
        - []()
        - []()
        - []()
    - []()
        ---

- [Decisões de Design Arquitetural (PT-BR)]()
    ---
    - [Introdução](#introdução-1)
        ---
    - [Descrevendo a Estrutura do Documento](#descrevendo-a-estrutura-do-documento-1)
        ---
        - [Título](#título)
        - [Status](#status)
        - [Contexto](#contexto)
        - [Decisão](#decisão)
        - [Consequências](#consequências)
        - [Conformidade](#conformidade)
        - [Alternativas](#alternativas)
        - [Notas](#notas)
    - [Registro de ADRs](#registro-de-adrs-1)
        ---

## Decisões de Design Arquitetural

### Introdução

Este documento tem como finalidade apresentar os ADRs (*Architectural Decision Records* - Registros de Decisão de Arquitetura). Um ADR consiste em um arquivo que descreve especificamente uma decisão em relação a arquitetura, ou seja, tem como função responder o por que daquilo e demonstrar o como será feito, trabalhando na governança arquitetural do projeto, tornando todas as atividades e processos rastreáveis e justificados.

Todos os ADRs serão armazenados na pasta [*adrs*](./adrs/) e os arquivos identificados pela seu título, exemplo: *001 - Utilização do Paradigma Orientado a Objetos*.

### Descrevendo a Estrutura do Documento

O formato que será utilizado para um ADR consiste em um arquivo markdown com: Título, Status, Contexto, Decisão, Consequências, Conformidade, Alternativas e Notas.

- #### Título
    O título é composto por uma identificação (no caso um número sequencial) mais uma frase que descreve a decisão arquitetural.

- #### Status
    O status representa o estado em que aquele ADR se encontra. Serão utilizados os seguintes tipos de status:
    - *Proposto:* significa que aquele ADR foi proposto e espera por alguém responsável tomar uma decisão sobre, ou seja, se será aceito ou não.
    - *Aceito:* significa que o ADR foi aprovado e está pronto para implementação.
    - *Substituído:* significa que aquele ADR foi alterado e foi substituído por um outro ADR.

- #### Contexto
    O contexto descreve a situação ou problema específico e possíveis alternativas para a solução do problema.

- #### Decisão
    Essa seção descreve a decisão tomada e a justificativa para isso de forma completa.

- #### Consequências
    As consequências documenta os impactos ao tomar essa decisão arquitetural e os *trade-offs*.

- #### Conformidade
    Trabalha o pensamento crítico em relação ao como será medido, controlado e monitorada a conformidade desta decisão.

- #### Alternativas
    As alternativas descrevem de forma simples outras formas de solucionar o problema ou situação, auxiliando em futuras atualizações do ADR, caso seja necessário.

- #### Notas
    As notas são metadados do ADR, ou seja, informações e identificações importantes para rastreio e governança arquitetural.

### Registro de ADRs

Os ADRs documentados serão listados neste documento para facilitar o acesso e visão geral dos registros.

| Título | Status | Autor Original | Data do Registro | Modificado Por | Última Atualização |
| --- | --- | --- | --- | --- | --- |
| [001 - Arquitetura Monolítica em Camadas](./adrs/001%20-%20Monolithic%20Layered%20Architecture.md) | Aceito | Guilherme Veiga Pedromilo | 25/02/2026 ás 12:20 | Guilherme Veiga Pedromilo |  09/03/2026 ás 20:47
| [002 - Paradigma Orientado a Objeto](./adrs/002%20-%20%20Object-Oriented%20Paradigm.md) | Aceito | Guilherme Veiga Pedromilo | 28/02/2026 ás 14:13 | Guilherme Veiga Pedromilo |  09/03/2026 ás 20:55
| [003 - Persistência de Dados Interna com SQLite](./adrs/003%20-%20Internal%20Data%20Persistence%20with%20SQLite.md) | Aceito | Guilherme Veiga Pedromilo | 09/03/2026 ás 22:59 | - | 09/03/2026 ás 22:59
| [004 - Persistência de Conteúdos Educacionais Externa com Firebase](./adrs/004%20-%20External%20Educational%20Content%20Persistence%20with%20Firebase.md) | Aceito | Guilherme Veiga Pedromilo | 10/03/2026 ás 11:15 | - | 10/03/2026 ás 11:15