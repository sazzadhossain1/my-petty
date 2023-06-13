import React from "react";
import "./ServiceDetails.css";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const getServiceDataById = useLoaderData();
  console.log(getServiceDataById);
  const {
    img2,
    descriptionImg,
    boardingParagraph,
    bording,
    counseling,
    description2,
    description3,
    description4,
    description5,
    food,
    habilitation,
    provide,
  } = getServiceDataById;

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
      <div className="sectionAndAside-parent container">
        <section className="left-site-section">
          <img className="highlight-photo" src={img2} alt="" />
          <h2>{provide}</h2>
          <p>{description2}</p>
          <img src={descriptionImg} alt="" />
          <h1>{bording}</h1>
          <p>{description3}</p>
          <ul>
            <p>{description4}</p>
            <li>{counseling}</li>
            <li>{habilitation}</li>
            <li>{food}</li>
          </ul>
          <p>{description5}</p>
        </section>
        <aside className="right-site-section">
          <div>
            <h2>Search</h2>
            <div></div>
            <div></div>
            <input type="text" placeholder="Search Keyword" />
          </div>
          <div>
            <h2>Categories</h2>
            <div></div>
            <div></div>
            <Link>Pet Grooming</Link>
            <br />
            <Link>Pet Food Provider</Link>
            <br />
            <Link>Veterinary Service</Link>
            <br />
            <Link>Healthy Meals</Link>
            <br />
            <Link>Healthy Pet Food</Link>
            <br />
            <Link>Pet Care</Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ServiceDetails;
