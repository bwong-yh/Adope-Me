// Pet component receives data from its parent componenets, but not the other way around; aka "one way data flow"
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

// App() is a render function; it needs to be fast because it re-renders a lot
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Kelly",
      animal: "Dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, {
      name: "Garfield",
      animal: "Cat",
      breed: "Persian Tabby",
    }),
    React.createElement(Pet, {
      name: "Hamtaro",
      animal: "Hamster",
      breed: "Golden Hamster",
    }),
  ]);
};

// display onto the DOM
ReactDOM.render(React.createElement(App), document.getElementById("root"));
