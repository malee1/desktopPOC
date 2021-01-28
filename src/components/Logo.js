import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '5px'
  },
  image: {
    backgroundColor: 'lightGrey'
  }
});

export default function Logo() {
  const classes = useStyles();

  return (
    <div className={classes.root} data-testid="logo">
      <img className={classes.image} src="/logo192.png" alt="logotest" />
    </div>
  );
}
