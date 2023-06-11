import React from "react";
import "./Service.css";
import { useLoaderData } from "react-router-dom";
import ServiceHeader from "../ServiceHeader/ServiceHeader";

const Service = () => {
  const serviceGetApi = useLoaderData();
  // console.log(serviceGetApi);
  return (
    <div>
      <div className="service-banner-div">
        <h2>Our Services</h2>
      </div>

      <div className="service-grid-div container">
        {serviceGetApi.map((data) => (
          <ServiceHeader data={data} key={data.id}></ServiceHeader>
        ))}
      </div>
    </div>
  );
};

export default Service;
