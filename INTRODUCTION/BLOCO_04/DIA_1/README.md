## DESCRIÇÃO DOS PROGRAMAS

### Exercício 1 - exercicio_1.js

O exercício número 1 pede que sejam feitos 5 programas diferentes, sendo cada um deles para uma operação aritmética básica (adição, subtração, multiplicação, divisão, módulo). O programa deve ter duas variáveis a e b definidas no começo com os valores que seão operados.

Com a refatoração dos programas o exercício número 1 passou a ser apenas 1 programa, ao invés de 5. Sendo que todas as operações estão dentro de uma função que recebe os parâmetros a e b, estes que são utilizados para a realização das 5 operações anteriormente ligadas.

### Exercício 2 - exercicio_2.js

Neste exercício deve-se criar um programa que retorne o maior de dois números, sendo que os valores a serem comparados devem ser definidos no começo. Após a refatoração esta comparação tornou-se uma função que recebe como parâmetros os dois números a serem comparados.

### Exercício 3 - exercicio_3.js

O exercício número 3 é semelhante ao exercício número 2, porém deve-se retornar o maior de três números. Assim como no exercício anterior, tornou-se uma função que recebe como parâmetros os números a serem comparados, retornando o maior deles.

### Exercício 4 - exercicio_4.js

Este exercício pede que verifique se um dado número, definido ao início do programa, é positivo ou negativo, retornando positive e negative, respectivamente. O programa dessa questão fora refatorado, tornando-se uma função que recebe o valor a ser verificado, retornando se este é positivo ou negativo.

### Exercício 5 - exercicio_5.js

O exercício de número 5 pede que dado três váriaveis com diferentes valores de ângulos, verificaque-se se estes ângulos representam os ângulos de um triângulo, retornando true se a condição for verificada e false caso não seja. O programa deste exercíco também tornou-se um função, que recebe os ângulos como parâmetros e realiza as comparações, retornando true caso a soma dos ângulos seja igual a 180 e false caso seja menor ou maior que 180.

### Exercício 6 - exercicio_6.js

O exercício número 6 propoẽ que seja feito um programa que recebe o nome de uma peçla de xadrez e retone os movimentos que esta peça faz. Além disso é preciso que o programa funcione tanto para palavras com eles maiúsculas quanto palavras com letras minúsculas, isto sem que a quantidade de condições seja aumentada, e caso a peça passada seja inválida, o programa deve retornar uma mensagem de erro.

Para solucionar o desafio das letras maiúsculas e minúsculas a função toLocaleLowerCase() foi utilizada, este transforma todas as letras da string em letras minúsculas. Além disso, todo o programa fora transformado em uma função, que recebe como parâmetro a peça que deseja ser verifica, sendo que a mudança a transformação das letras ocorre dentro da função. 

### Exercício 7 - exercicio_7.js

Neste exercício pede-se que uma nota dada em porcentagem (de 0 a 100) seja convertida em conceitos de A a F. Seguindo as seguintes regras:
- Porcentagem >= 90 -> A
- Porcentagem >= 80 -> B
- Porcentagem >= 70 -> C
- Porcentagem >= 60 -> D
- Porcentagem >= 50 -> E
- Porcentagem < 50 -> F
- Caso a nota informada seja menor que 0 ou maior que 100 o programa deve exibir uma mensagem de erro e então encerrar.

A solução deste exercício fora transformada em uma função, que recebe a nota em porcentagem como parâmetro, retornando o conceito conrrespondente. Caso a nota informada não corresponde ao esperado, uma mensagem de erro será mostrada.

### Exercício 8 - exercicio_8.js

O exercício de número 8 pede que a partir de três números em variáveis definidas no começo do código retorne-se true caso uma deles seja para. Caso o contrário, o programa deve retornar false. Fora então criada uma função que recebe como parâmetro os três números, realizando a verificação necessãrio. Como bônus foi pedido que apenas um if fosse utilizado, para isso comparou-se se algum dos módulos dos números por 2 era igual a zero.

### Exercício 9 - exercicio_9.js

Este exercício é semelhante ao anterior, porém aqui deseja-se verificar se um dos três números é ímpar, também utilizando apenas um código. Fora então seguido o mesmo raciocínio, porém verificou-se se algum dos módulos dos números por 2 era diferente de zero.

### Exercício 10 - exercicio_10.js

O exercício número 10 pede que dado o custo de um produto e seu valor de venda, calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil unidades desse produtos. É importante pontuar que sobre o custo do produto, incide um imposto de 20% que precisa ser considerado no calculo do lucro. Além disso, caso um dos valores de entrada seja menor que zero o programa deve emitir uma mensagem de erro e encerrar.

Para cumprir tais requisitos foi feita uma função que recebe como parâmetros o valor de custo e o valor de venda, verifica se estes são menores que zero e que caso não sejam parte para os calculos. Na parte dos calculos analisa-se o custo, o imposto e o valor de venda total dos 1000 produtos. Sabendo estes valores, subtrai-se do valor de venda o custo e o imposto, obtendo-se então o lucro.

### Exercício 11 - exercicio_17.js

O último exercício tem como objetivo calcular o salário líquido de um trabalhador de carteira assinada no Brasil a partir do salário bruto. Para isso deve-se realizar o cálculo do desconto do `INSS`, que é em cima do salário bruto, e do `IR`, que é em cima do salário base (após o desconto do `INSS`). Sendo que para as faixas de imposto deve-se seguir as seguintes referências:

#### INSS

- Salário bruto até R$ 1.556,94: alíquota de 8%
- Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
- Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
- Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

#### IR

- Até R$ 1.903,98: isento de imposto de renda
- De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
- De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
- De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
- Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Fez-se então uma função que recebe o salário bruto como parâmetro. Compara-o com as faixas do INSS descritas a cima e realiza o desconto, armazenando esse resultado na variável referente ao salário base. Essa variável será então comparada as faixas do `IR` anteriormente descritas, realizando também o respectivo desconto e armazendo o resultando na variável do salário líquido. Essa variável será então retornada e mostrada na tela.
