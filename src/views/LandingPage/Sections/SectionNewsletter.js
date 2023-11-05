// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Spacer from "components/Layout/Spacer.js";
import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const useStyles = makeStyles(workStyle);

export default function SectionWork() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const url = 'https://sciple.us6.list-manage.com/subscribe/post?u=2dfbfb87220f85666f3d11d81&id=4bad2ba06e'
  const classes = useStyles();
  return (
    <div className={classes.section} id="contact-us">
      <GridContainer justify="center">
        <GridItem cs={12} sm={8} md={8}>
          <h2 className={classes.title}>Newsletter</h2>
          <h4 className={classes.description}>
            Want to be first in line? Sign up for our newsletter to get the latest news.
          </h4>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <form onSubmit={(evt) => {
                evt.preventDefault();
                subscribe({ EMAIL: email, NAME: name })
              }}>
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
                  <GridItem
                    xs={12}
                    sm={4}
                    md={4}
                    className={classes.mrAuto + " " + classes.mlAuto}
                    style={{ display: 'flex' }}
                  >

                    <Spacer />
                    <Button type="submit" color="primary">Subscribe</Button>
                    <Spacer />
                  </GridItem>
                </GridContainer>
                <div style={{ display: 'flex' }}>
                  <Spacer />
                  {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                  {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                  {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                  <Spacer />

                </div>
              </form>
            )}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
