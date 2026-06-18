import React from "react";
import ServicePage from "../../components/ServicePage";
import amazonmarketingdata from "../../data/amazonmarketingdata";

const AmazonMarketing = () => {
  return <ServicePage {...amazonmarketingdata} />;
};

export default AmazonMarketing;