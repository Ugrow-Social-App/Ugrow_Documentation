# 003 — Internal Data Persistence with SQLite / Persistência de Dados Interna com SQLite

- [Internal Data Persistence with SQLite (EN)]()
    ---
    - [Title](#internal-data-persistence-with-sqlite)
    - [Status](#status-accepted)
    - [Context](#context)
    - [Decision](#decision)
    - [Consequences](#consequences)
    - [Accordance](#accordance)
    - [Alternatives](#alternatives)
    - [Notes](#notes)

- [Persistência de Dados Interna com SQLite (PT-BR)]()
    ---
    - [Título](#persistência-de-dados-interna-com-sqlite)
    - [Status](#status-aceito)
    - [Contexto](#contexto)
    - [Decisão](#decisão)
    - [Consequências](#consequências)
    - [Conformidade](#conformidade)
    - [Alternativas](#alternativas)
    - [Notas](#notas)

## Internal Data Persistence with SQLite

### Status: Accepted

### Context

The application needs to store financial data, configurations, and controls without depending on a network connection. The alternatives are: storing the data locally in an SQLite database; storing the data locally in .json or .csv files.

### Decision

The data described in the context will be stored locally in an SQLite database.

### Consequences

* Weak data type validation.
* Limited data administration features.
* Requires external libraries or resources for encryption.
* Simplicity of implementation.
* Greater relational structure between data.
* High reliability and availability of data.
* Easy integration with ORM (Object-Relational Mapping) tool libraries.
* Low or no infrastructure cost.
* *Offline-first* operation.

### Accordance

Query performance will be evaluated based on the number of rows and columns accessed, along with the execution time of the operations.

### Alternatives

* The use of .json files for data storage is interesting because they are flexible and well-suited for complex data. However, their processing occurs in memory, and poor data manipulation practices can be harmful to the application. In addition, due to their high flexibility, the responsibility for validating data and their types relies mainly on the application.

* The use of .csv files for data storage is also interesting because their structure is tabular and their processing is simple. Additionally, their readability and data import/export are straightforward. However, they do not provide validation of data or data types.

### Notes

Original Author: Guilherme Veiga Pedromilo.

Registration Date: March 9, 2026 at 22:59.

Modified by: No modifications.

Last Update: March 9, 2026 at 22:59.


## Persistência de Dados Interna com SQLite
### Status: Aceito

### Contexto
A aplicação necessita armazenar os dados financeiros, configurações e controles sem depender de conexão com a rede. Alternativas: armazenar os dados localmente em banco de dados SQLite; armazenar dados localmente em arquivos .json ou .csv.

### Decisão
Os dados descritos no contexto serão armazenados localmente em banco de dados SQLite.

### Consequências

- Validação de tipos de dados fraca.
- Poucos recursos de administração de dados.
- Necessita de bibliotecas ou recursos externos para criptografia.
- Simplicidade de implementação
- Maior relacionamento entre os dados.
- Alta confiabilidade e disponibilidade dos dados.
- Fácil integração com bibliotecas de ferramentas ORM (Object-Relational Mapping).
- Baixo ou nenhum custo de infraestrutura.
- Operação *offline-first*.

### Conformidade
Será avaliado a perfomance das consultas através do número de linhas e colunas consultadas mais o tempo das operações.

### Alternativas

- O uso de arquivos .json para armazenamento de dados são interessantes, pois são flexíveis e ótimos para dados complexos. Entretanto, seu processamento é feito em memória e com práticas ruins de manipulação de dados pode ser fatal para a aplicação. Além disso, por ser muito flexível, depende principalmente da aplicação validar os dados e seus tipos.

- O uso de arquivos .csv para armazenamento de dados também são interessantes, sua organização é tabular e seu processamento. Além disso, sua legibilidade e importação/exportação de dados é simples. Entretanto, não oferece validação de dados e seus tipos.

### Notas

Autor Original: Guilherme Veiga Pedromilo.

Data do Registro: 09/03/2026 ás 22:59.

Modificado por: sem modificações.

Última Atualização: 09/03/2026 ás 22:59.