## DESCRIÇÃO DO PROGRAMA

Neste exercício foi pedido que dado um trecho de código HTML e CSS fossem modificados os elementos já existentes no trecho de código fornecido, utilizando apenas as funções `document.getElementById()`, `document.getElementsByClassName()` e `document.getElementsByTagName()`. Todas as modificações deveriam se dar por meio de funções, estas que totalizam 6 e estão descritas a baixo:

1. Crie uma função que mude o texto na tag `<p>` para uma descrição de como você se vê daqui a 2 anos.
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe.
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag `<h1>`.
5. Crie uma função que modifique todo o texto da tag `<p>` para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags `<p>` no console.

### Função 1 - changeTextP()

Para esta função fora utilizado o `document.getElementsByTagName`, que deve procurar todos os elementos com a tag `<p>`, no entando como precisa-se alterar o texto apenas da primeira tag `<p>` da página, seleciona-se a tag `<p>` correta pelo índice `([0])` e com o `innerHTML` adiciona-se o texto desejado.

### Função 2 - changeYellowSquare()

Para esta função usa-se o `document.getElementsByClassName`, para procurar a `<div>` que contém a `classe` que é responsável por estilizar o quadrado amarelo. Como o `document.getElementsByClassName` retorna uma `HTML Collection` é preciso utilizar a seleção por índice `([0])` para que possa-se fazer a alteração no lugar correto. Por último utiliza-se o `style.backgroundColor` para que a cor do quadrado seja alterada.

### Função 3 - changeRedSquare()

A dinâmica dessa função é exatamente igual a de anterior, mudando apenas o alvo da modificação, que é agora o quadrado vermelho, e consequentemente a classe a ser procurada e também a cor que irá susbtituir a anterior.

### Função 4 - fixH1()

A função número 4 possui a mesma dinâmica da primeira função e inclusive utiliza o `document.getElementsByTagName`, porém procura agora pela tag `<h1>` e diferente da função 1 utiliza o `innerText` para alterar o títula da página, uma vez que está sendo feita um substição e não a colocação de conteúdo, como foi na primeira função.

### Função 5 - uppercaseP()

A quinta função utiliza o mesmo método de busca da função 1, uma vez que ambas modificam o mesmo elemento. Mudando apenas a modificação, que nessa função trata-se de transformar todas as letras em maiúsculas e para isso utilizou `style.textTransform = "uppercase"` para fazer essa modificação.

### Função 6 - showTextP()

A última função pede que seja impresso no console o conteúdo de todas as tags `<p>`, para isso utiliza-se também `document.getElementsByTagName`, no entanto a ele encontra-se dentro de um `console.log` para que o comando seja mostrado e também dentro de um `for`, pois dessa forma o `índice` do elemento é alterado de forma dinâmica. Além disso para que o conteúdo seja exibido utiliza-se também o `innerHTML`.
