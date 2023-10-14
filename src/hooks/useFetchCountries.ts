import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../services/countries";

const useFetchCountries = () => useQuery(["countries"], getAllCountries);

export default useFetchCountries;
