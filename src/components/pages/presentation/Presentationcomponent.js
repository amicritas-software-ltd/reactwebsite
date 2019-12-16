import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import presentationImage from "./img/1.jpg";

const images = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];

class Presentationcomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    const modalStyle = {
      overlay: {
        zIndex: 9999
      }
    }
    return (
      <div>
        <div className="container text-center">
          <h4>Please click below image to see full presentation.</h4>
          <hr />
          <br />
          <img className="img-responsive" style={{cursor:"pointer"}} alt="presentation" src={presentationImage} onClick={() => this.setState({ isOpen: true })} />
        </div>

        {isOpen && (
          <Lightbox
            reactModalStyle={modalStyle}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Presentationcomponent;
