import React, { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import Search from "./componenets/Search";
import Details from "./componenets/Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>

          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

// display onto the DOM
render(React.createElement(App), document.getElementById("root"));
