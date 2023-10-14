import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/countries";

const useFetchCountry = (name: string) =>
  useQuery(["country", name], () => getCountry(name));

export default useFetchCountry;
