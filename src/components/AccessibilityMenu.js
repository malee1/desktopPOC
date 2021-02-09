import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
import { setAccessibility } from '../redux/actions';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    width: '50vw',
    height: '40vh'
  },
  title: { padding: '15px' },
  options: { padding: '20px' },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  button: {
    width: '80%',
    fontSize: '40px'
  }
});

export default function AccessibilityMenu() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const optionOneSelection = useSelector((state) => state.accessibility.accessibility);

  const handleOptionOneClick = () => {
    dispatch(setAccessibility(!optionOneSelection));
  };

  return (
    <div className={classes.root} data-testid="accessibility-menu">
      <Box>
        <Typography className={classes.title} variant="h4">
          Accessibility Menu
        </Typography>
        <Typography className={classes.options} variant="h6">
          Please select a display option
        </Typography>
        <Box className={classes.buttonContainer}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleOptionOneClick}
            data-testid="button"
          >
            Toggle Display Option One
          </Button>
        </Box>
      </Box>
    </div>
  );
}
