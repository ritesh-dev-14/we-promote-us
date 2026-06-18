import React from "react";
import ServicePage from "../../components/ServicePage";
import lawfirmseodata from "../../data/lawfirmseodata";

const LawFirmSeo = () => {
  return <ServicePage {...lawfirmseodata} />;
};

export default LawFirmSeo;