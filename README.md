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

## Testes

- should contain title - Header
- should contain header - AppComponent
- should return customers correctly - customer search service

## Husky e Lint-Staged

### Husky

O Husky é uma biblioteca Node.js que possibilita a automação de tarefas antes de eventos do Git, como commits e pushes. Ele permite configurar githooks (scripts executados em determinados eventos do Git) para validar, testar ou executar qualquer outra tarefa antes que o código seja efetivamente commitado ou enviado.

### Lint-Staged

O Lint-Staged é uma ferramenta que trabalha em conjunto com o Husky para otimizar o processo de linting e testes em projetos versionados pelo Git. Ele permite rodar scripts apenas nos arquivos que estão sendo commitados, ao invés de executar todas as verificações no código inteiro do projeto.
