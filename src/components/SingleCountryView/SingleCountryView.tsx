import { useParams } from "react-router-dom";
import useFetchCountry from "../../hooks/useFetchCountry";

function SingleCountryView() {
  const { country } = useParams();
  const { isLoading, isError, data } = useFetchCountry(country || "");

  return (
    <div className="mt-40 grid justify-center">
      {isLoading && <div className="text-center">Loading...</div>}
      {isError && <div className="text-center">Error...</div>}
      {data && (
        <>
          <img
            src={data.flags.png}
            alt={data.name.common}
            className="h-[230pxpx]"
          />
          <div>
            <h1>{data.name.common}</h1>
            <p>
              <span className="font-semibold">Native Name: </span>
              {data.name.official}
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              {data.population.toLocaleString("en-US")}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {data.region}
            </p>
            <p>
              <span className="font-semibold">Sub Region: </span>
              {data.subregion}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              {data.capital}
            </p>
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              {data.tld}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleCountryView;
