# 🛠️ Functional Scope - Escopo Funcional

- [Functional Scope (EN)](#functional-scope-en-1)
    ---
    - [Introduction](#introduction-1)
        ---
    - [Core Features](#core-features-1)
        ---
        - [Finance Control](#finance-control)
        - [Access Control](#access-control)
        - [Configuration and Customization](#configuration-and-customization)
        - [Data Management](#data-management)
    - [Extended Features](#extended-features-1)
        ---
        - [Education](#education)
        - [Working with Email](#working-with-email)
    - [Conclusion](#conclusion-1)
        ---

- [Escopo Funcional (PT-BR)](#escopo-funcional-pt-br-1)
    ---
    - [Introdução](#introdução-1)
        ---
    - [Recursos Base](#recursos-base-1)
        ---
        - [Controle de Finanças](#controle-de-finanças)
        - [Controle de Acesso](#controle-de-acesso)
        - [Configuração e Personalização](#configuração-e-personalização)
        - [Gerenciamento de Dados](#gerenciamento-de-dados)
    - [Recursos Extensivos](#recursos-extensivos-1)
        ---
        - [Educação](#educação)
        - [Trabalhar com E-mail](#trabalhar-com-e-mail)
    - [Conclusão](#conclusão)
        ---

## Functional Scope (EN)

### Introduction

The functional scope defines all the features that are part of the first official version of the project (MVP – Minimum Viable Product), considering the architectural drivers, constraints, assumptions, and previously defined characteristics.

This document presents only the previously defined features and functionalities. In other words, it does not detail specific business rules or features that may be added over time. It only defines what is included and what is outside the functional scope.

Additionally, it supports the modeling, implementation, and validation phases of the software.

### Core Features

Core features are functionalities that do not depend on a network connection. Furthermore, they are essential features for the application to function properly and directly address the root problem (personal finance management). The features are presented by area below:

- #### Finance Control
    All features focused on financial management.
    
    - Create a control.
    - Edit a control.
    - Delete a control.
    - Filter controls in various ways.
    - Register income and expenses.
    - Update income and expenses.
    - Delete income and expenses.
    - Filter income and expenses in various ways.
    - Manage income and expense categories.
    - Associate income and expenses with a category.
    - Filter categories in various ways.
    - View data according to different time parameters (week by week, month by month, and year by year).
    - View current and projected future balance.

- #### Access Control
    All features related to accessing finance control(s).

    - Add a PIN to a control.
    - Change a control PIN.
    - Remove a control PIN.
    - Add control keywords.
    - Recover a control.
    - Add access levels to a control.

- #### Configuration and Customization
    All features related to application configuration and personalization.

    - Set a theme (light/dark).
    - Create a custom theme.
    - Change font size.
    - Change the color scheme of a control.
    - Change the color scheme of a category.
    - Change the color scheme of indicators.
    - Change the interface layout.

- #### Data Management
    All features related to data management (e.g., controls and settings).

    - Import a finance control.
    - Export a finance control.
    - Print a financial data report.
    - Import a data range from a finance control.
    - Export a data range from a finance control.
    - Import an application configuration.
    - Export an application configuration.
    - Import a custom theme into the application.
    - Export a custom theme from the application.

### Extended Features

Extended features are functionalities that depend on a network connection. They are complementary features, meaning they extend the functions of the core features and are partially related to the project’s secondary objective (basic financial education). The features are presented by area below:

- #### Education
    All features related to the education section.
    
    - Allow access to content links from Ugrow’s external database.
    - Allow downloading materials provided in Ugrow’s external database.

- #### Working with Email
    All features related to email synchronization.
    
    - Synchronize the application with an email account.
    - Synchronize one or multiple controls with an email account.
    - Allow email notifications for changes in control data.
    - Allow email notifications for expense due dates.
    - Allow sending Ugrow newsletters.
    - Evaluate the application’s features.
    - Evaluate the application’s educational content.

### Conclusion

In total, there are 44 features (Core Features – 35 and Extended Features – 9) in this application, prioritizing the project’s objectives, simplifying tasks, preserving privacy, and ensuring operation without a network connection. These features are intended to be included in the MVP. However, new features may be implemented or existing ones modified during the development process, and they will be documented in the final project documentation.

## Escopo Funcional (PT-BR)

### Introdução

O escopo funcional define todas as funcionalidades que fazem parte da primeira versão oficial do projeto (MVP - Mínimo Produto Variável), considerando os *drivers* da arquitetura, restrições, premissas e características previamente definidas.

Neste documento é apresentado apenas as funcionalidades e recursos previamente definidos, ou seja, não detalha regras de negócio específicas ou recursos que podem ser adicionados com o passar do tempo. Apenas delimita o que está incluído e o que está fora do escopo funcional.

Além disso, auxilia na fase de modelagem, implantação e validação do *software*.

### Recursos Base

Os recursos base são funcionalidades que não dependem de conexão com rede. Além disso, são recursos essenciais para o funcionamento da aplicação e que atendem diretamente o problema raiz (controle de finanças pessoais). As funcionalidades serão apresentadas com suas áreas a seguir:

- #### Controle de Finanças
    Todas as funcionalidades com foco no controle de finanças.

    - Criar um controle.
    - Alterar um controle.
    - Deletar um controle.
    - Filtrar controles de formas variadas.
    - Registrar receitas e despesas.
    - Atualizar receitas e despesas.
    - Deletar receitas e despesas.
    - Filtrar receitas e despesas de formas variadas.
    - Gerenciar categorias de receitas e despesas.
    - Relacionar receitas e despesas a uma categoria.
    - Filtrar categorias de formas variadas.
    - Visualizar dados em relação a diferentes parâmetros de tempo (semana a semana, mês a mês e ano a ano).
    - Visualizar saldo atual e previsto futuramente.

- #### Controle de Acesso
    Todas as funcionalidades relacionadas a acesso do(s) controle(s) de finanças.

    - Adicionar um PIN para o controle.
    - Alterar um PIN do controle.
    - Excluir um PIN do controle.
    - Adicionar palavras chaves de controle.
    - Recuperar um controle.
    - Adicionar níveis de acesso ao controle.

- #### Configuração e Personalização
    Todas as funcionalidades relacionadas a configuração e personalização do aplicativo.

    - Definir um tema (claro/escuro).
    - Criar um tema personalizado.
    - Alterar o tamanho da fonte.
    - Alterar esquema de cores para um controle.
    - Alterar esquema de cores para uma categoria.
    - Alterar esquema de cores para indicadores.
    - Alterar layout da interface.

- #### Gerenciamento de Dados
    Todas as funcionalidades relacionadas a gerenciamento de dados (ex.: controles e configurações).

    - Importar um controle de finanças.
    - Exportar um controle de finanças.
    - Imprimir um relatório de dados financeiros.
    - Importar um intervalo de dados de um controle de finanças.
    - Exportar um intervalo de dados de um controle de finanças.
    - Importar uma configuração para o aplicativo.
    - Exportar uma configuração do aplicativo.
    - Importar um tema personalizado para o aplicativo.
    - Exportar um tema personalizado do aplicativo.

### Recursos Extensivos

Os recursos extensivos são funcionalidades que dependem da conexão com a rede. São recursos complementares, ou seja, são componentes que extendem as funções dos recursos base e que certa parte estão relacionados com o objetivo secundário do projeto (educação financeira básica). As funcionalidades serão apresentadas com suas áreas a seguir:

- #### Educação
    Todas as funcionalidades relacionadas a aba de educação.

    - Permitir acesso aos links dos conteúdos da base de dados externa do Ugrow.
    - Permitir baixar materiais disponibilizados da base de dados externa do Ugrow.

- #### Trabalhar com E-mail
    Todas as funcionalidades relacionadas a sincronização de um e-mail.

    - Sincronizar aplicativo com um e-mail.
    - Sincronizar um ou vários controles com um e-mail.
    - Permitir notificações via e-mail de alteração de dados em controle.
    - Permitir notficações via e-mail de vencimento de despesas.
    - Permitir envio de *newsletter* sobre o Ugrow.
    - Avaliar os recursos do aplicativo.
    - Avaliar os os conteúdos educacionais do aplicativo.

### Conclusão

No total são 44 funcionalidades (Recursos Base - 35 e Extensivos - 9) desta aplicação priorizando atender os objetivos para causa do projeto, simplificar as tarefas, preservar a privacidade e garantir o seu funcionamento sem conexão com a rede. Essas funcionalidades são as desjáveis para estar no MVP. Entretanto, é possível a implementação de novas ou alteração de algumas funções durante o desenvolvimento do projeto, as quais serão documentadas na documentação final do projeto.