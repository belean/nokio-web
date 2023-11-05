/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-pro-react/components/footerStyle.js";
import termsofService from "assets/documents/Terms of Service.pdf";
import privacyPolicy from "assets/documents/Privacy Policy.pdf";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const { children, content, theme, big, className } = props;
  const classes = useStyles();
  const themeType =
    theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });
  const aClasses = classNames({
    [classes.a]: true
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div>
          {/* <div className={classes.content}>{children}</div> */}
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  target="_blank"
                  className={classes.block}
                >
                  be Lean Solutions AB
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  target="_blank"
                  className={classes.block}
                >
                  <span>Org.no: 556997-9445</span>
                  <br/>
                  <span>VAT: SE556997944501</span>
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  target="_blank"
                  className={classes.block}
                  href="mailto:info@belean.se"
                >
                  <span>Phone: +46 (0)73 6488916</span>
                  <br/>
                  <span>Email: info@belean.se</span>
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href={termsofService}
                  target="_blank"
                  className={classes.inlineBlock}
                  >
                  Terms of Service
                </a>
                <br/>
                <a
                  href={privacyPolicy}
                  target="_blank"
                  className={classes.inlineBlock}
                  >
                  Privacy Policy
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} made by be Lean
          </div>
        </div>
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.oneOf(["dark", "white", "transparent"]),
  big: PropTypes.bool,
  content: PropTypes.node.isRequired
};
