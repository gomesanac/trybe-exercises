## DESCRIÇÃOS DOS PROGRAMAS

Todos os exercícios apresentam alguns testes, sendo assim, para que o exercício seja dado como resolvido é necessário que todos os testes estejam passando.

### Exercício 1

Através do código fornecido, deve-se completa-lo de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54. Para isso utilizou-se o `spread operator` na chamada da função, uma vez que era necessário separar os parâmetros que estavam dentro de um array.

### Exercício 2

Para o exercício 2 foi preciso escrever a função `sum` para que a mesma passasse nos testes existentes. Essa função deveria retornar a soma dos elementos passados como parâmetros, como não era possível prever quantos parâmetros seriam passados, o `parâmetro rest` foi utilizado, pois este transforma os elementos recebidos em um parâmetro em um array, torando possível a utilização do `reduce`.

### Exercício 3

Escreva a função `personLikes`, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme esperado nos testes. Como a função recebia um objeto, o `object destructuring` foi utilizado para que apenas as informações necessárias fossem retiradas do objeto, assim facilitando a utilização destas.

### Exercício 4

Assim como no exercício anterior esse exercício utilizada de `object destructuring` para a criação da função `filterPeople` que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20. Além do `object destructuring` a função utilizada a HOF `filter` para encontrar as pessoas conforme as condições anteriormente descritas.

### Exercício 5

No exercício número 5 a função `swap`, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados, deve que ser escrita. Detalhe: essa função precisa ser feita gastando apenas 1 linha. Para isso o `array destructuring`, pois dessa forma é possível acessar os elementos do array, os armazenando em variáveis, e posteriormente utiliza-las para retorno o array com a nova ordenação.

### Exercício 6

Esse exercício pede que suponha-se que esteja lidando com carros e, da forma como o problema foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Deve-se então criar uma função toObject que, dada uma lista, retorna um objeto representando o carro, devendo o objeto conter as chaves name, brand e year.

Para fazer o que foi pedido primeiro utilizou-se o `array destructuring`, para pegar cada elemento do array e armanena-lo em uma variavel e posteriormento a `abbreviation object literal` foi utilizada, para isso funcionar as variáveis dos elementos dos arrays receberam o nome de suas respectivas chaves no objeto, então retornou-se um objeto apenas com as chaves pedidas.

### Exercício 7

O exerício de número 7 pede que seja escrita a função `shipLength` que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento. Para isso a utilizou-se `object destructuring`, para mais uma vez pegar os valores das chaves, além disso também se definiu uma valor padrão (`default params`) para o parâmetro da unidade de medida (`measurementUnit`), para situações em que esse parâmetro não era passado para a função.

### Exercício 8

O último exercício pede que a função `greet` que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento seja escrita. Os parâmetros que a função pode receber são o nome da pessoa (`name`) e a mensagem de cumprimento que deve ser retornada (`msn`), no entanto caso o parâmetro `msn` não seja passado é necessário que a função retorne `Hi name`, para isso acontecer o `default params` foi utilizado, como visto no exercício anterior, definindo o valor padrão da variável como `Hi`.
