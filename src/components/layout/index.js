import { makeStyles } from "@mui/styles";
import React from "react";
import { Footer } from "../footer";
import Header from "../header/Header";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${"/images/bg-img.jpg"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

  },
});


const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
