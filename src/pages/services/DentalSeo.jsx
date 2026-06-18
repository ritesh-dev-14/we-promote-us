import React from "react";
import ServicePage from "../../components/ServicePage";
import dentalseodata from "../../data/dentalseodata";

const DentalSeo = () => {
  return <ServicePage {...dentalseodata} />;
};

export default DentalSeo;