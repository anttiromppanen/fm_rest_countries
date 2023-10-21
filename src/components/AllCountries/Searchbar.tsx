import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";

interface SearchbarProps {
  filter: string;
  setFilter: (filter: string) => void;
}

function Searchbar({ filter, setFilter }: SearchbarProps) {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div
      className={`
      user-shadow flex h-fit w-full max-w-[480px] items-center gap-x-6 rounded-md bg-userLightSecondaryBg 
      px-8 dark:bg-userDarkSecondaryBg dark:text-userDarkPrimaryText ${
        inputFocus && "!px-0"
      }`}
    >
      {!inputFocus && (
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500/80 dark:text-userDarkPrimaryText" />
      )}
      <input
        type="search"
        name=""
        id=""
        placeholder="Search for a country..."
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        value={filter}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFilter(e.target.value);
        }}
        className={`
        w-full px-2 py-4 text-base placeholder:text-gray-400/60 dark:bg-userDarkSecondaryBg
        dark:text-userDarkPrimaryText dark:placeholder:text-userDarkPrimaryText ${
          inputFocus && "px-8"
        }`}
      />
    </div>
  );
}

export default Searchbar;
