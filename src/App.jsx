import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country/:name/" element={<CountryDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
