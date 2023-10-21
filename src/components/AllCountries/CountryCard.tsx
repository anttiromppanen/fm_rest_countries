import { Link } from "react-router-dom";

interface Country {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
}

function CountryCard({ name, flag, population, region, capital }: Country) {
  return (
    <Link
      to={`/country/${name}`}
      data-testid="country-card-link"
      className="
      user-shadow relative mx-auto w-[264px] rounded-lg bg-userLightSecondaryBg
      dark:bg-userDarkSecondaryBg dark:text-userDarkPrimaryText"
    >
      <img
        src={flag}
        alt={name}
        className="h-40 w-full rounded-t-lg shadow-md"
      />
      <div className="flex flex-col gap-y-1 px-6 pb-11 pt-7">
        <h2 className="mb-4 text-xl font-extrabold">{name}</h2>
        <p>
          <span className="font-semibold">Population: </span>
          {population.toLocaleString("en-US")}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
