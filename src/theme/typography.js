import { textAlign, textTransform } from "@mui/system";
import palette from "./palette";

const obj = {
  h1: {
    color: palette.primary.whiteLight,
    fontSize: "70px",
    textTransform: "uppercase",
    fontFamily: "Metropolis-Bold",
    fontWeight: 'bold',
    letterSpacing: "-0.24px",
    textFillColor: 'transparent',
    WebkitTextStroke: '2px'

  },
  h2: {
    opacity: "0.9",
    
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#284a8e",
    fontFamily: "Metropolis-Bold"
  },

  h3: {
    color: palette.primary.dark,
    fontWeight: "bold",
    fontFamily: "Metropolis-Bold",
    lineHeight: "normal",
    letterSpacing: 'normal',
    textTransform: 'uppercase',
    textAlign: 'left',
    margin: '5px 0px',

  },
  h4: {
    color: palette.primary.dark,
    fontSize: "35px",
    fontFamily: "Metropolis-Bold",
    lineHeight: "normal",
    letterSpacing: 'normal',
    textTransform: 'uppercase',
    margin: '5px 0px'
  },
  body1: {
    color: palette.primary.darkGray,
    fontSize: "15px",
    fontFamily: "Metropolis-Regular",
    fontStyle: "normal",
    textAlign: 'right',
  },
  h5: {
    color: palette.primary.medium,
    fontSize: "33px",
    lineHeight: "normal",
    fontFamily: "Metropolis-Bold",
    letterSpacing: 'normal',
    textTransform: 'uppercase',
    // textAlign: 'right',
    margin: '5px 0px'
  },
  h6: {
    color: palette.primary.white,
    fontFamily: "Metropolis-Bold",
    opacity: 0.8,
    letterSpacing: "normal",
    cursor: "pointer",
    textTransform: 'uppercase'
  },
  caption: {
    color: palette.primary.blue,
    fontFamily: "Metropolis-Bold",
    textAlign: "start",
    lineHeight: "normal",
    fontWeight: "bold",
    textTransform: 'uppercase',
    opacity: '80%'
  },
  navigate: {
    fontFamily: 'Metropolis-Medium',
    fontSize: '16px',
    fontWeight: '400',
    fontStretch: 'normal',
    fontStyle: 'normal',

    letterSpacing: '2.6px',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#333',
    opacity: 0.7,
    "&:hover": {
      color: palette.primary.medium,
      fontFamily: 'Metropolis-Bold',
      opacity: 1
    }
  },
  navigationItem: {
    fontFamily:  "Metropolis-Regular",
    fontSize: '16px',
    fontWeight: '400',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '22px',
    textAlign: 'center',
    cursor: 'pointer',
    margin: '0px 20px',
    color: palette.primary.darkBlack,

  },
  navigationDetail: {
    fontFamily: 'Metropolis-Regular',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '2',
    letterSpacing: '2.6px',
    textAlign: 'center',
    color: palette.primary.black,


  },
  details: {
    color: palette.primary.dark,
    fontFamily: "Metropolis-Regular",
    opacity: '0.8',
    letterSpacing: "normal",
    fontSize: "14px",
    margin: "8px"
  },
  text : {
      fontFamily: 'Metropolis-Regular',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    margin : "0 9px",
    textAlign: 'center',
    color: '#373336',
    maxWidth:"200px"
    
  },
  body2: {
    color: palette.primary.darkGray,
    fontSize: "15px",
    fontFamily: "Metropolis-Regular",
    fontStyle: "normal",
    // textAlign: 'left',
    width: "100%",
    padding : "6px 0px"
  },
  body3: {
    color: palette.primary.darkGray,
    fontSize: "15px",
    fontFamily: "Metropolis-Regular",
    fontStyle: "normal",
    textAlign: 'right',
    width: "80%",
  },

};
export default obj;
