import React, { useRef, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import CircleType from 'circletype';
import { Box } from "@mui/system";

const useStyles = makeStyles({
    root: {},
    container: {
        width: '160px',
        borderRadius: '50%',
        width: ' 180px',
        height: ' 180px',
        display: 'inline-block',
        borderTop: '2px solid transparent',
        borderLeft: '2px dashed #244484b0',
        borderRight: '2px dashed #244484b0',
        borderBottom: '2px dashed #244484b0',
        WebkitPerspective: 1000,
        WebkitBackfaceVisibility: 'hidden',
        // background: '#fff',
    },
})

const ContactButton = ({ name, text }) => {
    const classes = useStyles();
    const circleInstance = useRef();

    useEffect(() => {
        new CircleType(circleInstance.current).radius(99);
    }, []);

    return (
        <>
            {/* <div >
        <button className="pulse-button">{name}</button>
      </div> */}
            <fieldset className={classes.container}>
                <legend className="circTxt" id="test" ref={circleInstance}>
                    {text}
                </legend>
                <Box>
                    <button className="pulse-button">{name}</button>
                </Box>
            </fieldset>
        </>
    );
};

export default ContactButton;
