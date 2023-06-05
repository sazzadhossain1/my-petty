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

      <div className="exprt-exprience-grid-div">
        <img className="singlePhoto" src={img} alt="" />
        <div className="exprtDetails-div">
          <h2 className="personName">{personName}</h2>
          <p className="instructor">{instructor}</p>
          <div></div>
          <div></div>
          <hr />
          <p className="exprt-exprience-name">
            Position : <span>{position}</span>
          </p>
          <p className="exprt-exprience-name">
            Experience : <span>{experience}</span>
          </p>
          <p className="exprt-exprience-name">
            Email : <span>{email}</span>
          </p>
          <p className="exprt-exprience-name">
            Phone : <span>{phone}</span>
          </p>
          <hr />
          <div className="share-link-div">
            <h3 className="share-link">Share Link :</h3>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="link"
            >
              <img
                className="exprt-logo-png"
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-500x313.png"
                alt=""
              />
            </Link>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="link"
            >
              <img
                className="exprt-logo-png"
                src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=w240-h480-rw"
                alt=""
              />
            </Link>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="link"
            >
              <img
                className="exprt-logo-png"
                src="https://w7.pngwing.com/pngs/708/311/png-transparent-icon-logo-twitter-logo-twitter-logo-blue-social-media-area-thumbnail.png"
                alt=""
              />
            </Link>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="link"
            >
              <img
                className="exprt-logo-png"
                src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=w240-h480-rw"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleExprt;
