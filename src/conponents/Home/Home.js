import React, { useEffect, useState } from "react";
import "./Home.css";
import AboutBanner from "../AboutBanner/AboutBanner";
import HomeService from "../HomeService/HomeService";
import { useLoaderData } from "react-router-dom";
import Acceptment from "../Acceptment/Acceptment";
import Exprt from "../Exprt/Exprt";

const Home = () => {
  const getApi = useLoaderData();
  //   console.log(getApi);

  const [exprtData, setExprtData] = useState([]);
  useEffect(() => {
    fetch("https://my-pettu-server.vercel.app/exprtData/")
      .then((res) => res.json())
      .then((data) => setExprtData(data));
  }, []);
  return (
    <div>
      <div className="home-parent-div">
        {/* <Header></Header> */}
        <div className="home-banner-text">
          <h4 className="enjoy">We Enjoy Providing</h4>
          <h1 className="home-heading">
            We're Ready to <br /> Keep Your pet
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            pariatur aliquam, <br /> hic necessitatibus obcaecati quibusdam
            quisquam dolores debitis ab eligendi! <br /> Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Suscipit pariatur aliquam, <br />{" "}
            hic necessitatibus obcaecati quibusdam quisquam dolores debitis ab
            eligendi!
          </p>
          <button className="contact-btn">Contact Now</button>
        </div>
      </div>
      <AboutBanner></AboutBanner>
      <div>
        <h3 className="service-title">Service</h3>
        <h2 className="service-heading">We Provide Services</h2>
        <div className="map-div container">
          {getApi.map((data) => (
            <HomeService data={data} key={data.id}></HomeService>
          ))}
        </div>
      </div>
      <Acceptment></Acceptment>

      <div>
        <h3 className="service-title">Exprt Team</h3>
        <h1 className="service-heading">Meet the Exprt Team</h1>

        <div className="exprt-grid-div container">
          {exprtData.map((exData) => (
            <Exprt key={exData.id} exData={exData}></Exprt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
