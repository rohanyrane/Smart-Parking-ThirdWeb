// import * as React from 'react';
// import Map from 'react-map-gl';

// function Maps() {
//   return <Map
//     initialViewState={{
//       longitude: -100,
//       latitude: 40,
//       zoom: 3.5
//     }}
//     mapboxAccessToken= "pk.eyJ1IjoibGF1a2lrMTczMiIsImEiOiJjbGgxc2g2azExNmUzM3NxdjlmM2g4aWFyIn0.smJqv8kInlS-Rfa7j80gfA"
//     style={{width: 600, height: 400}}
//     mapStyle="mapbox://styles/mapbox/streets-v9"
//   />;
// }
// export default Maps;

import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { parkingSpaces } from "../constants/parkingspaces";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
      <div style={{ width: "100%", height: "75%" }}>
        <Map
          initialViewState={{
            latitude: 19.2032676,
            longitude: 72.8828754,
            zoom: 10,
          }}
          mapboxAccessToken="pk.eyJ1IjoibGF1a2lrMTczMiIsImEiOiJjbGgxc2g2azExNmUzM3NxdjlmM2g4aWFyIn0.smJqv8kInlS-Rfa7j80gfA"
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"

          // {...viewport}
          // mapboxAccessToken= "pk.eyJ1IjoibGF1a2lrMTczMiIsImEiOiJjbGgxc2g2azExNmUzM3NxdjlmM2g4aWFyIn0.smJqv8kInlS-Rfa7j80gfA"
          // mapStyle="mapbox://styles/mapbox/streets-v9"
          // onViewportChange={viewport => {
          //   setViewport(viewport);
          // }}
        >
          {parkingSpaces.map((park) => (
            <Marker
              key={park.address}
              latitude={park.latitude}
              longitude={park.longitude}
              onClick={() => {
                // e.preventDefault();
                console.log("buttonClicked");
                setSelectedPark(park);
              }}
            >
              {/* <button
              className="marker-btn"
              style={{ border: "1px" }}
              onClick={(e) => {
                e.preventDefault();
                console.log("buttonClicked")
                setSelectedPark(park);
              }}
            >
              {park.name}
            </button> */}
            </Marker>
          ))}

          {selectedPark
            ? // alert("hekfdsg,drh")
              (console.log(selectedPark.name),
              (
                <Popup
                  // latitude={selectedPark.latitude}
                  // longitude={selectedPark.longitude}
                  latitude={19.2032676}
                  longitude={72.8828754}
                  offsetTop={-30}
                  // onClose={() => setSelectedPark(null)}
                >
                  <div>
                    {/* <h2>{selectedPark.address}</h2> */}
                    <h1>Helllllllllllllllllllllllllmapboxglllllllo</h1>
                  </div>
                </Popup>
              ))
            : console.log("not clicked")}
        </Map>
      </div>
      <div>
        {selectedPark ? (
          <div
            style={{
              backgroundColor: "#4acd8d",
              borderRadius: "5px",
              borderWidth: "2px",
              padding: "10px",
              color: "white",
              margin: "10px 0px",
            }}
          >
            <div style={{ display:"flex",alignItems:"center", justifyContent:"space-between"}}>
              <div>
                <h1 style={{fontWeight:"250"}}>{selectedPark.name}</h1>
              </div>
              <div>
                <button style={{ backgroundColor:"white", color:"#4acd8d", padding:"10px"}}>
                  Book Ticket
                </button>
              </div>
            </div>
          </div>
          
        ) : (
          <div>Select</div>
        )}
      </div>
    </>
  );
}
