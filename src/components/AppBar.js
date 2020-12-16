import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { getUrl } from '../redux/actions';

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

  const newUrl = 'https://www.ukclimbing.com/';

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(getUrl(newUrl));
  };

  return (
    <div className={classes.root}>
      <Typography>App Bar</Typography>
      <ButtonGroup className={classes.buttonGroup} orientation="vertical" color="primary">
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
        >
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
