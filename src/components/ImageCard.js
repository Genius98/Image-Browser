//purpose of this component is to show one image by itself(auto adjustment 9in the grid column)
import React from "react";

class ImageCard extends React.Component {
  //creating new component(ImageCard) which will show a div with an image inside of it
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans); //so when we get pics successfully from api then we will get the height of the img
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* we assume that our image object is going to be passed to the image card as a prop called image */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
