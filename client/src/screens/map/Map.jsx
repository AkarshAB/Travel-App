import React from "react";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MarkerComponent = ({ text }) => (
  <div style={{ color: "red", fontSize: "30px" }}>
    <i class="fa-solid fa-location-dot"></i>
  </div>
);
export default function Map() {
  const defaultProps = {
    center: {
      lat: 10.0182245,
      lng: 76.3426249,
    },
    zoom: 1,
  };
  const markerPosition = { lat: 10.0159, lng: 76.3419 };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCiqtKdPyp4X7yvaqaUbMXldFvKS9SioQM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        margin={[50, 50, 50, 50]}
        onChange={""}
        options={{
          mapTypeControl: true,
          mapTypeId: "roadmap",
          gestureHandling: "cooperative",
          styles: [
            {
              elementType: "geometry",
              stylers: [{ color: "#c94444" }],
            },
          ],
        }}
        onChildClick={""}
      >
        <MarkerComponent
          lat={markerPosition.lat}
          lng={markerPosition.lng}
          text="Marker Text"
          markerOffset={{ x: 0, y: -30 }} // Adjust the marker's position
          onClick={() => console.log("Marker clicked")}
          hover={true}
          hoverText="Hover Text"
          onMouseOver={() => console.log("Mouse over marker")}
          onMouseOut={() => console.log("Mouse out of marker")}
        />
      </GoogleMapReact>
    </div>
  );
}
