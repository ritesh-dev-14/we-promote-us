import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import OurTeam from "./pages/about/OurTeam";
import Careers from "./pages/about/Careers";
import Training from "./pages/about/Training";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import UIUX from "./pages/services/UIUX";
import ResponsiveDesign from "./pages/services/ResponsiveDesign";
import GraphicDesign from "./pages/services/GraphicDesign";
import LandingDesign from "./pages/services/LandingDesign";
import CmsDesign from "./pages/services/CmsDesign";
import EcomDesign from "./pages/services/EcomDesign";
import WordpressDesign from "./pages/services/WordpressDesign";
import WebDesign from "./pages/services/WebDesign";
import Website from "./pages/services/Website";
import WordPressMaintainance from "./pages/services/WordPressMaintainance";
import Dental from "./pages/services/Dental";
import Skincare from "./pages/services/Skincare";
import SkinClinicGrowth from "./pages/services/SkinClinicGrowth";
import HotelMarketing from "./pages/services/HotelMarketing";
import HealthcareMarketing from "./pages/services/HealthcareMarketing";
import RealEstateMarketing from "./pages/services/RealEstateMarketing";
import RestaurantSeo from "./pages/services/RestaurantSeo";
import GoogleAds from "./pages/services/GoogleAds";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/training" element={<Training />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/ui-ux" element={<UIUX />} />
        <Route path="/responsive-design" element={<ResponsiveDesign />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/landing-design" element={<LandingDesign />} />
        <Route path="/wordpress-design" element={<WordpressDesign />} />
        <Route path="/cms-design" element={<CmsDesign />} />
        <Route path="/ecom-design" element={<EcomDesign />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/website-optimisation" element={<Website />} />
        <Route path="/wordpress-maintainance" element={<WordPressMaintainance />} />
        <Route path="/dental-marketing" element={<Dental />} />
        <Route path="/skincare-marketing" element={<Skincare />} />
        <Route path="/dental-marketing" element={<Dental />} />
        <Route path="/skin-clinic-growth" element={<SkinClinicGrowth />} />
        <Route path="/hotel-marketing" element={<HotelMarketing />} />
        <Route path="/healthcare-marketing" element={<HealthcareMarketing />} />
        <Route path="/real-estate-marketing" element={<RealEstateMarketing />} />
        <Route path="/restaurant-seo" element={<RestaurantSeo />} />
        <Route path="/google-ads" element={<GoogleAds />} />
      </Route>
    </Routes>
  );
};

export default App;