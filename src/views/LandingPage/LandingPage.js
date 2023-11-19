/*eslint-disable*/ import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import image from "assets/img/bg7.jpg";
import beLeanLogo from "assets/img/faces/belean_Logotype.png";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";
import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.js";
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.js";
import SectionInterested from "views/BlogPostsPage/Sections/SectionInterested.js";
import SectionFeatures from "views/PricingPage/Sections/SectionFeatures.js";
import SectionPricing from "views/PricingPage/Sections/SectionPricing.js";
//import SectionNewsletter from "./Sections/SectionNewsletter.js";
// Sections for this page
import SectionProduct from "./Sections/SectionProduct.js";
import SectionTestimonials from "./Sections/SectionTestimonials.js";
import SectionWork from "./Sections/SectionWork.js";




const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <div>
      <Header
        color="transparent"
        brand={<img src={beLeanLogo} alt="beLeanLogo-pic" className={classes.img} />}
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
        {...rest}
      />

      <Parallax image={image} filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>{`Nokio - for easy book keeping`}</h1>
              <h4>
                Nokio we offer a book keeping application for small businesses.
                {/* Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression. */}
              </h4>
              <br />
              <Button
                color="info"
                size="lg"
                href="https://maps.sciple.ai"
                target="_blank"
              >
                <i className="fas fa-play" />
                Sign up
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          {/* <SectionInterested />
          <SectionPricing /> */}
          <SectionTeam />
          <SectionServices />
          {/* <SectionTestimonials /> */}
          {/* <SectionNewsletter /> */}
          <div id="my_ref"></div>
          <SectionWork />
        </div>
      </div>
      <Footer />
    </div>
  );
}
