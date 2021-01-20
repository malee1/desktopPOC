import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '0px',
    padding: '0px',
    width: '100px',
    // height: '100px',
    backgroundColor: 'red'
  }
});

export default function SupervisorPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Test</p>
    </div>
  );
}
