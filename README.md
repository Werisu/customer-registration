# Ecommerce

Aplicação de Registro de Clientes que está sendo desenvolvida para **Maxicon**.

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **Este workspace foi gerado pelo [Build System Nx.](https://nx.dev)** ✨

## Setup do projeto

```
git clone https://github.com/Werisu/customer-registration
cd customer-registration
npm install
```

## Servir o projeto localmente

```
npm start
```

Ou

```
npx nx serve
```

O projeto será servido por padrão em http://localhost:4200/.

## Executar tarefas independentes

```
npx nx <NOME_DA_TAREFA> <NOME_DO_MODULO>
```

Exemplos:

```
npx nx test customer-registration
npx nx lint modules-layout
```

## Visualizar Dependency Graph

```
npx nx graph
```

## Executar tarefas somente do que foi afetado

```
npx nx affected:<NOME_DA_TAREFA>
```

Exemplos:

```
npx nx affected:test
npx nx affected:graph
```

### SOLID

- Single Responsibility Principle aplicado ao Angular
- Open Closed Principle aplicado ao Angular
- Dependency Inversion Principle aplicado ao Angular

## Testes

- should contain title - Header
- should contain header - AppComponent
- should return customers correctly - customer search service
- should debounce when input field is changed - customer search component
- should search multiple times - customer search component
- should prevent identical submissions - customer search component
- should prevent empty submissions - customer search component
- 'should return customer observable correctly - customer search component
- should redirect to "/" when logo is is clicked - header component
- should render product cards correctly - home component

## Husky e Lint-Staged

### Husky

O Husky é uma biblioteca Node.js que possibilita a automação de tarefas antes de eventos do Git, como commits e pushes. Ele permite configurar githooks (scripts executados em determinados eventos do Git) para validar, testar ou executar qualquer outra tarefa antes que o código seja efetivamente commitado ou enviado.

### Lint-Staged

O Lint-Staged é uma ferramenta que trabalha em conjunto com o Husky para otimizar o processo de linting e testes em projetos versionados pelo Git. Ele permite rodar scripts apenas nos arquivos que estão sendo commitados, ao invés de executar todas as verificações no código inteiro do projeto.

### ng-bootstrap

```
npm install @ng-bootstrap/ng-bootstrap
npx nx g @ng-bootstrap/ng-bootstrap:ng-add --project=customer-registration
```

## Control Flow Syntax

```
<div class="row">
      <!-- Cliente 1 -->
      @for (customer of customers; track customer.id) {
      <div class="col-md-6 col-lg-3 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ customer.name }}</h5>
            <span class="card-text">{{ customer.email }}</span>
            <small class="text-muted"
              >data de cadastro: {{ customer.createdAt | date }}</small
            >
          </div>
        </div>
      </div>
      } @empty {
      <div class="col">
        <p class="text-center">Nenhum cliente encontrado</p>
      </div>
      }
    </div>
```
