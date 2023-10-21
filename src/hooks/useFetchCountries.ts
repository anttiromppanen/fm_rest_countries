import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../services/countries";

const useFetchCountries = () =>
  useQuery(["countries"], async () => getAllCountries());

export default useFetchCountries;
