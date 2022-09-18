import { Link } from "react-router-dom";

const Pet = ({ id, name, animal, breed, images, location }) => {
  let hero = "http://pet.images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    // <Link to> is same as <a href> but handles extra logics that relates to react
    <Link to={`/details/${id}`} className="pet">
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
    </Link>
  );
};

export default Pet;
