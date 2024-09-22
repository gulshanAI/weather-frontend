import { cn } from "@/lib/utils";
import React, { useState } from "react";

const GeoLocation: React.FC<{
  onLocationSuccess: (lat: number, long: number) => void;
}> = ({ onLocationSuccess }) => {
  const [locationGranted, setLocationGranted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          onLocationSuccess(lat, long);
          setLocationGranted(true);
        },
        () => {
          setErrorMessage(
            "To get the accurate result, please allow location access in your browser settings."
          );
          setLocationGranted(false);
        }
      );
    } else {
      setErrorMessage("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div
      className={cn(
        "p-2 rounded-md bg-orange-100 mt-2 text-xs text-orange-500",
        {
          "bg-green-100 text-green-700 font-semibold": locationGranted,
          "bg-red-100 text-red-500": errorMessage,
        }
      )}
    >
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : locationGranted ? (
        <p>Now result is Based on your Location</p>
      ) : (
        <div className="flex justify-between items-center">
          To get the accurate result, please allow location.
          <button className="font-bold" onClick={() => getLocation()}>
            Allow Location
          </button>
        </div>
      )}
    </div>
  );
};

export default GeoLocation;
