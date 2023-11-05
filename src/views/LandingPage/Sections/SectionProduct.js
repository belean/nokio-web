import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { BubbleChart, Share, Web } from '@material-ui/icons';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";


const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Nokio</h2>
          <h5 className={classes.description}>
            We started to develop our own application after the fact that Bokio
            very shamelessly increased the price of Bokio free, which they promised
            would be free forever. To me, with my 2 sleeping businesses SEK 349 per
            month and company is too much.

            Nokio will not be the most feature rich of all book keeping applications
            and richer businesses would be better off using a paid subscription.
            However, Nokio will always be free since it is Open Source and with a
            GPL3 license. Hence, anyone can download the code and run it for
            themselves for free but if any additions to the code is done it will belong
            to the OpenSource community and be shared by all.

            Nokio is born in the cloud and what it lacks in features it makes up by
            being heavily tested and documented and therefore avoid unnecessary bugs.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Keep your financial books in shape for free"
              //description="Find information that you didn't knew existed. No more anticipating what others have written, to find what you are looking for"
              description="Keep your financial books in shape"
              icon={Web}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Create or import your transactions"
              description="Create or import your transactions"
              
              icon={Share}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Thoroughly tested and forever scalable"
              //description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              description="Thoroughly tested and forever scalable"
              icon={BubbleChart}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
