import { Route, Routes } from "react-router-dom";
import Home from "./components/AllCountries/AllCountries";
import Navbar from "./components/Navbar/Navbar";
import SingleCountryView from "./components/SingleCountryView/SingleCountryView";

function App() {
  return (
    <main className="mx-auto max-w-7xl px-4 xl:px-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:country" element={<SingleCountryView />} />
      </Routes>
    </main>
  );
}

export default App;
