import useFetchCountries from "../../hooks/useFetchCountries";
import CountryCard from "./CountryCard";

export interface Country {
  name: {
    official: string;
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
  };
}

function AllCountries() {
  const { isLoading, isError, data } = useFetchCountries();
  return (
    <section
      className="
      mt-28 grid justify-center gap-y-10 text-homepageFontSize sm:grid-cols-2 lg:grid-cols-3
      xl:grid-cols-4 xl:gap-20"
    >
      {isLoading && <div className="text-center">Loading...</div>}
      {isError && <div className="text-center">Error...</div>}
      {data &&
        data.map((country: Country) => (
          <CountryCard
            key={country.name.official}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.png}
          />
        ))}
    </section>
  );
}

export default AllCountries;
