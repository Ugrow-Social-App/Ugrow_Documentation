# 001 - Monolithic Layered Architectural / Arquitetura Monolítica com Camadas

- [Monolithic Layered Architectural (EN)]()
    ---
    - [Title](#title)
    - [Status](#status)
    - [Context](#context)
    - [Decision](#decisão)
    - [Consequences](#consequences)
    - [Accordance](#accordance)
    - [Alternatives](#alternatives)
    - [Notes](#notes)

- [Arquitetura Monolítica com Camadas]()
    ---
    - [Título](#título)
    - [Status](#status)
    - [Contexto](#contexto)
    - [Decisão](#decisão)
    - [Consequências](#consequências)
    - [Conformidade](#conformidade)
    - [Alternativas](#alternativas)
    - [Notas](#notas)

## Arquitetura Monolítica com Camadas
### Status: Aprovado

### Contexto
Não se sabe qual o nível de carência dos usuários em relação a ferramentas tecnológicas, ou seja, não se sabe qual o nível de acesso/modernidade a computadores e internet, implicando seriamente no ambiente de execução da aplicação. As alternativas para solucionar este problema são: construir uma aplicação *desktop* monolítica, trabalhar com micro-serviços e web ou arquitetura distribuída.

### Decisão

Aplicação *desktop* monolítica, em Electron.js, estruturada em camadas técnicas.

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

Data do Registro: 25/01/2026 ás 12:20.

Última Atualização: 25/01/2026 ás 12:20.