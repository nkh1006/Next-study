import Link from "next/link";
import Navbar from "../components/Navbar";

const index = () => {
  return (
    <>
      <header className="header">
        <div className="brand_box">
          <Navbar />
        </div>
        <div className="text_box">
          <h1 className="heading_primary">
            <span className="heading_primary_main">
              Welcome to the world of ReactJS
            </span>
            <span>Love with JavaScript</span>
          </h1>
          <a href="#" className="btn btn_white btn_animated">
            Thapa Technical
          </a>
        </div>
      </header>
    </>
  );
};

export default index;