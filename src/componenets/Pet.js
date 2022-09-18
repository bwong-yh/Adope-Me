/* Everything can be written in jsx 

import React from "react";

const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

*/

// jsx
const Pet = ({ id, name, animal, breed, images, location }) => {
  let hero = "http://pet.images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal[0].toUpperCase() + animal.slice(1)} / {breed}
        </h2>
        <h2>{location}</h2>
      </div>
    </a>
  );
};

export default Pet;
