import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
class MyMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 23.8760565, lng: 90.3951236 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Amicritas"}
          position={{ lat: 23.8758173, lng: 90.3946624 }}
          animation={this.props.google.maps.Animation.BOUNCE}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

const LoadingContainer = props => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
  apiKey: "AIzaSyB6U35Q3MgryFFx3gQvcWC9X_PWRCYXrDQ",
  LoadingContainer: LoadingContainer
})(MyMap);
