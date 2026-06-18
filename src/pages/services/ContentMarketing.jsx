import React from "react";
import ServicePage from "../../components/ServicePage";
import contentmarketingdata from "../../data/contentmarketingdata";

const ContentMarketing = () => {
  return <ServicePage {...contentmarketingdata} />;
};

export default ContentMarketing;