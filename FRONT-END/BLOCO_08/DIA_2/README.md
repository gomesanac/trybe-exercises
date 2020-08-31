## DESCRIÇÃOS DOS PROGRAMAS

Em todos os exercícios a seguir foram desenvolvidos com uma estrutura de dados representando uma lista de livros, contendo informçãoes como nome do livro, gênero, pessoa autora do livro e data de lançamento. Além disso, os exercícios apresentam alguns testes, sendo assim, para que o exercício seja dado como resolvido é necessário que todos os testes estejam passando.

### Exercício 1

No exercício 1 deve-se criar um array ordenado com os nomes de todas as pessoas autoras de ficção científica ou fantasia. Para isso função com as HOF's `filter`, `map` e `sort` foi criada, a primeira das HOF's foi utilizada para filtrar os objetos dos livros pelo gênero, a segunda para criar um array apenas com os nomes dos autores e a terceira para ordena-los, por se tratar de ordem alfabética não foi necessária a utilização de uma função de comparação.

### Exercício 2

Nesse exercício deve-se criar uma uma string com os nomes de todas as pessoas autores. A HOF `reduce` então foi utilizada, visto que esta HOF é muito útil para realizar somas e nesse caso um concatenação.

### Exercício 3

No exercício de número 3 deveria ser retornado um array com o nome de todos os livros com mais de 60 anos de publicação, para isso criou-se uma função com a HOF `filter`, para separar os livros que correspondem-se a condição e posteriormente a HOF `map` para criar um array apenas com o nome dos livros.

### Exercício 4

Nesse exerício foi pedido que a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados fosse calculada, para isso uma função com a HOF `reduce` foi feita, pois como anteriormente dito essa é a melhor HOF para situados de soma, visto que ela apresenta um parâmetro que acula valores de acorda com a condição passada.

### Exercício 5

O exerício número 5 pede que o livro com o maior nome seja encontrado. Para isso mais uma vez a HOF `reduce` foi utilizada, já que o nome do livro com o maior nome poderia ser armazenado no acumulador da HOF após cada comparação feita, facilitando a resolução do exercício e também escrevendo menos linhas de código.

### Exercício 6

Para o exercício 6 deveria ser criado um array de strings no formato `NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA`, para isso utilizou-se a HOF `map` que irá passar por cada objeto de livro e armazenar seu nome, gênero e autor em uma string, sendo que esta string será armazenada em um array.

### Exercício 7

O último exercício pede que se construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

Para isso utilizou-se a HOF `map`, que criou o array de objetos como foi pedido, e na sequência foi utilizada a HOF `sort` no array retornado por `map`, nesse caso foi necessário passar para a HOF `sort` uma função de comparação, visto que era necessário ordenar os objetos em ordem crescente pela idade dos autores quando os livros foram lançados.
