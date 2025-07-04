import { Route, Routes } from "react-router-dom";
import InvestInRealEstate from "./Components/InvestInRealEstate";
import Footer from "./Components/Footer";
import NavBar from "./Components/Layouts/NavBar";
import MarketPlace from "./Pages/MarketPlace";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<InvestInRealEstate />} />
          <Route path="/marketPlace" element={<MarketPlace />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
