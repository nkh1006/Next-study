import Head from "next/head";
import Nav from "./Nav";

const Layout = ({children}) => {
  return (
    <>  
      <Nav />
      <div>
        {children}
      </div>
    </>
  );
}
 
export default Layout;