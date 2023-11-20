import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setAssetPath } from "@esri/calcite-components/dist/components";
import 'bootstrap-icons/font/bootstrap-icons.css';
//import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { ThemeProvider  } from '@aws-amplify/ui-react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import config from "./aws-exports";
setAssetPath(window.location.href);
Amplify.configure(config);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      
       <App />
       
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
