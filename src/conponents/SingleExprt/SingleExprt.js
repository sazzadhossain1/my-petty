import "./SingleExprt.css";
import { Link, useLoaderData } from "react-router-dom";

const SingleExprt = () => {
  const getSingleExprtData = useLoaderData();
  console.log(getSingleExprtData);

  const {
    img,
    personName,
    instructor,
    phone,
    position,
    experienceAboutMe,
    experience,
    email,
    twite,
    instragram,
    indid,
    facebook,
  } = getSingleExprtData;
  return (
    <div>
      <div className="single-exprt-parent-div">
        <h1 className="teamDetails">Team Details</h1>
        <Link className="goService" to="/service">
          <span>Click And Go </span>
          <span className="goService-section">Service Section</span>
        </Link>
      </div>

      <div>
        <img className="singlePhoto" src={img} alt="" />
        <div className="exprtDetails-div">
          <h2 className="personName">{personName}</h2>
          <p className="instructor">{instructor}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleExprt;
