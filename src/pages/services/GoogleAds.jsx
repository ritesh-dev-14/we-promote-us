import React from "react";
import ServicePage from "../../components/ServicePage";
import googleadsdata from "../../data/googleadsdata";

const GoogleAds = () => {
  return <ServicePage {...googleadsdata} />;
};

export default GoogleAds;