import React from "react";
import "./App.css";
import { JSX1, JSX2, JSX3, JSX4, JSX5, JSX6, MyComponent1, MyComponent2, ParentComponent} from "./JSX";

const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

function App() {
  return (
    <div className="App">
      <h2>Exercício 1</h2>
      <ul>
        {tarefas.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
      <h2>Exercício 2</h2>
      {JSX1}
      <h2>Exercício 3</h2>
      {JSX2}
      <h2>Exercício 4</h2>
      {JSX3}
      <h2>Exercício 5</h2>
      {JSX4}
      <h2>Exercício 6</h2>
      {JSX5}
      <h2>Exercício 7</h2>
      {JSX6}
      <h2>Exercício 8</h2>
      <MyComponent1 />
      <h2>Exercício 9</h2>
      <MyComponent2 />
      <h2>Exercício 10</h2>
      <ParentComponent />
    </div>
  );
}

export default App;
