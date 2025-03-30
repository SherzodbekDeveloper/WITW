import { API_URL } from "@/constants";
import axios from "axios";
import { Country } from "../store/countryStore";

export const getLatestCountry = async () => {
     try {
          const res = await axios.get(`${API_URL}`);

          return {
               data: res.data,
               status: res.status,
          };
     } catch (error) {
          console.error("Error fetching latest posts:", error);

          return {
               data: [],
               status: 500,
          };
     }
};


export const getSingleCountryByCca3 = async (cca3: string, country: Country[]) => {
     if (cca3) {
          const foundCountry = country.find((c) => c.cca3 === cca3)
          return foundCountry
     }
     else {
          return null
     }
}

