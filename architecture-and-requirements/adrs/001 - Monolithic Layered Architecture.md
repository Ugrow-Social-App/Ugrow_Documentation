# 001 - Monolithic Layered Architectural / Arquitetura Monolítica com Camadas

- [Monolithic Layered Architectural (EN)]()
    ---
    - [Title](#monolithic-layered-architecture)
    - [Status](#status-accepted)
    - [Context](#context)
    - [Decision](#decision)
    - [Consequences](#consequences)
    - [Accordance](#accordance)
    - [Alternatives](#alternatives)
    - [Notes](#notes)

- [Arquitetura Monolítica com Camadas]()
    ---
    - [Título](#arquitetura-monolítica-com-camadas-1)
    - [Status](#status-aceito)
    - [Contexto](#context)
    - [Decisão](#decisão)
    - [Consequências](#consequências)
    - [Conformidade](#conformidade)
    - [Alternativas](#alternativas)
    - [Notas](#notas)

## Monolithic Layered Architecture

### Status: Accepted

### Context

The level of users' need for technological tools is unknown; in other words, the level of access to or modernization of computers and the internet is uncertain. This significantly impacts the application's execution environment. Possible alternatives to address this issue include: building a layered monolithic desktop application, working with microservices and web technologies, or adopting a distributed architecture.

### Decision

A monolithic desktop application built with Electron.js, structured into technical layers. The possible layer structure will be:

```
Ugrow_App_Social        
    /presentation              <Presentation>
    /application               <Application>
    /domain                    <Domain>
    /infrastructure            <Infrastructure>
```

* **Presentation**: responsible for the GUI (Graphical User Interface). It will contain components, screens, routes, and user interactions (use cases).
* **Application**: responsible for the system’s use cases, orchestration of rules, and coordination between the domain and infrastructure layers.
* **Domain**: responsible for classes, business rules, validations, and core concepts.
* **Infrastructure**: responsible for data persistence and external APIs.

### Consequences

* Easier deployment and implementation.
* Does not depend on a network connection to execute the application and its base resources.
* Simple architecture to read and interpret.
* Depending on the OS (Operating System) version, there may be compatibility issues with Electron.js.
* Poorly implemented functions may result in excessive CPU consumption.
* Depends on the storage available on the user's device.

### Accordance

Compliance will be evaluated through empirical measurements using Electron profiling tools (such as Chrome DevTools), task managers, and execution time measurements for critical use cases.

### Alternatives

* The use of a web-based microservices architecture is interesting because, in addition to simplifying maintenance, it facilitates the implementation of new features and is accessible from virtually any device with a web browser. However, it is more expensive and primarily depends on an internet connection for use.

### Notes

Original Author: Guilherme Veiga Pedromilo.

Registration Date: February 25, 2026 at 00:20 p.m.

Modified by: Guilherme Veiga Pedromilo.

Last Update: March 09, 2026 at 08:47 p.m.

## Arquitetura Monolítica com Camadas
### Status: Aceito

### Contexto
Não se sabe qual o nível de carência dos usuários em relação a ferramentas tecnológicas, ou seja, não se sabe qual o nível de acesso/modernidade a computadores e internet, implicando seriamente no ambiente de execução da aplicação. As alternativas para solucionar este problema são: construir uma aplicação *desktop* monolítica em camadas, trabalhar com micro-serviços e web ou arquitetura distribuída.

### Decisão

Aplicação *desktop* monolítica, em Electron.js, estruturada em camadas técnicas. A possível estrutura de camadas será:

```
Ugrow_App_Social        
    /apresentação               <Presentation>
    /aplicação                  <Application>
    /domínio                    <Domain>
    /infraestrutura             <Infraestructure>
```

- Apresentação: responsável pela GUI (Graphical User Interface - Interface Gráfica do Usuário). Abrigará os componentes, telas, rotas e interações (casos de uso).
- Aplicação: responsável pelos casos de uso do sistema, orquestração de regras e coordeação entre domínio e infraestrutura.
- Domínio: responsável pelas classes, regras de negócios, validações e conceitos centrais.
- Infraestrutura: responsável pela persistência dos dados e APIs externas.

### Consequências

- Facilidade para implantação/implementação.
- Não depende de rede para executar a aplicação e recursos base.
- Leitura/Interpretação simples da arquitetura.
- Dependendo da versão do SO (Sistema Operacional), não há compatbilidade com Electron.js.
- Descuidos com o desenvolvimento de funções, resulta em auto consumo de processamento.
- Depende do armazenamento disponível do dispositivo do usuário.

### Conformidade

Será avaliado por meio de medições empíricas utilizando ferramentas de *profiling* do Electron (*Chrome Dev Tools*, por exemplo), gerenciadores de tarefas e medições de tempo de execução nos casos de usos críticos.

### Alternativas

- O uso de arquitetura micro-serviços na web é interessante, pois além de simples manutenção, facilita implementação de novas funcionalidades, é acessível em praticamente qualquer dispositivo que possua navegadores. Entretanto, é mais caro e depende principalmente de internet para seu uso.

### Notas

Autor Original: Guilherme Veiga Pedromilo.

Data do Registro: 25/02/2026 ás 12:20.

Modificado por: Guilherme Veiga Pedromilo.

Última Atualização: 09/03/2026 ás 20:47.