import React from "react";
import ServicePage from "../../components/ServicePage";
import healthcaremarketingdata from "../../data/healthcaremarketingdata";

const HealthcareMarketing = () => {
  return <ServicePage {...healthcaremarketingdata} />;
};

export default HealthcareMarketing;