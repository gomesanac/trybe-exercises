import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText} = render(<App />);

  });

  test(`
    Verificando sua funcionalidade, ao ser clicado é necessário adicionar o que o usuário digitou
  Use os fireEvent, para simular a digitação do usuário e o clique.
  `, () => {
    const {getByLabelText,queryByText} = render(<App />);

  });
});
