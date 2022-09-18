import { useEffect, useState } from "react";

const useBreedList = animal => {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("Unloaded");

  useEffect(() => {
    const requestBreedList = async () => {
      setBreedList([]); // ensure empty array to start with
      setStatus("Loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const data = await res.json();
      localStorage.setItem(animal, data.breeds); // empty array if no animal exist in db
      setBreedList(localStorage.getItem(animal).split(","));
      setStatus("Loaded");
    };

    if (!animal) {
      setBreedList([]);
    } else if (localStorage.getItem(animal)) {
      setBreedList(localStorage[animal].split(","));
    } else {
      requestBreedList();
    }
  }, [animal]);

  return [breedList, status];
};

export default useBreedList;
