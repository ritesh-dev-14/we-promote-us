import React from "react";
import ServicePage from "../../components/ServicePage";
import hotelmarketing from "../../data/hotelmarketing";

const HotelMarketing = () => {
  return <ServicePage {...hotelmarketing} />;
};

export default HotelMarketing;