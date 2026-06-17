import React from "react";
import ServicePage from "../../components/ServicePage";
import wordpressdata from "../../data/wordpressdata";

const WordpressDesign = () => {
  return <ServicePage {...wordpressdata} />;
};

export default WordpressDesign;