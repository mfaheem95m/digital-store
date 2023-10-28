
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import Link from "../Link"; 

const useStyles = makeStyles((theme) => ({
  footerText: {
    color: 'white', 
    marginTop: '24px',
  },
  socialMediaIcon: {
    filter: 'invert(1)',
    opacity: 0.9,
  },
  socialMediaText: {
    color: "white",
    marginLeft: '20px',
  },
}));

const Footer = () => {
  const classes = useStyles();

  const productItems = ["Model 000", "Model 001", "Laces", "Masks", "No-show Socks", "Crew Socks", "Gift Cards"];
  const supportItems = ["Help Center", "FAQs", "Order", "Order Status", "Returns & Exchanges", "Contact Us"];
  const everythingElseItems = ["Community", "Why Sopa", "About", "Discount Program", "Sopa Blog", "Sopa Ambassadors"];

  return (
    <Container maxWidth="false" style={{ background: '#02021D', padding: '50px', color: 'white' }}>
      <Box display="flex" justifyContent="space-around" flexWrap="wrap">
        
        <Box display="flex" flexDirection='column' alignItems='baseline'>
          <Typography variant="h6" gutterBottom>Products</Typography>
          {productItems.map((item) => (
            <Typography key={item} className={classes.footerText}>{item}</Typography>
          ))}
        </Box>

        <Box display="flex" flexDirection='column' alignItems='baseline'>
          <Typography variant="h6" gutterBottom>Support</Typography>
          {supportItems.map((item) => (
            <Typography key={item} className={classes.footerText}>{item}</Typography>
          ))}
        </Box>

        <Box display="flex" flexDirection='column' alignItems='baseline'>
          <Typography variant="h6" gutterBottom>Everything Else</Typography>
          {everythingElseItems.map((item) => (
            <Typography key={item} className={classes.footerText}>{item}</Typography>
          ))}
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box sx={{ display: 'flex', alignItems: 'initial', marginTop: '20px' }}>
            <Link href="https://twitter.com/">
              <Image
                src="/images/twitter-logo.svg"
                alt="Twitter"
                width={24}
                height={24}
                className={classes.socialMediaIcon}
              />
            </Link>
            <Typography className={classes.socialMediaText}>Twitter</Typography>
          </Box>
          
          
  <Box sx={{ display: 'flex', alignItems: 'initial', marginTop: '20px' }}>
    <Link href="https://instagram.com/">
      <Image
        src="/images/instagram-logo.svg" 
        alt='Instagram'
        width={24}
        height={24}
        className={classes.socialMediaIcon}
      />
    </Link>
    <Typography className={classes.socialMediaText}>Instagram</Typography>
  </Box>

  <Box sx={{ display: 'flex', alignItems: 'initial', marginTop: '20px' }}>
    <Link href="https://facebook.com/">
      <Image
        src="/images/facebook-logo.svg" 
        alt="Facebook"
        width={24}
        height={24}
        className={classes.socialMediaIcon}
      />
    </Link>
    <Typography className={classes.socialMediaText}>Facebook</Typography>
  </Box>

        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
