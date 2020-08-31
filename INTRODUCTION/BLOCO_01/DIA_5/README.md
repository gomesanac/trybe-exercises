## DESCRIÇÃO DOS PROGRAMAS
 
### Exerício 1 - e1.sh

Neste exercício foi solicitado que a frase "Shell Script é demais!" fosse impressa na tela. Para isso um `echo` com a frase entre aspas duplas foi utilizado.

### Exerício 2 - e2.sh

Neste exercício foi pedido que o exercício anterior (e1.sh) fosse alterado para incluir uma variável, que teria como conteúdo a mensagem "Shell Script com variáveis é demais!", esta deveria então ser exibida na tela. Para isso a variável `frase`, recebendo a mensagem como valor, e posteriormente foi printada na tela através de um `echo`.

### Exerício 3 - e3.sh
 
O exercício solicitou que o comando `hostname` fosse guardando em uma váriavel e que a mensagem "Este script está rodando no computador: _", em que `_` seja o resultado do comando `hostname` que está na variável. Para que a variável receba o comando é preciso colocá-lo entre crases, então é só fazer como na questão anterior e dar um `echo`.

### Exerício 4 - e4.sh

O exercício solicita que verifique-se se o caminho até um arquivo existe e se caso ele exista exiba-se na tela a mensagem "O caminho _ está habilitado!" e na sequência verificar se o usuário possui permissão de escrita no arquivo, imprimindo na tela a mensagem "Você tem permissão para editar _" se o usuário tiver a permissão, caso contrário imprimir a mensagem "Você NÃO foi autorizado a editar _". Sendo que o `_` deve ser substituído pelo caminho até o arquivo.

Para isso criou-se uma variável (`filepath`) que contém o caminho completo até o arquivo a ser verificado. Na sequência tem-se uma estrutura `if` que irá verificar se o caminho existe e também se o usuário tem permissão de escrita, imprimindo as mensagens correspondentes a cada situação. Como um bônus, adicionei ao if um else para caso o caminho não esteja habilitado informar isso ao usuário, imprimindo na tela a mensagem "O caminho _ NÃO está habilitado!"

### Exerício 5 - e5.sh

O exercício número 5 pede que as palavras "shell", "script", "usando", "estrutura", "repetição", "for", "terminal" sejam exibidas na tela uma palavra por linha. Isso tentando utilizar o menor número de comando possível.

Foi então criado uma variável (`frase`) contendo todas as palavras, com espaço entre elas, e depois um `for` que cria a variável `palavra`, que irá passar pela variável `frase` e armazenar uma palavra de cada vez e imprimi-la na tela, com o comando `echo`. Isso se repetirá até que todas palavras tenham sido mostradas em tela.

### Exerício 6 - e6.sh

Neste exercício foi solicitado que através de um caminho informado por um usuário até um arquivo ou diretório, fosse impresso na tela se tratava-se de um arquivo comum, um diretório, ou um outro tipo de arquivo. E que após isso foi feita uma listagem detalhada do arquivo/diretório.

Para obter o caminho até o arquivo/diretório foi mostrada em tela, com o comando `echo`, uma mensagem pedindo que é o usuário entrasse com o caminho, que foi armazenado em uma variável (`arquivo`) através do `read`. Na sequência há um `if` que faz a discriminação do tipo de arquivo que se trata e imprime a mensagem correspondente a isso e também a listagem detalhada do arquivo.

### Exerício 7 - e7.sh

O exercício número 7 pede que modifique-se o exercício anterior (e6.sh) para receber o arquivo ou diretório como um argumento (ou parâmetro) ao invés de solicitar essa informação ao usuário. Para isso a variável `arquivo` recebe o parâmetro `$1` no lugar da entrada do usuário, o restante permanece igual.

### Exerício 8 - e8.sh

Este exercício pede que modifique-se o exercício anterior (e7.sh), para que ao invés de receber apenas um parâmetro, ele passe a receber uma quantidade ilimitada de arquivos ou diretórios. Para isso a variável `arquivo` recebe o parâmetro `$@` no lugar de `$1`, o restante permanece igual.

### Exerício 9 - e9.sh

Neste exercício é solicitado que receba-se um diretório como parâmetro e então verifique-se se o que foi recebido é um diretório. Caso não se trate de um diretório a mensagem "O argumento _ não é um diretório!" deve ser exibida em tela. Caso se trate de um diretório a mensagem "O _ tem _ arquivos." deve ser exibida em tela, em que os `_` devem ser substituídos pelo diretório e pela quantidade de arquivos contidos nele, respectivamente.

Foram então criadas duas variáveis, uma que contém o parâmetro para receber um diretório (`arquivo`) e outra que realiza a contagem da quantidade de arquivos dentro do diretório (`contagem`). Esta segunda variável contém o comando `ls -l $arquivo | wc -l`, que faz a listagem dos arquivos do diretório e na sequência encaminha a saída desse comando para o outro, após o `|`, onde a contagem da quantidade de arquivos é feita. Na sequência há um `if` que verifica se tratasse ou não de um diretório e imprime as respectivas mensagens na tela.

### Exerício 10 - e10.sh

O exercício número 10 propõem que crie-se um código que irá fazer com que o nome de todos os arquivos do diretório atual que terminam em ".png" começem com a data atual no formato "YYYY-MM-DD". Então caso, caso o arquivo "teste.png" esteja no diretório atual, e a data de hoje seja 04/02/2020, o script fará com que o nome deste arquivo passe a ser "2020-02-04-teste.png".

Criou-se então a variável `dia` para receber a data atual, ela então recebe o valor `$(date +%F)`, sendo `date` uma variável shell que contém a data completa (incluindo dia da semana e hora completa). Para que apenas o dia atual seja agregado a variável o `+%F` é utilizado. Além desta variável fez-se a variável  `arquivo` que contém o comando `ls *.png`, que lista tudo terminado em ".png". Na sequência tem-se um for que que cria a variável "novo_nome" e percorre a variável "arquivos", que contém a lista de arquivos .png, e então renomeia cada um dos arquivos, com o comando `mv`, da forma anteriormente descrita.

### Exerício 11 - e11.sh

O último exercício pede que o exercício anterior (e10.sh), seja alterado a fim de receber o diretório onde os arquivos se encontram e a extensão dos arquivos a serem modificados como argumentos. Além disso deve-se mostrar na tela como eram os nomes dos arquivos e como eles ficaram após terem sido modificados.

Para isso adicionou-se a variável `diretorio`, que recebe o parâmetro `$1`, e a variável `extensao`, que recebe o parâmetro `$2`. Além disso, a variável `arquivos` contém a variável `extensao` no lugar do "png". A última mudança é que dentro do for, antes de realizar a mudança de nome, tem um `echo` que imprime na tela a mensagem "Renomeando _ para _", onde as `_` são o nome antigo e o nome novo, respectivamente.
