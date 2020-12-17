import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { setIFrame } from '../redux/actions';
import urls from '../constants/urls';

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

  const { buttonOne, buttonTwo } = urls;

  const dispatch = useDispatch();

  const handleButtonOneClick = () => {
    dispatch(setIFrame(`${buttonOne.url}`));
  };

  const handleButtonTwoClick = () => {
    dispatch(setIFrame(`${buttonTwo.url}`));
  };

  return (
    <div className={classes.root}>
      <Typography>App Bar</Typography>
      <ButtonGroup className={classes.buttonGroup} orientation="vertical" color="primary">
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleButtonOneClick}
        >
          {buttonOne.name}
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleButtonTwoClick}
        >
          {buttonTwo.name}
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
