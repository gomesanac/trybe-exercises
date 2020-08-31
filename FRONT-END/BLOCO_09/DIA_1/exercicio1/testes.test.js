const exercicios = require('./exercicios');

describe('sum', () => {
  test('retorno de sum(4, 5) é 9', () => expect(exercicios.sum(4, 5)).toBe(9));
  test('retorno de sum(0, 0) é 0', () => expect(exercicios.sum(0, 0)).toBe(0));
  test('função sum lança um erro quando os parametros são 4 e "5"(string 5)', () =>
    expect(() => exercicios.sum(4, '5')).toThrow());
  test('a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")', () =>
    expect(() => exercicios.sum(4, '5')).toThrow('parameters must be numbers'));
});

describe('myIndexOf', () => {
    const arr = [1, 2, 3, 4];
    test('retorno myIndexOf([1, 2, 3, 4], 3) é 2', () => expect(exercicios.myIndexOf(arr, 3)).toBe(2));
    test('retorno myIndexOf([1, 2, 3, 4], 5) é -1', () => expect(exercicios.myIndexOf(arr, 5)).toBe(-1));
});

describe('mySum', () => {
    test('retorno mySum([1, 2, 3, 4]) é 10', () => expect(exercicios.mySum([1, 2, 3, 4])).toBe(10));
    test('retorno mySum([1, -2, -3, 4]) é 0', () => expect(exercicios.mySum([1, -2, -3, 4])).toBe(0));
});

describe('myRemove', () => {
    const arr = [1, 2, 3, 4];
    test('retorno myRemove([1, 2, 3, 4], 3) é [1, 2, 4])', () => expect(exercicios.myRemove(arr, 3)).toEqual([1, 2, 4]));
    test('retorno myRemove([1, 2, 3, 4], 3) não é [1, 2, 3, 4])', () => expect(exercicios.myRemove(arr, 3)).not.toEqual(arr));
    test('arr não sofreu alterações', () => expect(arr).toEqual(arr));
    test('retorno myRemove([1, 2, 3, 4], 5) é [1, 2, 3, 4])', () => expect(exercicios.myRemove(arr, 5)).toEqual(arr));
});

describe('myRemoveWithoutCopy', () => {
    const arr = [1, 2, 3, 4];
    test('retorno myRemoveWithoutCopy([1, 2, 3, 4], 3) é [1, 2, 4])', () => expect(exercicios.myRemoveWithoutCopy(arr, 3)).toEqual([1, 2, 4]));
    test('retorno myRemoveWithoutCopy([1, 2, 3, 4], 3) não é [1, 2, 3, 4])', () => expect(exercicios.myRemoveWithoutCopy(arr, 3)).not.toEqual([1, 2, 3, 4]));
    test('arr sofreu alterações', () => expect(exercicios.myRemoveWithoutCopy(arr, 3)).not.toEqual([1, 2, 3, 4]));
    test('retorno myRemoveWithoutCopy([1, 2, 3, 4], 5) é [1, 2, 3, 4])', () => expect(exercicios.myRemoveWithoutCopy(arr, 5)).toEqual(arr));
});

describe('myFizzBuzz', () => {
    test('retorno correto para número divísivel por 3 e 5', () => expect(exercicios.myFizzBuzz(15)).toBe('fizzbuzz'));
    test('retorno correto para número divísivel por 3', () => expect(exercicios.myFizzBuzz(3)).toBe('fizz'));
    test('retorno correto para número divísivel por 5', () => expect(exercicios.myFizzBuzz(5)).toBe('buzz'));
    test('retorno correto para número não divísivel por 3 e 5', () => expect(exercicios.myFizzBuzz(2)).toBe(2));
    test('retorno correto para parâmetro diferente de número', () => expect(exercicios.myFizzBuzz('15')).toBe(false));
});

describe('Definição', () => {
    test('variável thereIsVar foi definida', () => expect(exercicios.thereIsVar).not.toBe(undefined));
    test('função thereIsFunc foi definida', () => expect(exercicios.thereIsFunc).not.toBe(undefined));
});

describe('change', () => {
    test('retorno change(true) é o false', () => expect(exercicios.change(true)).toBe(false));
    test('retorno change(false) é o true', () => expect(exercicios.change(false)).toBe(true));
});

describe('Compara objetos', () => {
    test('obj1 é igual ao obj2', () => expect(exercicios.obj1).toEqual(exercicios.obj2));
    test('obj1 é diferente do obj3', () => expect(exercicios.obj1).not.toEqual(exercicios.obj3));
    test('obj2 é diferente do obj3', () => expect(exercicios.obj2).not.toEqual(exercicios.obj3));
});

describe('isAbove', () => {
    test('retorno isAbove(2, 1) é true', () => expect(exercicios.isAbove(2, 1)).toBe(true))
    test('retorno isAbove(1, 2) é false', () => expect(exercicios.isAbove(1, 2)).toBe(false))
});
