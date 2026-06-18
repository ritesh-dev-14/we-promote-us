import React from "react";
import ServicePage from "../../components/ServicePage";
import restaurantseoagencydata from "../../data/restaurantseoagencydata";

const RestaurantSeo = () => {
  return <ServicePage {...restaurantseoagencydata} />;
};

export default RestaurantSeo;