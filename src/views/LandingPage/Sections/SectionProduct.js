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
          <h2 className={classes.title}>Sciple Maps</h2>
          <h5 className={classes.description}>
            Welcome to the world of exploration, but with knowledge this time! Sciple Maps enables you to keep track and stay updated with the most relevant information within your specific domain without a hassle. It takes you through a sea of knowledge showing entities and relationships within your chosen domain letting you visualize what you need and removing the clutter around. Come and enjoy the ride!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Build specialized knowledge graphs"
              //description="Find information that you didn't knew existed. No more anticipating what others have written, to find what you are looking for"
              description="Build a knowledge graph automatically for your domain with documents of your choice. Our state of the art deep learning AI models extract what is important in the text and creates a curated knowledge graph for everyone to use. Build your knowledge, share it with your colleagues, enrich it and store it for later use."
              icon={Web}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Connect the dots"
              description="Every piece of information and knowledge is inherently connected. But they tend to live in silos, thereby losing key relationship information between entities. We make it easier, as we say, by connecting the dots.
              
              With foundation in the articles we process we build a knowledge base where all knowledge is linked to other knowledge in an infinite network of information."
              icon={Share}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Build and share knowledge"
              //description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              description="It's never been easier to get information. Just that it is too much. Sciple Maps will enable sharing knowledge easier whether be it among a group of private individuals or a multinational company with thousands of employees. We've got it covered for you. 
              
              Our customers typically build knowledge and share it with colleagues and others. When finished the work can be saved and retrieved at a later stage."
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
