import { createContext } from "react";

const ThemeContext = createContext(["green"], () => {}); // mimick and useState hook; not necessary but better for typecript

export default ThemeContext;
