// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";
import { API } from 'aws-amplify';
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Spacer from "components/Layout/Spacer.js";
import React, { useState } from "react";


const useStyles = makeStyles(workStyle);


export default function SectionWork() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    alert("The message was sent!");
    event.preventDefault();
    postData();
    setName(""); //reset x3
    setEmail("");
    setMessage("");
  }

  async function postData() {
    //Take input from form data and package and send it to a AWS Lambda Rest endpoint
    // AWS Credentials
    const apiName = "apiSendEmail";
    const path = "/email";
    const data = await API.post(
      apiName,
      path,
      {
        body: {
          email: email,
          name: name,
          message: message,
        }
      },
    );
    // Error handling
    console.log("Data: " + data)
  }

  const classes = useStyles();
  return (
    <div className={classes.section} id="contact-us">
      <GridContainer justify="center">
        <GridItem cs={12} sm={8} md={8}>
          <h2 className={classes.title}>Contact us</h2>
          <h4 className={classes.description}>
            {/* Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further 
            collaboration. We will respond get back to you in a couple of
            hours. */}
            Subscribe to our newsletter or contact us about any further collaboration or any questions. We will respond and get back to you as soon as possible.
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "name",
                    value: name,
                    onChange: ({ target: { value } }) => setName(value)
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    value: email,
                    onChange: ({ target: { value } }) => setEmail(value)
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your nice Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  type: "message",
                  value: message,
                  onChange: ({ target: { value } }) => setMessage(value)
                }}
              />
              <GridItem
                xs={12}
                sm={4}
                md={4}
                className={classes.mrAuto + " " + classes.mlAuto}
                style={{ display: 'flex' }}

              >
                <Spacer />
                <Button type="submit" color="primary">Send Message</Button>
                <Spacer />
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
