/* eslint-disable no-promise-executor-return */
import axios from "axios";

// MOCKED BASEURL
const baseUrl = "http://localhost:3001/countries";

// ACTUAL BASEURL
// const baseUrl = "https://restcountries.com/v3.1";

const getAllCountries = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // MOCKED URL
  const response = await axios.get(`${baseUrl}`);

  // ACTUAL URL
  // const response = await axios.get(`${baseUrl}/all`);
  return response.data;
};

const getCountry = async (name: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // MOCKED URL
  const response = await axios.get(`${baseUrl}`);
  const findCountry = response.data.find(
    (country) => country.name.common === name,
  );

  // ACTUAL URL
  // const response = await axios.get(`${baseUrl}/name/${name}`);
  return findCountry;
};

export { getAllCountries, getCountry };
