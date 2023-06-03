import React from "react";
import "./SingleExprt.css";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Headers/Header";

const SingleExprt = () => {
  const getSingleExprtData = useLoaderData();
  console.log(getSingleExprtData);
  return (
    <div>
      <Header></Header>
      <h1>This is single exprt</h1>
      <Link to="/">
        <button>Back to HOme</button>
      </Link>
    </div>
  );
};

export default SingleExprt;
