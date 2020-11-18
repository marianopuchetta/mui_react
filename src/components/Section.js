import React from 'react';
import Card from './Card'
import {makeStyles} from '@material-ui/core/styles'
// import {Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      display:"flex",
      justifyContent: "center",
      margin: "5vh"
    }
  }));


const Section = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* <Typography color="primary" variant="h1">
            </Typography> */}
           <Card/>
        </div>
    );
};

export default Section;