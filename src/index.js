/*!

=========================================================
* Sciple Maps - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports"
import { RecoilRoot } from 'recoil'

Amplify.configure(awsconfig);

import ReactDOM from "react-dom";
import App from 'App';


ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
  ,
  document.getElementById("root")
);
