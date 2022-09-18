import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  // defaultProps - ALL instances share one property
  static defaultProps = {
    images: ["http://pet.images.dev-apis.com/pets/none.jpg"],
  };

  handleClick = e => {
    this.setState({ active: +e.target.dataset.index }); // + unary plus converts data type into number
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            // eslint-disable-next-line
            <img
              key={image}
              src={image}
              data-index={index} // needed for dataset property; see above
              className={index === active ? active : ""}
              alt="animal thumbnail"
              onClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
