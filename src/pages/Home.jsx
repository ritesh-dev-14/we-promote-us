import BrandsTrust from "../sections/homePage/BrandsTrust";
import Contact from "../sections/homePage/Contact";
import FAQsection from "../sections/homePage/FAQsection";
import HomeHeroSection from "../sections/homePage/HomeHeroSection";
import JourneyProcess from "../sections/homePage/JourneySection";
import OurPartnerShipSection from "../sections/homePage/OurPartnerShipSection";
import ProcessSection from "../sections/homePage/ProcessSection";
import ResultsSection from "../sections/homePage/ResultsSection";
import ServiceSection from "../sections/homePage/ServiceSection";
import StoriesSection from "../sections/homePage/StoriesSection";
import Testimonials from "../sections/homePage/Testimonials";
import WhoWeAreSection from "../sections/homePage/WhoWeAreSection";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <WhoWeAreSection />
      <OurPartnerShipSection />
      <ResultsSection />
      <ServiceSection />
      <JourneyProcess />
      <ProcessSection />
      <StoriesSection />
      <BrandsTrust />
      <Testimonials />
      <Contact />
      <FAQsection />
    </>
  );
};

export default Home;
