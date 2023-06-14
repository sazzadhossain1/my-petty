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
    <div className="">
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
      {/* <div className="sectionAndAside-parent container">
        <div className="left-site-section">
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
        </div>
        <div className="right-site-nav">
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
        </div>
      </div> */}

      <div className="child-parent-grid-div ">
        <div className="left-site-div">
          <img className="highlight-photo" src={img2} alt="" />
          <h2 className="provide">{provide}</h2>
          <p className="description">{description2}</p>
          <p className="description">{description3}</p>
          <p className="description">{description4}</p>
          <div className="second-grid-div">
            <img src={descriptionImg} alt="" />
            <ul>
              <h1 className="boarding">{bording}</h1>
              <p className="description">{description4}</p>

              <p className="logo-parent">
                <img
                  className="tickMark-logo-img"
                  src="https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ="
                  alt=""
                />
                <li className="li-text">{counseling}</li>
              </p>
              <p className="logo-parent">
                <img
                  className="tickMark-logo-img"
                  src="https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ="
                  alt=""
                />

                <li className="li-text">{habilitation}</li>
              </p>

              <p className="logo-parent">
                <img
                  className="tickMark-logo-img"
                  src="https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ="
                  alt=""
                />
                <li className="li-text">{food}</li>
              </p>
            </ul>
          </div>
          <p className="description">{description5}</p>
        </div>
        <div className="right-site-nav">
          <div className="search-div">
            <h2 className="search">Search</h2>
            <div className="blank-div-parent">
              <div className="blank-red"></div>
              <div className="blank-blue"></div>
            </div>
            <input
              className="input-field"
              type="text"
              placeholder="Search Keyword"
            />
          </div>
          <div>
            <h2 className="categories">Categories</h2>
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
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
