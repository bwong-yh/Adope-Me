import { useContext, useEffect, useState } from "react";
import useBreedList from "../hooks/useBreedList";
import ThemeContext from "../ThemeContext";
import Result from "./Result";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const Search = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const data = await res.json();

    setPets(data.pets);
  };

  useEffect(() => {
    requestPets();
  }, []);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={e => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            {/* by default, empty option */}
            <option></option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={e => {
              setBreed(e.target.value);
            }}
            onBlur={e => {
              setBreed(e.target.value);
            }}
          >
            {/* by default, empty option */}
            <option></option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option></option>
            <option value="peru">Peru</option>
            <option value="orange">Orange</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>

      <Result pets={pets} />
    </div>
  );
};

export default Search;
