import React from "react";
import ServicePage from "../../components/ServicePage";
import cmsdata from "../../data/cmsdata";

const CmsDesign = () => {
  return <ServicePage {...cmsdata} />;
};

export default CmsDesign;