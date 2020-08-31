## DESCRIÇÃO DOS ARQUIVOS

### PROPRIEDA DE DOMÍNIOS - e1

Foi pedido para verificar os dados dos responsáveis pelos seguintes domínios: amazon.com (e1_amazon_com.txt), amazon.com.br (e1_amazon_com_br.txt) e amazon.co.uk (e1_amazon_co_uk.txt). Esses que claramente pertecem a mesma empresa, no entanto algumas responsabilidades aparecem em nomes de pessoas diferentes. Isso devido ao fato de cada um desses `domínios` ser referente a uma região diferente, o primeiro Estados Unidos, o segundo Brasil e o terceiro Reino Unido.

Para realizar este exercício o comando `whois` foi usado para verificar o que foi pedido, umz vez que este comando é um protocolo de consulta e resposta usado para buscar em um banco de dados qum objeto em específico, neste o caso os domínios dos sites.

### REQUISIÇÕES HTTP - e2

Nesta sequência de exercícios foi pedidos que usando a linha de comando do terminal para fazer algumas requisições ao endereço https://httpbin.org/anything, e que os comandos utilizados fossem gravadas, assim como suas respectivas saídas:

- `GET` passando como parâmetro o seu primeiro nome (firstname) - e2_GET.txt
- `POST` passando como parâmetro o seu último nome (lastname) - e2_POST.txt
- `PUT` passando como parâmetro o seu primeiro e último nomes (firstname e lastname) - e2_PUT.txt
- `DELETE` - e2_DELETE.txt
- `POST` passando o `JSON`: {"escola": "Trybe"} - e2_POST.txt

Fora utilizado a o comando `curl -X GET -d "firstname=Ana" https://httpbin.org/anything` nos quatro primeiros casos, alterando apenas o tipo de requisição. Já no último caso o comando `curl -H "content-type: application/json; charset=UTF-8" -X POST -d '{"escola": "Trybe"}' https://httpbin.org/anything` fora utilizado, uma vez que o dado a ser passado tratava-se de uma estrutura `JSON`.

### SCAN DE REDES E SERVIDOS - e3

No exercício de número três foi pedido que verifica-se, na rede em que estava usando, as máquinas que estavam ativas e respondendo e também se a minha máquina possuia portas abertas para o protocolo `UDP` e para o protocolo `TCP`.

Para o primeiro caso o comando `nmap -sn` foi usado, uma vez que este realiza uma verificação de ping, isto é, uma varredura nas portas. Para o segundo e terceiro caso os comando `nmap -sU` e `nmap -sT` foram utilizados, pois estes fazem a verrificação das portas abertas para o protocolo `UDP` e `TCP`, respectivamente.

### MONITORAMENTO DE ATIVIDADES DE REDE - e4


No último exercício é pedido que as conexões `UDP` e `TCP` da máquina e também os sockets em escuta sejam listados. Além disso é pedido que os programas que estão usando as conexões na máquina sejam mostrados.

O comando `netstat` foi então utilizado, e o acompanhando vieram as opções `-au` para a primeira situação, `-at` para a segunda situação, `-l` para a terceira situação e `-p` para a quarta e última situação.
