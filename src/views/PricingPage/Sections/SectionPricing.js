import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.js";

import {Link} from 'react-scroll'

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <div className={classes.pricingSection}>
      <GridContainer>
        <GridItem
          md={6}
          sm={6}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          {/* <NavPills
            alignCenter
            color="rose"
            tabs={[
              {
                tabButton: "monthly"
              },
              {
                tabButton: "yearly"
              }
            ]}
          /> */}
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={6} sm={6}>
          <Card plain pricing>
            <CardBody pricing>
              <h5
                className={classNames(classes.cardCategory, classes.textInfo)}
              >
                Basic
              </h5>
              <h1 className={classes.cardTitle}>
                Price upon request
              </h1>
              <ul>
                <li>
                  Unlimited access to the knowledge base
                </li>
                <li>
                  Save and retrieve your perspectives
                </li>
                <li>
                  License issued to you personally
                </li>
              </ul>
              <Button color="rose" round>
                <Link activeClass="active" to="my_ref" spy={true} smooth={true}>Get started</Link>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={6} sm={6}>
          <Card raised pricing color="rose">
            <CardBody pricing>
              <h5 className={classes.cardCategory}>Enterprise</h5>
              <h1 className={classes.cardTitleWhite}>
                Price upon request
              </h1>
              <ul>
                <li>
                  Lifetime license with 12 months of free upgrades
                </li>
                <li>
                  Add custom data to the knowledge base
                </li>
                <li>
                  Flexible and transferable licenses for your team
                </li>
                <li>
                  License issued to your company
                </li>
              </ul>
              <Button  color="white" round>
                <Link activeClass="active" to="my_ref" spy={true} smooth={true}>Get started</Link>
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
