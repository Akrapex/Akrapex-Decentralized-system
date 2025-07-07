import { Route, Routes } from "react-router-dom";
import InvestInRealEstate from "./Components/InvestInRealEstate";
import Footer from "./Components/Footer";
import NavBar from "./Components/Layouts/NavBar";
import MarketPlace from "./Pages/MarketPlace";
import CommunityHub from "./Pages/CommunityHub";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<InvestInRealEstate />} />
          <Route path="/marketPlace" element={<MarketPlace />} />
          <Route path="/communityhub" element={<CommunityHub/>}/>
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
