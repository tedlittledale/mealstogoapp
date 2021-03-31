import React, { useState, createContext, useEffect, useContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../locations/locations.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { location } = useContext(LocationContext);

  useEffect(() => {
    if (!location) {
      return;
    }
    const { lat, lng } = location;
    const locationSting = `${lat},${lng}`;
    setRestaurants([]);
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
      restaurantsRequest(locationSting)
        .then(restaurantsTransform)
        .then((results) => {
          setRestaurants(results);
        })
        .catch((e) => {
          setError(e);
        });
    }, 2000);
    return function cleanup() {
      clearTimeout(timeout);
    };
  }, [location]);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
