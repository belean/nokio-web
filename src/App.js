import React, { useEffect } from 'react';
import { Router } from 'react-router';
import { Switch } from 'react-router';
import { Route } from 'react-router';
import AboutUsPage from 'views/AboutUsPage/AboutUsPage.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import SignupPage from 'views/SignupPage/SignupPage.js';
import { createBrowserHistory } from 'history';
import { useSetRecoilState } from 'recoil'

const history = createBrowserHistory()

import { Auth, Hub, Logger } from 'aws-amplify';
import { signedInAtom } from 'atoms/signedInAtom';
import ErrorPage from 'views/ErrorPage/ErrorPage.js';

const logger = new Logger('auth-logger')

const listener = (data, { setLoggedIn }) => {
  switch (data.payload.event) {
    case 'signIn':
      setLoggedIn(true)
      logger.info('user signed in');
      break;
    case 'signUp':
      setLoggedIn(true)
      logger.info('user signed up');
      break;
    case 'signOut':
      setLoggedIn(false)
      logger.info('user signed out');
      break;
    case 'signIn_failure':
      logger.error('user sign in failed');
      break;
    case 'tokenRefresh':
      logger.info('token refresh succeeded');
      break;
    case 'tokenRefresh_failure':
      logger.error('token refresh failed');
      break;
    case 'configured':
      logger.info('the Auth module is configured');
  }
}

const App = () => {
  const setLoggedIn = useSetRecoilState(signedInAtom)

  useEffect(() => {
    Hub.listen('auth', (data) => listener(data, { setLoggedIn }))
    return () => {
      Hub.remove('auth')
    }
  }, []);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => setLoggedIn(true))
      .catch(() => setLoggedIn(false))
  }, []);

  return <Router history={history}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/landing-page" component={LandingPage} default />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
}

export default App
