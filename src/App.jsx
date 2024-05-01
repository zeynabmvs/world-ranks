import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { CountriesContextProvider } from "./store";

function App() {
  return (
    <>
      <CountriesContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/country/:code/" element={<CountryDetails />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </CountriesContextProvider>
    </>
  );
}

export default App;
