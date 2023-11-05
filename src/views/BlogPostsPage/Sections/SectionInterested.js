import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
//import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
//import Info from "components/Typography/Info.js";
//import Success from "components/Typography/Success.js";
//import Danger from "components/Typography/Danger.js";

// import bg5 from "assets/img/bg5.jpg";
// import blog5 from "assets/img/examples/blog5.jpg";
// import blog6 from "assets/img/examples/blog6.jpg";
import article2 from "assets/img/article2.jpeg";
import expand from "assets/img/expand.jpeg";
import search from "assets/img/search.jpeg";

import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";

const useStyles = makeStyles(sectionInterestedStyle);

export default function SectionInterested() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h3 className={classes.title + " " + classes.textCenter}>
        Features
      </h3>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader image plain>
              <a href="/">
                <img src={search} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + search + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                <a href="/">
                  Search for scientific terms with powerful visualisation
                </a>
              </h4>
              <p className={classes.description}>
                Search our database for scientific terms and find relevant knowledge with our powerful filter to get what is relevant to you. Quickly build a perspective of your field or research area by dragging the result and its corresponding type.
                {/* <a href="/"> Read More </a> */}
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="/">
                <img src={expand} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + expand + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                <a href="/">
                  Navigate and traverse the knowledge base
                </a>
              </h4>
              <p className={classes.description}>
                Everything in the knowledge base is connected enabling you to traverse the relationships of chosen entities and making it easier to find previously unknown relationships.
                {/* <a href="/"> Read More </a> */}
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="/">
                <img src={article2} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + article2 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                <a href="/">
                  Read scientific articles while you explore
                </a>
              </h4>
              <p className={classes.description}>
                Explore the scientific world simultaneously with a text view highlighting the entities in the text. The best of both worlds!  
                {/* <a href="/"> Read More </a> */}
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
