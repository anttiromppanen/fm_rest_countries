import ThemeToggle from "../ThemeToggle";

function Navbar() {
  return (
    <nav
      className="
      fixed left-0 top-0 z-50 w-full bg-userLightSecondaryBg px-4
      py-9 text-userLightPrimaryText dark:bg-userDarkSecondaryBg dark:text-userDarkPrimaryText/90 md:py-8"
    >
      <div className="mx-auto flex max-w-7xl justify-between">
        <h1 className="font-extrabold">Where in the world?</h1>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
