/*eslint-disable*/
import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "assets/img/bg7.jpg";
import scipleLogo from "assets/img/logos/sciple_logo.png";
import termsofService from "assets/documents/Terms of Service.pdf";

import { Auth } from 'aws-amplify';
import { useHistory, Redirect } from 'react-router';
import { House } from '@material-ui/icons';

const useStyles = makeStyles(signupPageStyle);

const validEmail = (email) => (/\S+@\S+\.\S+/).test(email)
export default function SignUpPage({ ...rest }) {
  const [error, setError] = useState();
  const [accepted, setChecked] = useState(false)
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verifyUser, setVerifyUser] = useState(false);

  const onClickAccept = () => setChecked(current => !current)

  const classes = useStyles();

  const [invalidEmail, setInvalidEmail] = useState(false)
  useEffect(() => {
    invalidEmail && validEmail(email) && setInvalidEmail(false)
  }, [email, invalidEmail]);

  const onSubmit = async evt => {
    evt.preventDefault()
    if (!validEmail(email)) {
      setInvalidEmail(true)
    } else {
      setVerifyUser(true)
      try {
        await Auth.signUp({
          username: email,
          password,
          attributes: {
            email,
            name,
            profile: company,
          }
        })
      } catch (err) {
        setError(err)
      }
    }
  }

  const history = useHistory()

  const onClickVerify = async () => {
    try {
      await Auth.confirmSignUp(email, verificationCode)
      window.open('http://coder.sciple.ai')
      //history.push('/landing-page')
      // return <Redirect to='htttp://coder.sciple.ai' />
    } catch (err) {
      setError(err)
    }
  }

  const infoFilledIn = name && email && company && password
  const disabled = !(accepted && infoFilledIn)
  const [resend, setResend] = useState(false);
  const onClickResend = async (evt) => {
    evt.preventDefault()
    try {
      await Auth.resendSignUp(email)
      setResend(true)
    } catch (err) {
      setError(err)
    }
  }

  const onClickRetry = () => {
    setVerifyUser(false)
    setError(null)
  }

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand={<img src={scipleLogo} alt="Sciple-pic" className={classes.img} />}
        links={<HeaderLinks dropdownHoverColor="rose" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={5} md={5}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Sign up</h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} >
                      {!verifyUser ?
                        <>
                          <form className={classes.form} onSubmit={onSubmit} >
                            <CustomInput
                              formControlProps={{
                                fullWidth: true,
                                className: classes.customFormControlClasses,
                              }}
                              inputProps={{
                                type: "name",
                                value: name,
                                onChange: (evt) => setName(evt.target.value),
                                startAdornment: (
                                  <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                  >
                                    <Face className={classes.inputAdornmentIcon} />
                                  </InputAdornment>
                                ),
                                placeholder: "Name"
                              }}
                            />
                            <CustomInput
                              formControlProps={{
                                fullWidth: true,
                                className: classes.customFormControlClasses
                              }}
                              inputProps={{
                                type: "company",
                                value: company,
                                onChange: (evt) => setCompany(evt.target.value),
                                startAdornment: (
                                  <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                  >
                                    <House className={classes.inputAdornmentIcon} />
                                  </InputAdornment>
                                ),
                                placeholder: "Company name"
                              }}
                            />
                            <CustomInput
                              formControlProps={{
                                fullWidth: true,
                                className: classes.customFormControlClasses,
                              }}
                              inputProps={{
                                error: invalidEmail,
                                value: email,
                                onChange: (evt) => setEmail(evt.target.value),
                                startAdornment: (
                                  <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                  >
                                    <Email className={classes.inputAdornmentIcon} />
                                  </InputAdornment>
                                ),
                                placeholder: "Email"
                              }}
                            />
                            <CustomInput
                              formControlProps={{
                                fullWidth: true,
                                className: classes.customFormControlClasses
                              }}
                              inputProps={{
                                value: password,
                                onChange: (evt) => setPassword(evt.target.value),
                                type: "password",
                                startAdornment: (
                                  <InputAdornment
                                    position="start"
                                    className={classes.inputAdornment}
                                  >
                                    <Icon className={classes.inputAdornmentIcon}>
                                      lock_outline
                                </Icon>
                                  </InputAdornment>
                                ),
                                placeholder: "Password"
                              }}
                            />
                            <FormControlLabel
                              classes={{
                                label: classes.label
                              }}
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={onClickAccept}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                  checked={accepted}
                                />
                              }
                              label={
                                <span>
                                  I agree to the{" "}
                                  <a href={termsofService}>terms and conditions</a>.
                            </span>
                              }
                            />
                            <div className={classes.textCenter}>
                              <Button round type="submit" color="primary" disabled={disabled}>
                                {infoFilledIn && accepted ? 'Create account' : (!accepted && infoFilledIn ? 'We need your agreement above' : 'Fill in the above to sign up')}
                              </Button>
                            </div>
                            <div className={classes.textCenter}>
                              <Button simple color="primary" size="lg" href='/login-page'>
                                Log in instead
                              </Button>
                            </div>
                          </form>
                        </>
                        : <>
                          {
                            error ?
                              <>
                                <p className={classes.description + " " + classes.textCenter}>
                                  {error.message}
                                </p>
                                {(error.code === 'UsernameExistsException') &&
                                  <div className={classes.textCenter}>
                                    <p className={classes.description + " " + classes.textCenter}>
                                      {email}
                                    </p>
                                    <Button simple color="primary" size="lg" href='/login-page'>
                                      Log in
                                    </Button>
                                  </div>
                                }
                                <div className={classes.textCenter}>

                                  <Button onClick={onClickRetry} round color="primary">
                                    Retry
                                  </Button>
                                </div>
                              </>
                              :
                              <>
                                <CustomInput
                                  formControlProps={{
                                    fullWidth: true,
                                    className: classes.customFormControlClasses
                                  }}
                                  inputProps={{
                                    value: verificationCode,
                                    onChange: (evt) => setVerificationCode(evt.target.value),
                                    type: "text",
                                    startAdornment: (
                                      <InputAdornment
                                        position="start"
                                        className={classes.inputAdornment}
                                      >
                                        <Icon className={classes.inputAdornmentIcon}>
                                          lock_outline
                                        </Icon>
                                      </InputAdornment>
                                    ),
                                    placeholder: "Verification code"
                                  }}
                                />
                                <p className={classes.description + " " + classes.textCenter}>
                                  You got mail!
                                </p>
                                <p className={classes.description + " " + classes.textCenter}>
                                  {email}
                                </p>
                                <div className={classes.textCenter}>
                                  <Button onClick={onClickVerify} round color="primary">
                                    Verify
                                  </Button>
                                  <div className={classes.textCenter}>
                                    <Button simple color="primary" size="lg" onClick={onClickResend}>
                                      Resend
                                    </Button>
                                  </div>
                                  {resend && <p className={classes.description + " " + classes.textCenter}>
                                    We sent new verification code to {email}
                                  </p>}
                                </div>
                              </>
                          }
                        </>
                      }
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer theme="white" content=""/>
      </div>
    </div>
  );
}
