import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

//import FaceMarc from "assets/img/faces/marc.jpg";
//import FaceChristian from "assets/img/faces/christian.jpg";
//import FaceKendall from "assets/img/faces/kendall.jpg";
//import FaceAvatar from "assets/img/faces/avatar.jpg";
//import FaceRajiv from "assets/img/faces/rajiv3.png";
import FaceMikael from "assets/img/faces/mikael_backlund2.jpg";
import FaceMathias from "assets/img/faces/mathias.jpg";
//import FacePremthip from "assets/img/faces/premthip.jpeg";

const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Meet the team</h2>
          <h5 className={classes.description}>
            We are a small but a growing team of talented people from across the world trying to change the information paradigm.
          </h5>
          {/* <div>
            <Button
              color="danger"
              size="lg"
              // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
              href="https://www.youtube.com/watch?v=3hIL55-fv1Y&authuser=0"
              target="_blank"
            >
              <i className="fas fa-play" />
              Watch video
            </Button>
          </div> */}
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceMikael}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Mikael Backlund</h4>
              <h6 className={classes.textMuted}>CEO / CTO / Co-Founder</h6>
              <p className={classes.cardDescription}>
                An avid runner who considers graphs and Python to be the tech stack for all problems. As an Architect-in-Chief he oversees the entire tech stack that goes into the product and makes sure the entire platform and it{"'"}s architecture are upto speed. By solving problems he claims to fulfill his Ikigai on a daily basis. 
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="https://www.linkedin.com/in/mikael-backlund-76b6013/" justIcon simple color="linkedin">
                <i className="fab fa-linkedin-in" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceMathias}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Mathias Torp</h4>
              <h6 className={classes.textMuted}>Software engineer / Dev-Ops</h6>
              <p className={classes.cardDescription}>
                {/* Innovation engineer with a special interest in communication. On a mission to create an equivalent to talking for visual communication. */}
                A tech nerd who has lots of ideas on what tech goes into our product, he comes with an inquisitive mindset to question everything. Sometimes gets frustrated when things don{"'"}t go according to plan, he envisions himself to be in the forefront of product innovation.
              </p>
            </CardBody>
            {/* <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
