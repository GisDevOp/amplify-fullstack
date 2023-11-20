import { useAuthenticator } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";

const Home = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
  

 
    return (
    <>
    {/* <div role="main" className='mt-2 container-fluid' >
    <div className="card bg-dark text-white py-6">
    <img className="card-img" src="https://bac-kgari.org/media/wmxclm20/dji_0013.jpg?anchor=center&mode=crop&width=1500&height=1100&rnd=132949600980200000&format=webp" alt="Card image"></img>
    <div className="card-img-overlay">
        <h1 className="card-title">Cover your page.</h1>
        <p className="card-text">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
        </p>
      </div>
      </div>
      </div> */}
{/* <div id="cover" className="container "> */}
<div className="card bg-dark text-white">
<div  className="" style={{height:'90vh', width:'auto',}}>
<img className="img-fluid card-img mt-2 py-1 " src="https://bac-kgari.org/media/wmxclm20/dji_0013.jpg?anchor=center&mode=crop&width=1500&height=1100&rnd=132949600980200000&format=webp" alt="Card image" style={{height:'90vh', width:'100vw',}} ></img>
<div className="card-img-overlay d-flex align-items-center justify-content-center mt-4 py-2 ">
<div className="jumbotron  justify-content-center ">
  <h1 className="display-4 text-dark">Hello,   {user.username}!</h1>
  <p className="lead text-dark ">Welcome to the BushFireX Platform, </p>
  <hr className="my-4"></hr>
  <p className="text-dark " >Use our <strong><Link to="/blogs">Map</Link></strong> tool for your planning and management and <strong><Link  to="/Training">Training Hub</Link></strong> to get more insights!!</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
</div>

</div>
</div>
    </>
    )
    
  };
  
  export default Home;