import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '20px'
  },
  buttonGroup: {
    display: 'flex'
    // flexDirection: 'column'
  },
  button: {
    margin: '10px'
  }
});

export default function AppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>App Bar</Typography>
      <ButtonGroup className={classes.buttonGroup} orientation="vertical" color="primary">
        <Button className={classes.button} variant="contained" color="primary">
          One
        </Button>
        <Button className={classes.button} variant="contained" color="primary">
          Two
        </Button>
        <Button className={classes.button} variant="contained" color="primary">
          Three
        </Button>
        <Button className={classes.button} variant="contained" color="primary">
          Four
        </Button>
      </ButtonGroup>
    </div>
  );
}
