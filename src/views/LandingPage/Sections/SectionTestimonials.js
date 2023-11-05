// react component for creating beautiful carousel
// @material-ui/core components
//import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cardProfile1Square from "assets/img/faces/olle.jpeg";
import testimonialsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Muted from "components/Typography/Muted.js";
import React from "react";
import antler_logo from "assets/img/assets-for-demo/Antler.png";
import connect_sverige_logo from "assets/img/assets-for-demo/connect_sverige.jpg";
import founders_loft_logo from "assets/img/assets-for-demo/founders_loft.png";

const useStyles = makeStyles(testimonialsStyle);

export default function SectionTestimonials({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.testimonials}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2 className={classes.title}>What our customers say</h2>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card testimonial plain>
              <h4 className={classes.cardDescription}>
                {'"'}Sciple maps lets me both quickly get an overview of a new domain,
                <br />
                and also dive deeper into the more nuanced topics within it{'"'}
              </h4>
              <CardAvatar testimonial plain>
                <a href="/" onClick={e => e.preventDefault()}>
                  <img src={cardProfile1Square} alt="..." />
                </a>
              </CardAvatar>
              <CardBody plain>
                <h4 className={classes.title}>Olle Nordesjö</h4>
                <Muted>
                  <h6>Data scientist @ Oxford Nanopore Technologies Ltd</h6>
                </Muted>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }>
            <h2 className={classes.title}>Proudly supported by</h2>
          </GridItem>
          <GridItem md={4} sm={12} align="center">
            <Card testimonial plain>
              <CardAvatar blog plain>
                <a href="#pablo">
                  <img src={antler_logo} alt="profile-pic" className={classes.img} />
                </a>
              </CardAvatar>
            </Card>
          </GridItem>
          <GridItem md={4} sm={12}  style={{ display: "flex", alignItems: "center" }}>
            <Card testimonial plain>
              <CardAvatar blog plain>
                <a href="#pablo">
                  <img src={connect_sverige_logo} alt="profile-pic" className={classes.img} width="300"/>
                </a>
              </CardAvatar>
            </Card>
          </GridItem>
          <GridItem md={4} sm={12}>
            <Card plain>
              <CardAvatar plain>
                <a href="#pablo">
                  <img src={founders_loft_logo} alt="profile-pic" className={classes.img} width="200"/>
                </a>
              </CardAvatar>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
