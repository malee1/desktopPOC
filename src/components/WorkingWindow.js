import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import IFrame from './IFrame';

const useStyles = makeStyles({
  root: {
    height: '80vh',
    display: 'flex',
    padding: '5px'
  },
  appBarContainer: {
    minWidth: '15vw',
    backgroundColor: 'lightGrey'
  },
  iFrameContainer: {
    flexGrow: 16
  }
});

export default function WorkingWindow() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.appBarContainer}>
        <AppBar />
      </div>
      <div className={classes.iFrameContainer}>
        <IFrame />
      </div>
    </div>
  );
}
