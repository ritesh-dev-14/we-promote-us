import React from "react";
import ServicePage from "../../components/ServicePage";
import skincaremarketingdata from "../../data/skincaremarketingdata";

const Skincare = () => {
  return <ServicePage {...skincaremarketingdata} />;
};

export default Skincare;