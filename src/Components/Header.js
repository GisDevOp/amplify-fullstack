import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card
} from "@aws-amplify/ui-react"
import './Layout.css';
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

// class  Header extends Component () {
//     showAlert = () => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, Log Out!'
//           }).then((result) => {
//             if (result.isConfirmed) {
//               Swal.fire(
//                 'Thank You!',
//                 'Login Again if you want to continue.',
               
//               )
//               window.location.reload();
//             }
//           })
//     }

//     render(){
//     return (
    
//             <header className='navbar bg-light fixed-top'>
//             <div className='container d-flex'>
//             <div className="">
//            <h3 className="text-dart ">BushFire X</h3>
//              </div>
//            {/* <button onClick={this.showAlert}  >Log Out</button> */}
//            <Button onClick={signOut} className="btn btn-primary btn-sm justify-content-md-end"> Sign Out </Button>
//             </div>
            
//             </header>
    
//     );
//     }
// }
function Header({signOut}) {
  return (
      
          
    <header className='navbar navbar-expand-md navbar-dark fixed-top bg-dark' style={{height:"6vh"}}>
                 <div className='container d-flex'>
                 <div className="">
               <h3 className="text-white px-6 mr-6 "> <Link  className="nav-link" to="/">BushFire X</Link></h3>
                </div>
                {/* <button onClick={this.showAlert}  >Log Out</button> */}
                <div className="collapse navbar-collapse justify-content-center"  id="navbarNav">
                <ul  className="nav text-white ">
                  <li className="nav-item active">
                    <Link  className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link  className="nav-link" to="/blogs">Map</Link>
                  </li>
                  <li className="nav-item">
                    <Link  className="nav-link" to="/Training">Training Hub</Link>
                  </li>
                </ul>
                   </div>
                <Button onClick={signOut} className="btn text-white btn-primary justify-content-md-end"> Sign Out </Button>
                </div>
                
                </header>
       
      
      
  );
}
export default withAuthenticator(Header);
