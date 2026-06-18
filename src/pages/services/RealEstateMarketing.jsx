import React from "react";
import ServicePage from "../../components/ServicePage";
import realestatemarketingdata from "../../data/realestatemarketingdata";

const RealEstateMarketing = () => {
  return <ServicePage {...realestatemarketingdata} />;
};

export default RealEstateMarketing;