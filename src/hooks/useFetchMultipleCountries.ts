import { useQuery } from "@tanstack/react-query";
import { getMultipleCountries } from "../services/countries";

const useFetchMultipleCountries = (names: string[]) =>
  useQuery(["borderCountries", names], () => getMultipleCountries(names));

export default useFetchMultipleCountries;
