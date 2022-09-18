import React, { StrictMode } from "react";
import { render } from "react-dom";
import Search from "./componenets/Search";

const App = () => {
  return (
    // strict mode simply future-proof the app; makes it less issues when the next version of react comes out by restricting the app the use legacy features of soon to be deprecated features
    <StrictMode>
      <div>
        <h1 id="brand">Adopt Me!</h1>
        <Search />
      </div>
    </StrictMode>
  );
};

// display onto the DOM
render(React.createElement(App), document.getElementById("root"));
