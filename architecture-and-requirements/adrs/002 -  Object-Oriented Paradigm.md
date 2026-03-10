# 002 - Object-Oriented Paradigm / Paradigma Orientado a Objeto

- [Object-Oriented Paradigm (EN)]()
    ---
    - [Title](#object-oriented-paradigm)
    - [Status](#status-accepted)
    - [Context](#context)
    - [Decision](#decision)
    - [Consequences](#consequences)
    - [Accordance](#accordance)
    - [Alternatives](#alternatives)
    - [Notes](#notes)

- [Paradigma Orientado a Objeto (PT-BR)]()
    ---
    - [Título](#paradigma-orientado-a-objeto)
    - [Status](#status-aceito)
    - [Contexto](#contexto)
    - [Decisão](#decisão)
    - [Consequências](#consequências)
    - [Conformidade](#conformidade)
    - [Alternativas](#alternativas)
    - [Notas](#notas)

## Object-Oriented Paradigm

### Status: Accepted

### Context

This project contains multiple functional domains, each with its own entities, behaviors, and relationships with one another. In addition, the project structure is modular. The possible alternatives are: using the structured paradigm, the object-oriented paradigm, or the event-driven paradigm.

### Decision

The object-oriented paradigm will be used for software development, mainly in the application and domain layers.

### Consequences

* Longer learning curve.
* Complex initial modeling.
* Complex implementation if not properly planned.
* Greater safety in handling data and error management.
* Greater cohesion, reuse, and lower coupling if well designed.
* Easier implementation of new functionalities in the future.
* Easier reading and interpretation of data.

### Accordance

The use of the paradigm will be evaluated through the following quality metrics: Lack of Cohesion in Methods (LCOM - *Lack of Cohesion of Methods*) and Coupling Between Objects (CBO - *Coupling Between Objects*). It will be considered compliant if LCOM is low and CBO is between low and medium.

### Alternatives

* The use of the structured paradigm has a shorter learning curve and simpler implementation. However, it can generate high coupling and low method reuse. In addition, the readability and organization of the project may become more complex, since understanding the algorithm depends on reading the entire flow.

* The use of the event-driven paradigm is more related to the GUI, as it is reactive, meaning it mainly works with event flows and related data. However, its use can be complex and may provide little or no traceability of data and errors.

### Notes

Original Author: Guilherme Veiga Pedromilo.

Registration Date: February 28, 2026 at 14:13.

Modified by: Guilherme Veiga Pedromilo.

Last Update: March 9, 2026 at 20:55.


## Paradigma Orientado a Objeto
### Status: Aceito

### Contexto
Este projeto possui múltiplos domínios funcionais, os quais possuem entidades e comportamentos própios e relações entre si. Além disso, a estrutura do projeto é modular. As alternativas são: utilização do paradigma estruturado, paradigma orientado a objeto ou orientado a eventos.

### Decisão

Será utilizado o paradigma orientado a objeto para desenvolvimento do *software*, principalmente na camada da aplicação e domínio.

### Consequências

- Curva de Aprendizagem mais longa.
- Modelagem inicial complexa.
- Implementação complexa se não planejado corretamente.
- Maior segurança com tratativas de dados e erros.
- Maior coesão, reutilização e menor acoplamento se bem planejado.
- Facilidade de implementação de novas funções no futuro.
- Facilidade de leitura e interpretação de dados.

### Conformidade

Será avaliado o uso do paradigma através das seguintes métricas de qualidade: a Falta de Coesão nos Métodos (LCOM - *Lack of Cohesion of Methods*) e o acoplamento entre objetos (CBO - *Coupling Between Objects*). Estará conforme se a LCOM for baixa e CBO estiver entre baixo ou mediano.

### Alternativas

- O uso do paradigma estruturado tem uma curva menor de aprendizado e sua implementação é mais simples, entretanto pode gerar muito acoplamento e pouca reutilização de métodos. Além da legibilidade e organização do projeto serem mais complexas, pois depende de uma leitura geral de um fluxo para entende o algorítmo.

- O uso do paradigma orientado a eventos está mais relacionado com a GUI, pois é reativo, ou seja, trabalha principalmente com o fluxo de eventos e os dados relacionados. Porém seu uso é complexos e possui pouca ou nenhuma rastreabilidade dos dados e erros.

### Notas

Autor Original: Guilherme Veiga Pedromilo.

Data do Registro: 28/02/2026 ás 14:13.

Modificado por: Guilherme Veiga Pedromilo.

Última Atualização: 09/03/2026 ás 20:55.