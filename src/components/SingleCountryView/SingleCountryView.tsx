import { useParams } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import useFetchCountry from "../../hooks/useFetchCountry";
import useFetchMultipleCountries from "../../hooks/useFetchMultipleCountries";
import StyledButton from "../StyledButton";
import Loader from "../Loader";

function SingleCountryView() {
  const { country } = useParams();
  const { isLoading, isError, data } = useFetchCountry(country || "");
  const fetchMultipleCountries = useFetchMultipleCountries(data?.borders || []);

  if (isLoading || fetchMultipleCountries.isLoading) return <Loader />;
  if (isError) return <div className="text-center">Error...</div>;

  const nativeName =
    data && data.name.nativeName
      ? (Object.values(data?.name.nativeName)[0] as { common: string })?.common
      : data?.name.common;

  const currenciesMapped =
    data?.currencies &&
    Object.values(data?.currencies as Record<string, { name: string }>).map(
      (item: { name: string }) => item.name,
    );

  const languagesMapped = data?.languages && Object.values(data?.languages);

  const borderCountriesMapped = fetchMultipleCountries.data?.map(
    (item: { name: { common: string } }) => item.name.common,
  );

  return (
    <div className="mb-10 mt-32 px-2 dark:text-userDarkPrimaryText">
      <StyledButton linkTo="/">
        <ArrowLongLeftIcon className="inline h-4 w-4 text-userLightPrimaryText dark:text-userDarkPrimaryText" />{" "}
        Back
      </StyledButton>
      {data && (
        <div className="mt-16 grid items-center justify-center lg:grid-cols-[50%_1fr] lg:gap-x-32">
          <img
            src={data.flags.png}
            alt={data.flags.alt}
            className="w-full md:h-[300px] lg:h-[400px] lg:object-contain"
          />
          <div className="flex flex-col gap-y-8">
            <h1 className="-mb-2 mt-12 text-2xl font-bold md:text-4xl lg:mt-0">
              {data.name.common}
            </h1>

            <div className="flex flex-col justify-between gap-y-8 md:flex-row">
              <div className="flex flex-col gap-y-2 text-sm md:text-base">
                <p>
                  <span className="font-semibold">Native Name: </span>
                  {nativeName}
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
              </div>

              <div className="flex flex-col gap-y-2 text-sm md:text-base">
                <p>
                  <span className="font-semibold">Top Level Domain: </span>
                  {data.tld}
                </p>
                <p>
                  <span className="font-semibold">Currencies: </span>
                  {currenciesMapped.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Languages: </span>
                  {languagesMapped.join(", ")}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 xl:flex-row xl:items-center xl:gap-x-6">
              <span className="font-semibold">Border Countries: </span>
              <div className="flex flex-wrap gap-x-3 gap-y-3">
                {borderCountriesMapped?.map((item: string) => (
                  <StyledButton key={item} linkTo={`/country/${item}`}>
                    <p className="text-xs">{item}</p>
                  </StyledButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleCountryView;
