import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";
import Loader from "../Loader";
import useFetchCountries from "../../hooks/useFetchCountries";
import CountryCard from "./CountryCard";
import Searchbar from "./Searchbar";

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
  const [filter, setFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const { isLoading, isError, data } = useFetchCountries();
  const debouncedFilter = useDebounce(filter, 500);

  return (
    <div
      className="
      mt-28 text-homepageFontSize"
    >
      <div className="flex flex-col justify-between md:flex-row">
        <Searchbar filter={filter} setFilter={setFilter} />
        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          className="
          user-shadow bg-userInputArrowBgLight dark:bg-userInputArrowBgDark mt-10 w-full max-w-[200px] 
          appearance-none rounded-lg bg-[length:14px_14px] bg-[center_right_1rem] bg-no-repeat px-6 py-4
          dark:bg-userDarkSecondaryBg dark:text-userDarkPrimaryText md:mt-0"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <section
        className="
        mt-20 grid justify-center gap-y-10
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-20"
      >
        {isLoading && <Loader />}
        {isError && <div className="text-center">Error...</div>}
        {data &&
          data
            .filter(
              (country: Country) =>
                (country.region.toLowerCase() === regionFilter.toLowerCase() ||
                  !regionFilter.length) &&
                country.name.common.toLowerCase().includes(debouncedFilter),
            )
            .map((country: Country, i: number) => (
              <CountryCard
                key={country.name.official || i}
                name={country.name.common || ""}
                population={country.population || 0}
                region={country.region || ""}
                capital={country.capital || ""}
                flag={country.flags.png || ""}
              />
            ))}
      </section>
    </div>
  );
}

export default AllCountries;
