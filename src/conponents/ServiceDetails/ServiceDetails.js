import React from "react";
import "./ServiceDetails.css";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const getServiceDataById = useLoaderData();
  console.log(getServiceDataById);
  return (
    <div>
      <div className="serviceDetails-parent-div"></div>
      <h1>This is service Details</h1>
    </div>
  );
};

export default ServiceDetails;
