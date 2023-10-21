/* eslint-disable no-promise-executor-return */
import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1";

const getAllCountries = async () => {
  const response = await axios.get(`${baseUrl}/all`);
  return response.data;
};

const getCountry = async (name: string) => {
  const response = await axios.get(`${baseUrl}/name/${name}?fullText=true`);
  return response.data[0];
};

const getCountriesByFilter = async (filter: string) => {
  const response = await axios.get(`${baseUrl}/name/${filter}`);
  return response.data;
};

const getMultipleCountries = async (names: string[]) => {
  if (names.length === 0) return Promise.resolve([]);

  const response = await axios.get(
    `${baseUrl}/alpha?codes=/${names.join(",")}`,
  );
  return response.data;
};

export {
  getAllCountries,
  getCountry,
  getCountriesByFilter,
  getMultipleCountries,
};
