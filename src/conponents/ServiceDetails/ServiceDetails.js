import React from "react";
import "./ServiceDetails.css";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const getServiceDataById = useLoaderData();
  console.log(getServiceDataById);
  return (
    <div>
      <div className="serviceDetails-parent-div">
        <h2 className="serviceDetails-banner-heading">
          Please Go To{" "}
          <Link className="home" to="/home">
            Home /
          </Link>
          <p>
            And <span className="reload">Reload </span> The Home Page
          </p>
        </h2>
      </div>
      <h1>This is service Details</h1>
    </div>
  );
};

export default ServiceDetails;
