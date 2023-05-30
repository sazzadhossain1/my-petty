import React from "react";
import "./About.css";
import { useLoaderData } from "react-router-dom";

const About = () => {
  const api = useLoaderData();
  console.log(api);
  return (
    <div>
      <h1>This is about</h1>
    </div>
  );
};

export default About;
