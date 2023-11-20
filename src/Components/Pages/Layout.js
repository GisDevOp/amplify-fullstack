import { Outlet, Link } from "react-router-dom";
import Header from "../Header";
import Footer from '../Footer';
import {
    withAuthenticator
  } from "@aws-amplify/ui-react"
  import '@aws-amplify/ui-react/styles.css';
function Layout() {
         
  return (
    <>

        <Header>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
        </Header>
 
      <Outlet />
     
      <Footer></Footer> 
     
    </>
  )
};

export default withAuthenticator(Layout);