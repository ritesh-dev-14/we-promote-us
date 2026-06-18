import React from "react";
import ServicePage from "../../components/ServicePage";
import fashionseodata from "../../data/fashionseodata";

const FashionSeo = () => {
  return <ServicePage {...fashionseodata} />;
};

export default FashionSeo;