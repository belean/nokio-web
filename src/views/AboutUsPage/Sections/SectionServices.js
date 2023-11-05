import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import {Build, AspectRatio, BatteryFull, BusinessCenter} from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We build awesome products</h2>
          <h5 className={classes.description}>
            Our aim is to build customer centric user friendly products and always keeping the end user in mind.
            {/*We are a Lean startup built on agile frameworks. We value working code very high and strive to build products solving serious needs targeted towards knowledge heavy industries.*/}
            {/* This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information. */}
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={3} sm={3} xs={6}>
          <InfoArea
            title="Scalable"
            description={
              <span>
                <p>
                  From the ground up we build products that can (and will) scale horizontally until the end. This gives us the ability to put the IT infrastructure exactly where it is needed.
                </p>
              </span>
            }
            icon={AspectRatio}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={3} sm={3} xs={6}>
          <InfoArea
            title="Functional"
            description={
              <span>
                <p>
                  We build products to solve real problems and when there is no reasonable way around it. The ideas are broken down into actionable tasks to be included in future releases.
                </p>
              </span>
            }
            icon={Build}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={3} sm={3} xs={6}>
          <InfoArea
            title="Performant"
            description={
              <span>
                <p>
                 Performance is at the core in whatever we design, be it receiving an update or a moonshot project. We will use the latest-in-tech to get the best performing product out in the market.
                </p>
              </span>
            }
            icon={BatteryFull}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={3} sm={3} xs={6}>
          <InfoArea
            title="Stable"
            description={
              <span>
                <p>
                  Stability is something in the core of our DNA. A stable and reliable product is what you will always expect from us!
                </p>
              </span>
            }
            icon={BusinessCenter}
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
