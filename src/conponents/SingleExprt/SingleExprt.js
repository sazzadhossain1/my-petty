import "./SingleExprt.css";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Headers/Header";

const SingleExprt = () => {
  const getSingleExprtData = useLoaderData();
  console.log(getSingleExprtData);

  return (
    <div>
      <div className="single-exprt-parent-div">
        <Header></Header>
        <h1>This is single exprt</h1>
      </div>
      <img src={getSingleExprtData.img} alt="" />
      <Link to="/">
        <button>Back to HOme</button>
      </Link>
    </div>
  );
};

export default SingleExprt;
