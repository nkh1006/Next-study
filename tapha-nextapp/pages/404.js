import Link from "next/link";
import Navbar from "../components/Navbar";

const Errorpage = () => {
  return (
    <> 
      <Navbar />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h4>404</h4>
          </div>
          <h2>We are sorry. Page not found !</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link href="/">
            <a>Back To Homepage</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Errorpage;