import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const heightSpan = this.imageRef.current.clientHeight;
    // console.log(heightSpan);
    const spans = Math.ceil(heightSpan / 10);
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div
        className='imgdiv'
        style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
