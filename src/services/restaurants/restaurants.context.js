import React, { useState, createContext, useEffect, useMemo} from 'react';
import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

const retrieveRestaurants =  () => {
    setIsLoading(false);
    setTimeout(() => {
    restaurantsRequest().then(restaurantsTransform).then((restaurants) => {
        setRestaurants(restaurants);
}).catch((error) => {
    setIsLoading(false);
    setError(error);
});
    }, 2000)
};
    useEffect(() => {

retrieveRestaurants();

    }, []);

    console.log(restaurants)

    return (
        <RestaurantsContext.Provider
             value={{
            restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}