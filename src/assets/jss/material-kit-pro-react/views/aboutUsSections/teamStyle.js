import {
  mrAuto,
  mlAuto,
  title,
  description,
  cardTitle,
  grayColor
} from "assets/jss/material-kit-pro-react.js";

const teamStyle = {
  mrAuto,
  mlAuto,
  title,
  description: {
    ...description,
    marginBottom: "80px"
  },
  cardTitle,
  cardDescription: {
    color: grayColor[0]
  },
  team: {
    padding: "40px 0 10px 0"
  },
  textCenter: {
    textAlign: "center!important"
  },
  img: {
    width: "100%",
    height: "auto"
  },
  textMuted: {
    color: grayColor[7] + " !important"
  },
  justifyContent: {
    justifyContent: "center!important"
  }
};

export default teamStyle;
