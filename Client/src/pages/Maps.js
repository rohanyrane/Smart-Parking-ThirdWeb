import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { parkingSpaces } from "../constants/parkingspaces";
import { ethers } from 'ethers';

import { createTheme } from "@mui/material";
import { useStateContext } from "../contexts/ContractContext";

export default function Maps() {
  const theme = createTheme();
  const { buyTicket } = useStateContext();
  const [form, setForm] = useState({
    address: "",
    zone: 0,
    duration: 0,
  });
const [duration,setDuration]=useState(0)
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(duration)
    e.preventDefault();
    const form = {
      zone: 1,
      duration,
      plate:"MH2002"
    };
    console.log(form);
    await buyTicket({...form,target: ethers.utils.parseUnits(form.target, 18)} ); 
  };

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
          <form
            onSubmit={handleSubmit}
            className="w-full mt-[65px] flex flex-col gap-[30px]"
          >
            <div
              onSubmit={handleSubmit}
              className="w-full mt-[65px] flex flex-col gap-[30px]"
            >
              <input
                style={{ color: "black" }}
                required
                onChange={(e) => handleFormFieldChange('duration', e)}
                step="0.1"
                placeholder="Enter the duratrion"
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]"
              />
            </div>
            <button type="submit">
              Click me
            </button>
          </form>
        ) : (
          <div>Select</div>
        )}
      </div>
    </>
  );
}
