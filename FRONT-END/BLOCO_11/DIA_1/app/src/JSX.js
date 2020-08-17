import React from "react";

export const JSX1 = <h1>Hello JSX!</h1>;

export const JSX2 = (
  <div>
    <h1>P - H1 - UL - LI</h1>
    <p>Paragráfo</p>
    <ul>
      <li>li 1</li>
      <li>li 2</li>
      <li>li 3</li>
    </ul>
  </div>
);

export const JSX3 = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/*comment*/}
  </div>
);

export const JSX4 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

export const JSX5 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

export const JSX6 = (
  <div>
    <h2>Welcome to React!</h2>
    <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

export const MyComponent1 = function () {
  return <div>Oi</div>;
};

export class MyComponent2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
}

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

export class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}
