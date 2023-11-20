import logo from '../logo.svg';
import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import CalComp from './CalciteComp';
import Footer from './Footer';
//import MapComponent from './Components/TestMap';
import Map from './Map';

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card
} from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css';

function Home({signOut}) {
  return (

  <View >
      <Card>
      
          <div role="main" className='position-relative mt-2 container-fluid'>
          <CalComp className='position-relative mt-2 container-fluid' ></CalComp>
          <Map></Map>
          </div>
         
      </Card>
  </View>


  );
  function resizeDiv() {
    var div = document.getElementById('mapDiv');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    // Adjust the size of the div (you can customize this based on your requirements)
    div.style.height = (windowHeight * 0.8) + 'px';
    div.style.width = (windowWidth * 0.8) + 'px';
}


// Initial call to set the initial size
resizeDiv();

// Attach the resizeDiv function to the window resize event
window.addEventListener('resize', resizeDiv);

}

export default withAuthenticator(Home) ;
