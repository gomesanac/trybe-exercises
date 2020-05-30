import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByRole } = render(<App />);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.value).toBe('Adicionar');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const { getByLabelText, queryByText } = render(<App />);
    const input = getByLabelText('Tarefa:');
    const button = queryByText('Adicionar');

    fireEvent.change(input, { target: { value: 'Estudar' }});
    fireEvent.click(button);

    expect(queryByText('Estudar')).toBeInTheDocument();
  });
});
