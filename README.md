# Sauce Demo UI Testing

## 1. Plano de Testes Estruturado

### 1.1 Objetivo
Validar a funcionalidade da aplicação Sauce Demo garantindo que os principais fluxos de navegação e interação atendem aos critérios de qualidade antes do lançamento.

### 1.2 Cenários Testados

| **ID** | **Caso de Teste**                                                                                     | **Passos**                                                                                           | **Resultado Esperado**                                                                                 |
|--------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| TC001  | Login com usuário válido                                                                              | 1. Acessar `https://www.saucedemo.com` <br> 2. Inserir credenciais válidas <br> 3. Clicar em "Login" | Usuário é redirecionado à página de produtos (`/inventory.html`).                                      |
| TC002  | Login com credenciais inválidas                                                                       | 1. Acessar `https://www.saucedemo.com` <br> 2. Inserir credenciais inválidas <br> 3. Clicar em "Login" | Exibição de mensagem de erro: "Username and password do not match".                                    |
| TC003  | Ordenação de produtos                                                                                 | 1. Na página de produtos, selecionar ordenação por preço crescente.                                  | Produtos são ordenados do menor para o maior preço.                                                    |
| TC004  | Fluxo completo de compra                                                                              | 1. Login com usuário válido. <br> 2. Adicionar produto ao carrinho. <br> 3. Finalizar compra.       | Exibição de mensagem de sucesso: "Thank you for your order!".                                          |
| TC005  | Remoção de itens do carrinho                                                                          | 1. Adicionar produto ao carrinho. <br> 2. Abrir carrinho. <br> 3. Remover o produto.                 | Produto é removido corretamente.                                                                       |
| TC006  | Logout                                                                                                | 1. Abrir o menu lateral. <br> 2. Clicar em "Logout".                                                | Retorno à página de login.                                                                             |

---

## 2. Resultados dos Testes Executados

| **ID**  | **Caso de Teste**                                   | **Status** | **Observações**                                    |
|---------|-----------------------------------------------------|------------|--------------------------------------------------|
| TC001   | Login com usuário válido                            | ✅ Passou  | Login funcionando conforme esperado.             |
| TC002   | Login com credenciais inválidas                     | ✅ Passou  | Mensagem de erro exibida corretamente.           |
| TC003   | Ordenação de produtos                               | ✅ Passou  | Ordenação correta para diferentes critérios.     |
| TC004   | Fluxo completo de compra                            | ✅ Passou  | Fluxo de compra concluído com sucesso.           |
| TC005   | Remoção de itens do carrinho                        | ✅ Passou  | Produto removido corretamente do carrinho.       |
| TC006   | Logout                                              | ✅ Passou  | Logout redireciona para a tela de login.         |

---

## 3. Sugestões de Melhorias de UX/UI

1. **Feedback visual nas ações de botão:** 
   - Exibir um indicador de carregamento (ex.: spinner) ao clicar em "Login" ou "Checkout".
2. **Busca por produtos:**
   - Adicionar uma barra de pesquisa para encontrar produtos específicos rapidamente.
3. **Melhorar acessibilidade:**
   - Adicionar `aria-label` para botões e elementos interativos.

---

## 4. Lista de Bugs Encontrados

1. **Campo de busca ausente:**
   - Não há um campo para pesquisar produtos diretamente.
2. **Labels insuficientes:**
   - Alguns botões e campos não possuem `aria-label`, o que dificulta a navegação via leitor de tela.

---

## 5. Análise de Riscos da Aplicação

| **Risco**                                        | **Impacto no Negócio**                                           | **Recomendação**                              |
|-------------------------------------------------|------------------------------------------------------------------|-----------------------------------------------|
| Falta de suporte a leitores de tela             | Usuários com deficiência visual não poderão utilizar a aplicação. | Implementar padrões de acessibilidade (WCAG). |
| Erros ao lidar com altos volumes de usuários    | Possível lentidão na navegação e carregamento de páginas.        | Realizar testes de carga e desempenho.        |

---

## 6. Testes Extras

### 6.1 Testes de Responsividade
- **Método Utilizado:** Playwright em diferentes viewports (`360x640`, `768x1024`, `1280x720`).
- **Resultado:** O layout é responsivo, mas os elementos no menu lateral podem se sobrepor em telas menores.

### 6.2 Testes de Acessibilidade
- **Método Utilizado:** Playwright com a biblioteca Axe-Core para validação automatizada.
- **Resultado:** Problemas identificados em botões sem `aria-label`.

### 6.3 Sugestões de Automação
- Automatizar testes de regressão com CI/CD (GitHub Actions configurado).
- Implementar testes de desempenho usando K6 ou Playwright Performance.

---

## 7. Prints de Tela

### Exemplo: Sucesso na Finalização da Compra

![Sucesso na compra](./screenshots/order-success.png)

---

## 8. Explicações e Justificativas

1. **Decisão de usar Playwright:** 
   - Permite fácil integração com CI/CD.
   - Suporta múltiplos navegadores em um único framework.

2. **Uso do Faker.js:**
   - Geração de dados dinâmicos para garantir que o sistema funcione com diferentes entradas.

---

## Como Executar os Testes

1. **Instalar Dependências:**
   ```bash
   pnpm install


## Como Executar o Projeto Localmente

### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
1. **Node.js** (versão 16 ou superior)
2. **pnpm** (gerenciador de pacotes)  
   Instale o pnpm, caso ainda não tenha:  
   ```bash
   npm install -g pnpm

### Passo a Passo
1. Clone o repositório
Clone o repositório do GitHub para sua máquina local:
````
git clone https://github.com/DevWide/projeto_UITesting.git
````

2. Navegue até o Diretório do Projeto
````
cd nome-do-repo
````

3. Instale as Dependências
Use o ``pnpm`` para instalar as dependências do projeto:
````
pnpm install
````

4. Instale os Navegadores do Playwright
Baixe os navegadores necessários para os testes:
````
pnpm exec playwright install
````

5. Execute os Testes
Para rodar os testes no modo padrão (headless):
````
pnpm test
````

Para rodar os testes no modo visual (headed):
````
pnpm test:headed
````

6. Gerar e Visualizar Relatórios
Após rodar os testes, gere e visualize o relatório HTML:
````
pnpm exec playwright show-report
````

### Estrutura do Projeto
````
nome-do-repo/
├── tests/                  # Testes automatizados
├── pages/                  # Page Objects
├── selectors/              # Seletores centralizados
├── screenshots/            # Capturas de tela geradas nos testes
├── playwright.config.ts    # Configuração do Playwright
├── package.json            # Configuração de dependências
└── README.md               # Documentação do projeto
````


