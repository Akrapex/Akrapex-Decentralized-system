import { Route, Routes } from "react-router-dom";
import InvestInRealEstate from "./Components/InvestInRealEstate";
import Footer from "./Components/Footer";
import NavBar from "./Components/Layouts/NavBar";
import MarketPlace from "./Pages/MarketPlace";
import CommunityHub from "./Pages/CommunityHub";

const App = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<InvestInRealEstate />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/communityhub" element={<CommunityHub/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
