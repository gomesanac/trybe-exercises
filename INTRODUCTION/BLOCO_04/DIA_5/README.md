## DESCRIÇÃO DO PROGRAMA

O exerícicio se dividiu em duas partes, a primeira delas consistiu em adicionar elementos novas a uma estrutura HTML através da tag script, sendo que o código já continha CSS dentro da tag style. Já a segunda parte consistiu em editar alguns dos elementos que foram adicionados na primeira parte.

### PARTE 1 - ADICIONANDO ELEMENTOS

Nessa primeira parte foi preciso adicionar uma tag `<h1>` com o texto Exercício 4.5 - JavaScript DOM como filho da tag `<body>`. Adicionou-se também duas tags `<div>`, a primeira com a `classe main-content` como filha da tag `<body>` e a segunda com a `classe center-content` como filha da tag `<div>` com a `classe main-content`.

Na sequência adicionou-se a tag `<p>` como filho da `<div>` com a `classe center-content`, devendo colocar algum texto como conteúdo. Foram então adicionados mais duas tags `<div>` como filhas da `<div>` com a `classe main-content`, uma com a `classe left-content` e outra com a `classe right-content`.

A `<div>` com a `classe left-content` deveria ser a adicionada uma `imagem` com o `src` configurado para o valor https://picsum.photos/200 e `classe small-image`. Já a `<div>` com a `classe rigth-content` recebeu uma `lista não ordenada` com os valores de 1 a 10 por extenso. Por último adicionou-se 3 tags `<h3>`, todas sendo filhas da `<div>` com `classe main-content`.

### PARTE 2 - EDITANDO ELEMENTOS

As edições da segunda parte iniciaram com a adição da classe title na tag `<h1>` e também da `classe description` nas 3 tags `<h3>`. Na sequência, utilizando a função `removeChild()` a `<div>` com a `classe left-content` foi removida.

Mexendo um pouco com estilização, devia-se centralizar a `<div>` com a `classe right-content`, para isso configurou-se o `margin-right: auto` do `<div>`. Ainda na estilização deveria-se trocar a cor de fundo do elemento pai da `<div>` com a `classe center-content` para verde. Por último removou-se os dois últimos elementos (nove e dez) da lista criada.
