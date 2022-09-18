import { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// class component; cannot use hooks
class Details extends Component {
  // constructor(props) {
  //   // super means give the props to the parent class - Component
  //   super(props);

  //   this.state = { loading: true };
  // }

  // since class properties plugins are implement with babel, the code above can be written as
  state = { loading: true };

  // life-cycle methods
  // componentDidMount() runs as soon as first render is done
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}` // see below
    );
    const data = await res.json();

    this.setState({ loading: false, ...data.pets[0] });
  }

  // must have a render function
  render() {
    if (this.state.loading) {
      return <h2>Loading ...</h2>;
    }

    // throw new Error("You Crashed!");

    const { name, animal, breed, city, state, description, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal[0].toUpperCase() + animal.slice(1)} / {breed} / {city},{" "}
            {state}
          </h2>

          {/* the hard way to use useContext */}
          {/* <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer> */}
          <button style={{ backgroundColor: this.props.theme }}>
            Adpot {name}
          </button>

          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// only way to get params out of react router is to use useParam; and the only way to use it in class componenet is to wrap it in another component
const WrappedDetails = () => {
  const params = useParams();
  const [theme] = useContext(ThemeContext);

  return (
    <ErrorBoundary>
      <Details params={params} theme={theme} />;
    </ErrorBoundary>
  );
};

export default WrappedDetails;
