import React, { useRef } from "react";
import { StandaloneSearchBox, LoadScript } from "@react-google-maps/api";
import "../styles/bookingForm.css";

const SearchBox = () => {
  const inputRef = useRef();

  const handlePlaceChange = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      console.log(place.formatted_address);
    }
  };

  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyDCL-OH_R_UMTGVGSDLyqPFsHKDZtPF6Ss"
        libraries={["places"]}
      >
        <StandaloneSearchBox
          onLoad={(ref) => (inputRef.current = ref)}
          onPlacesChanged={handlePlaceChange}
        >
          <input
            type="text"
            name="location"
            className="form-control location"
            placeholder="Location"
          />
        </StandaloneSearchBox>
      </LoadScript>
    </div>
  );
};

export default SearchBox;
