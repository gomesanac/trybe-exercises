## DESCRIÇÃO DO PROGRAMA

São ao todo 10 exercícios (8 obrigatórios e 2 bônus), todos no mesmo arquivo, sendo que um exercício dependo do outro para que possa ser resolvido. Todos os exercícios utilizam três objetos que estão declarados no início do arquivo exercises.js. Foi pedido que as seguintes questões fossem resolvidas:

- Criar uma função para adicionar o turno da manhã no objeto lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
- Criar uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
- Criar uma função para mostrar o tamanho de um objeto.
- Criar uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.     
- Criar um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
```javascript
console.log(allLessons);
{
    lesson1:
    { materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã' },
    lesson2:
    { materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite' },
    lesson3:
    { materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite' }
}
```
- Usando o objeto criado no exercício 5, criar uma função que retorne o número total de estudantes em todas as aulas.
- Criar uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
```javascript
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
```
- Criar uma função que verifique se o par (chave / valor) existem na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
```javascript
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
```
- (Bônus 1) Criar uma função para contar quantos estudantes assistiram as aulas de matemática. Usar o objeto criado no exercício 5.
- (Bônus 2) Criar uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Usar o objeto criado no exercício 5:
```javascript
console.log(createReport(allLessons, 'Maria Clara'))
{
professor: 'Maria Clara',
aulas: [ 'Matemática', 'Matemática' ],
estudantes: 30
}
```
