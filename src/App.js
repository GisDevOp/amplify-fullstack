import logo from './logo.svg';
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card
} from "@aws-amplify/ui-react"
//import MapComponent from './Components/TestMap';
import New from './Components/Layout';
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import '@aws-amplify/ui-react/styles.css';

function App() {
 
  return (

  <>
  <div className=" App">
    <View >
      <Card>
       
      </Card>
    </View>
    <New></New>
    </div>
  </>  

   
   



  );
}

export default withAuthenticator(App) ;
