import React from "react";
import ServicePage from "../../components/ServicePage";
import wordpressmaintainancedata from "../../data/wordpressmaintainancedata";

const WordPressMaintainance = () => {
  return <ServicePage {...wordpressmaintainancedata} />;
};

export default WordPressMaintainance;