import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML-Like or XML-Like syntax

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement.JS Object => HTMLElement(render);

// React Functional Component

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

const number = 100;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    {number}
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
