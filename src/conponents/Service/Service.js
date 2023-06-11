import React from "react";
import "./Service.css";
import { useLoaderData } from "react-router-dom";
import ServiceHeader from "../ServiceHeader/ServiceHeader";

const Service = () => {
  const serviceGetApi = useLoaderData();
  // console.log(serviceGetApi);
  return (
    <div>
      <h1>Service</h1>

      <div className="service-grid-div">
        {serviceGetApi.map((data) => (
          <ServiceHeader data={data} key={data.id}></ServiceHeader>
        ))}
      </div>
    </div>
  );
};

export default Service;
