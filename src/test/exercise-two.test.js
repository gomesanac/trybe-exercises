import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Testando a aplicação, testando input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const {} = render(<App />) // Caso precise de uma nova query adicione no object destructuring

  })
});

describe('Testando o Componente item', () => {
  test('ao receber uma string na props ela precisa aparecer na tela.', () => {

  })
})
