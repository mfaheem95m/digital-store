import React from "react";
import Image from "next/image";
import { Container, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  boxHeading: {
    height: '42px',
    background: theme.palette.primary.darkBlack,
  },
  headingText: {
    fontSize: '16px',
    lineHeight: '22px',
    color: theme.palette.primary.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'inherit',
  },
  headerLinks: {
    height: '86px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 100px',
    [theme.breakpoints.down('md')]: {
      padding: '15px 50px',
      // flexDirection: 'column',
      height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '15px 20px',
    },
  },
  navigationItem: {
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      margin: '5px 0',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  imageBox: {
    cursor: 'pointer',
    margin: '0 10px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const lazyRoot = React.useRef(null);

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <div className={classes.boxHeading}>
        <Typography className={classes.headingText}>
          Free US shipping on order $80+
        </Typography>
      </div>

      <div ref={lazyRoot} className={classes.headerLinks}>
        <Box flex={1} display="flex" justifyContent="flex-start">
          <Link href="/">
            <Image
              lazyRoot={lazyRoot}
              src="/images/logomain.svg"
              width="150"
              height="50"
              alt="Logo"
              objectFit="contain"
            />
          </Link>
        </Box>

        {isDesktop && (
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
          >
            {["Men", "Women", "Accessories", "About"].map((text) => (
              <Typography key={text} className={classes.navigationItem} style={{margin: '0 10px'}}>
                {text}
              </Typography>
            ))}
          </Box>
        )}

        <Box
          flex={1}
          display="flex"
          justifyContent="flex-end"
        >
          <Typography className={classes.navigationItem}>
            Support
          </Typography>
          <Box className={classes.imageBox}>
            <Image
              src="/images/user.svg"
              alt="User"
              width={24}
              height={24}
              objectFit="contain"
            />
          </Box>

          <Box className={classes.imageBox}>
            <Image
              src="/images/shopping-bag.svg"
              alt="Shopping Bag"
              width={24}
              height={24}
              objectFit="contain"
            />
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default Header;
