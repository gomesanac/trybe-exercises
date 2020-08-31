## DESCRIÇÃOS DOS PROGRAMAS

Em todos os exercícios a seguir foram desenvolvidos com uma estrutura de dados representando uma lista de livros, contendo informçãoes como nome do livro, gênero, pessoa autora do livro e data de lançamento. Além disso, os exercícios apresentam alguns testes, sendo assim, para que o exercício seja dado como resolvido é necessário que todos os testes estejam passando.

### Exercício 1

No exercício 1 deve-se criar uma função que encontre o nome da pessoa autora do livro nascida no ano de 1947. Para isso a HOF `find` foi utilizada, devendo comparar os anos de nascimentos dos autores com 1947 e após encontrar o autor correto retornar seu nome.

### Exercício 2

Nesse exercício deve-se criar uma função que retorno o nome do livro de menor nome. A HOF `forEach` foi utilizada, visto que para cada livro deveria-se fazer uma verificação do tamanho do livro.

### Exercício 3

No exercício de número 3 deveria ser retornado um array com todos os objetos que possuem gênero ficção científica ou fantasia, para isso criou-se uma função com a HOF `filter`, visto que este método retorna um array com os elementos que possuem a condição informada.

### Exercício 4

Nesse exerício pedia que fosse encontrado o livro cujo nome possui 26 caracteres, para isso uma função com a HOF `find` foi feita, realizando a comparação do tamanho dos títulos com o número 26, retornando então o objeto do livro em questão.

### Exercício 5

O exerício número 5 pede que os livros sejam ordenados por data de lançamento em ordem decrescente. Foi então criada uma função que utiliza da HOF `sort`, porém para ordenar em ordem decrescente foi necessário adicionar um função de comparação. Com isso será retornado um array com todos os objetos dos livros ordenados por data de lançamento.

### Exercício 6

Para o exercício 6 deveria ser feita uma função que retorne true se todas as pessoas autoras nasceram no século XX ou false caso contrário, para isso a HOF `every` foi utilizada, visto que ela só retorna `true` quando todos os elementos analisados satisfazem a condição.

### Exercício 7

Diferente do exerício anterior, o exercício 7 pede que seja feita uma função que retorne true se algum livro, isso é, se pelo menos um livro, foi lançado na década de 80 e false caso contrário. Nesse caso a HOF `some` foi utilizado, já que esta só retorna `false` caso nenhum dos elementos analizados satisfação a condição.

### Exercício 8

No exercício 8 deve-se criar um array com os livros com mais de 60 anos de publicação e ordenados a partir do livro mais velho. Para solucionar essa questão uma função com duas HOF's diferentes foi criada, primeiro o `filter` foi utilizado para criar um array com os livros com mais de 60 anos e posteriormente um `sort`, com a mesma função de comparação do exercício 5, fora feito, com a função então retornando um array com os objetos dos livros ordenados como requisitado.

### Exercício 9

O último exercício pede que o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto) seja encontrado. Para isso feita uma função que além de utilizar a HOF `find`, utilizada uma `expressão regular` com um padrão para três iniciais (`/^[A-Z]\. [A-Z]\. [A-Z]\..*$/`) e também o método `match`, que vefirica se o nome do autor "combina" com a `expressão regular` passsada como parâmetro.
