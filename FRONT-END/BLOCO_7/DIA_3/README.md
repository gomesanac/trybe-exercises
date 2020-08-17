## DESCRIÇÃOS DOS PROGRAMAS

A dinâmica destes exercícios consistiu em criar testes para funções já existentes, afim de garantir seu correto funcionamento.

### Exercício 1 - exercicio1.js

Nesse exercício deve-se criar 4 testes para a função `sum(a, b)` que retorna a soma do parâmetro a com o b. São eles:

1. Testar se o retorno de sum(4, 5) é 9.
2. Testar se o retorno de sum(0, 0) é 0.
3. Testar se a função `sum lança um erro quando os parametros são 4 e "5"(string 5).
4. Testar se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5").

### Exercício 2 - exercicio2.js

No exercício número dois é preciso criar 2 testes para função `myIndexOf(arr, item)` que recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr. Os testes são:

1. Testar se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado.
2. Testar se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado.

### Exercício 3 - exercicio3.js

O exercício número 3 pede que sejam feitos 2 testes para a função `mySum(arr)` que recebe um array arr e retorna a soma de seus elementos. Os 2 testes são:

1. Testar se a chamada mySum([1, 2, 3, 4]) retorna o valor 10.
2. Testar se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado.


### Exercício 4 - exercicio4.js

O exercício de número 4 pede que são realizados 4 testes para a função `myRemove(arr, item)` que recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array. Os testes pedidos são:

1. Verificar se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado.
2. Verificar se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
3. Verificar que o array passado por parâmetro não sofreu alterações.
4. Verificar se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.


### Exercício 5 - exercicio5.js

A função `myRemoveWithoutCopy(arr, item)` recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array. Os testes para ela são:

1. Verificar se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado.
2. Verificar se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].
3. Fazer uma chamada para a função myRemoveWithoutCopy e verificar que o array passado por parâmetro sofreu alterações.
4. Verificar se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado.

### Exercício 6 - exercicio6.js

A função `myFizzBuzz(num)` recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divísivel por 3 ou 5 e retorna false caso num não seja um número. Os testes pedidos são:

1. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
2. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
3. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
4. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
5. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

### Exercício 7 - exercicio7.js

Neste exercício é passada a variável `thereIs`, sendo necessário testar se está foi definida.

### Exercício 8 - exercicio8.js

Neste exercício é passada a função `thereIs`, sendo necessário testar se está foi definida.

### Exercício 9 - exercicio9.js

Dada a função `change` foi pedido para utilizar o assert.ok() para testar uma condição.

### Exercício 10 - exercicio10.js

No exercício 9 são passados três objetos (JSON), sendo preciso compara-los dois a dois para verificar se são idênticos ou não.

### Exercício 11 - exercicio11.js

No último exercício deve-se fazer o teste da função `isAbove`, que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
