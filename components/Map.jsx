import React, { useMemo } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
const Map = ({ data }) => {
  const center = useMemo(
    () => ({
      lat: data.latitude,
      lng: data.longitude,
    }),
    [data],
  );
  return (
    <div className="h-full w-full">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          zoom={13}
          center={center}
          mapContainerStyle={{
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <MarkerF position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
