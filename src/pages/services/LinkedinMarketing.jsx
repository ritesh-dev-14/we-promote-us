import React from "react";
import ServicePage from "../../components/ServicePage";
import linkedinmarketingdata from "../../data/linkedinmarketingdata";

const LinkedinMarketing = () => {
  return <ServicePage {...linkedinmarketingdata} />;
};

export default LinkedinMarketing;