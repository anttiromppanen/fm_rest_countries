function Loader() {
  return (
    <div
      className="
        fixed left-0 top-80 flex w-full flex-col items-center justify-center text-lg dark:text-white"
    >
      <svg
        className="mr-3 h-5 w-5 animate-spin text-black dark:text-white"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8"
        />
      </svg>
      Loading...
    </div>
  );
}

export default Loader;
