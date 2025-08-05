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

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<InvestInRealEstate />} />
          <Route path="/firstbridge" element={<FirstBridge />} />
          <Route path="/secondbridge" element={<SecondBridge />} />
          <Route path="/thirdbridge" element={<ThirdBridge />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/communityhub" element={<CommunityHub />} />
          <Route path="/stakeholderspage" element={<StakeholdersPage />} />
          <Route path="/serviceprofessional" element={<ServiceProfessional />} />
          <Route path="/availablecourses" element={<AvailableCourses />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
