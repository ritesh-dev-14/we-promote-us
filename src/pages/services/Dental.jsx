import React from "react";
import ServicePage from "../../components/ServicePage";
import dentalmarketingdata from "../../data/dentalmarketingdata";

const Dental = () => {
  return <ServicePage {...dentalmarketingdata} />;
};

export default Dental;