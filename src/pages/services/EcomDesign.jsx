import React from "react";
import ServicePage from "../../components/ServicePage";
import ecomdata from "../../data/ecomdata";

const EcomDesign = () => {
  return <ServicePage {...ecomdata} />;
};

export default EcomDesign;