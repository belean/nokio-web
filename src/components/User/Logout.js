import React from 'react';
import { useSetRecoilState } from 'recoil'

import { Button } from '@material-ui/core'
import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import { useHistory } from 'react-router';
import { Auth } from 'aws-amplify';
import { makeStyles } from '@material-ui/core/styles';
import { signedInAtom } from 'atoms/signedInAtom';

const useStyles = makeStyles(styles);

const Logout = () => {
  const classes = useStyles();
  const history = useHistory()
  const setSignedIn = useSetRecoilState(signedInAtom)
  const onClick = async () => {
    try {
      await Auth.signOut()
      setSignedIn(false)
      history.push('/')
    } catch (err) {
      history.push('/error-page')
    }
  }

  return <Button
    onClick={onClick}
    color={"white"}
    target="_blank"
    className={classes.navButton}
    round
  >
    Log out
  </Button>
}

export default Logout
