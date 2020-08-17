## DESCRIÇÃO DO PROGRAMA


A primeira parte do exercício consistiu em criar um arquivo HTML chamado form.html para a estrutura do formulário e um arquivo script.js para o código JavaScript. Deveria-se então então realizar as seguintes tarefass:

1. Crie um fieldset para os dados pessoais a seguir:
    - Nome - Texto
        - Limite de 40 caracteres
        - Campo obrigatório
    - Email - Texto
        - Limite de 50 caracteres
        - Campo obrigatório
    - CPF - Texto
        - Limite de 11 caracteres
        - Campo obrigatório
    - Cidade - Texto
        - Limite de 200 caracteres
        - Campo obrigatório
    - Cidade - Texto
        - Limite de 28 caracteres
        - Campo obrigatório  
    - Estado - ComboBox
        - Todos os estados do Brasil
        - Utilize estruturas de repetição via JavaScript para gerar os <option>
        - Campo obrigatório     
    - Tipo - Radio Button
        - Casa, Apartamento
        - Campo obrigatório
2. Crie outro fieldset para dados do seu último empre
    - Resumo do currículo - TextArea
        - Limite de 1000 caracteres
        - Campo obrigatório
    - Cargo - Texto
        - Limite de 40 caracteres
        - Campo obrigatório
    - Descrição do cargo - Texto
        - Limite de 500 caracteres
        - Campo obrigatório
    - Data de início - Texto
        - Verificar o formato da data dd/mm/aaaa/li>
        - O dia deve ser > 0 e <= 31
        - O mês deve ser > 0 e <= 12
        - O ano não pode ser negativo
        - Caso alguma das condições for inválida no momento do envio do formulário, exibir mensagem de erro contextualizada.
        - Campo obrigatório
3. Logo abaixo do formulário, crie um botão qu
    - Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault().
    - Executa as validações que foram pedidas ao longo da montagem do formulário.
    - Monta uma div com o consolidado dos dados que foram inseridos no formulári
4. Crie um botão Limpar que limpa todos os campos do formulário e a div com seu currículo também.

A segunda parte do exercício consista em adicionar um framework CSS ao formulário para que este fosse estilizado, depois deveria-se adicionar uma biblioteca JavaScript de date picker ao formulário, sendo necessário remover as validações de data anteriormente adicionadas. Por último deveria-se adicionar uma outra biblioteca JavaScript, essa que deve fazer as validações do formulário, substituindo então as validações anteriormente desenvolvidas.
