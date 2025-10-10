import { Route, Routes } from "react-router-dom";
import InvestInRealEstate from "./Components/InvestInRealEstate";
import Footer from "./Components/Footer";
import NavBar from "./Components/Layouts/NavBar";
import MarketPlace from "./Pages/MarketPlace";
import CommunityHub from "./Pages/CommunityHub";
import FirstBridge from "./Pages/FirstBridge";
import SecondBridge from "./Pages/SecondBridge";
import ThirdBridge from "./Pages/ThirdBridge";
import StakeholdersPage from "./Pages/StakeholdersPage";
import AvailableCourses from "./Pages/AvailableCourses";
import ServiceProfessional from "./Pages/ServiceProfessional";
import Index from "./marketplace/index";
import Property from "./marketplace/Property";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<InvestInRealEstate />} />
          <Route path="/firstbridge" element={<FirstBridge />} />
          <Route path="/secondbridge" element={<SecondBridge />} />
          <Route path="/thirdbridge" element={<ThirdBridge />} />
          <Route path="/stakeholderspage" element={<StakeholdersPage />} />
          <Route
            path="/serviceprofessional"
            element={<ServiceProfessional />}
          />
          <Route path="/availablecourses" element={<AvailableCourses />} />
          {/* <Route path="/marketplace" element={<MarketPlace />} /> 09034100644 */}
          <Route path="/communityhub" element={<CommunityHub />} />
        </Route>
        <Route path="/properties">
          <Route index element={<Index />} />
          <Route element={<Property />} path="/properties/search/:id" />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
