import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, ButtonGroup, Typography, Modal } from '@material-ui/core';
import { setIFrame } from '../redux/actions';
import AccessibilityMenu from './AccessibilityMenu';

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
  },
  accessibility: {
    height: '45vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function AppBar() {
  const classes = useStyles();

  const buttonOne = useSelector((state) => state.urls.urls.urlOne);
  const buttonTwo = useSelector((state) => state.urls.urls.urlTwo);
  const buttonThree = useSelector((state) => state.urls.urls.urlThree);

  const dispatch = useDispatch();

  const boltOn = useSelector((state) => state.user.data.boltOn);
  let showAccessibilityButton;
  if (boltOn === 'Accessibility') {
    showAccessibilityButton = true;
  } else showAccessibilityButton = false;

  const [open, setOpen] = useState(false);

  const handleButtonOneClick = () => {
    dispatch(setIFrame(`${buttonOne.url}`));
  };

  const handleButtonTwoClick = () => {
    dispatch(setIFrame(`${buttonTwo.url}`));
  };

  const handleButtonThreeClick = () => {
    dispatch(setIFrame(`${buttonThree.url}`));
  };

  const handleAccessibilityModal = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root} data-testid="app-bar">
      <Typography variant="h5">App Bar</Typography>
      <ButtonGroup className={classes.buttonGroup} orientation="vertical" color="primary">
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleButtonOneClick}
          data-testid="button"
        >
          {buttonOne.name}
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleButtonTwoClick}
          data-testid="button"
        >
          {buttonTwo.name}
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleButtonThreeClick}
          data-testid="button"
        >
          {buttonThree.name}
        </Button>
      </ButtonGroup>
      {showAccessibilityButton && (
        <div className={classes.accessibility}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleAccessibilityModal}
            data-testid="button-accessibility"
          >
            Display
          </Button>
          <Modal
            open={open}
            onClose={handleAccessibilityModal}
            className={classes.modal}
            data-testid="modal"
          >
            <Box>
              <AccessibilityMenu />
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}
