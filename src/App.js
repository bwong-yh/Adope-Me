import React from "react";
import { render } from "react-dom";
import Pet from "./componenets/Pet";

const App = () => {
  return (
    <div>
      <h1 id="brand">Adopt Me!</h1>
      <Pet name="Kelly" animal="Dog" breed="Labrador" />
      <Pet name="Garfield" animal="Cat" breed="Perisan Tabby" />
      <Pet name="Hamtaro" animal="Hamster" breed="Golden Hamster" />
    </div>
  );
};

// display onto the DOM
render(React.createElement(App), document.getElementById("root"));
