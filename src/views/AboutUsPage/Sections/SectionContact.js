import React, {useState} from "react";
import {API} from 'aws-amplify';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";

const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialitySelect, setSpecialitySelect] = useState("4");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    alert ("The message was sent!");
    event.preventDefault();
    convertSpecialityValues(); //We need a text string instead of a number

    postData(); //Send to AWS Lambda 

    // reset values
    setName("");
    setEmail("");
    setSpecialitySelect("4"); 
  }

  function convertSpecialityValues() {
    const label = [
      "I'm a Frontend developer",
      "I'm a Cloud developer",
      "I'm a Marketer",
      "I'm a biotech SaaS Sales rep",
      "I'm a Hero",
    ]
    setMessage(() => ( //Mikael: Todo not working!
      label[parseInt(specialitySelect)]
    ));
    console.log(specialitySelect+": "+ message)
  }

  async function postData() {
    //Take input from form data and package and send it to a AWS Lambda Rest endpoint
    // AWS Credentials 
    const apiName = "apiSendEmail2";
    const path = "/sendemail-prod";
    const data = await API.post(
      apiName,
      path, 
      { 
        body: {
          reciever: "info@sciple.ai",
          email: email,
          name: name,
          message: specialitySelect,
        }
      },
    );
    // Error handling
    console.log("Data: " + data)
  }

  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classNames(classes.title, classes.textCenter)}>
            Want to work with us?
          </h2>
          <h4 className={classNames(classes.description, classes.textCenter)}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will get back to you in a couple of hours.
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <CustomInput
                  labelText="Your name"
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
              <GridItem md={4} sm={4}>
                <CustomInput
                  labelText="Your email"
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
              <GridItem md={4} sm={4}>
                <FormControl
                  fullWidth
                  className={
                    classes.selectFormControl +
                    " " +
                    classes.selectUnderlineRoot
                  }
                >
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    name= "specialitySelect"
                    id= "speciality-select"
                    inputProps={{
                      type: "specialitySelect",
                      value: specialitySelect,
                      onChange: ({ target: { value } }) => setSpecialitySelect(value)
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem
                      }}
                    >
                      Speciality
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="0"
                    >
                      I{"'"}m a Frontend developer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="1"
                    >
                      I{"'"}m a Cloud developer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="2"
                    >
                      I{"'"}m a Marketer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="3"
                    >
                      I{"'"}m a biotech SaaS Sales rep
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected
                      }}
                      value="4"
                    >
                      I{"'"}m a Hero
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem
                md={4}
                sm={4}
                className={classNames(
                  classes.mrAuto,
                  classes.mlAuto,
                  classes.textCenter
                )}
              >
                <Button type="submit" color="primary" round>
                  Let{"'"}s talk
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
