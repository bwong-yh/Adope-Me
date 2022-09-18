import React from "react";
import { render } from "react-dom";
import Pet from "./componenets/Pet";
import Search from "./componenets/Search";

const App = () => {
  return (
    <div>
      <h1 id="brand">Adopt Me!</h1>
      <Search />
    </div>
  );
};

// display onto the DOM
render(React.createElement(App), document.getElementById("root"));
