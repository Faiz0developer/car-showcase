import axios from "axios";

export const fetchCars = async () => {
  const headers = {
    "x-rapidapi-key": "aa6ad99f13mshf0e6f28b0d76202p12ec32jsn7211b353d79a",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await axios.get(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  return response.data;
};

export const calculateCarRent = (city_mpg:number, year:number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear()-year)*ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0);
}