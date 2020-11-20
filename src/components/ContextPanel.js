import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import PanelOne from './PanelOne';
import PanelTwo from './PanelTwo';
import PanelThree from './PanelThree';

const useStyles = makeStyles({
  root: {
    height: '20%',
    display: 'flex',
    overflow: 'hidden',
    padding: '5px'
  },
  logoContainer: {
    minWidth: '15vw',
    display: 'flex'
  },
  panelContainer: {
    flexGrow: 10,
    display: 'flex'
  }
});

export default function ContextPanel() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <Logo className={classes.logo} />
      </div>
      <div className={classes.panelContainer}>
        <PanelOne className={classes.panel} />
        <PanelTwo className={classes.panel} />
        <PanelThree className={classes.panel} />
      </div>
    </div>
  );
}
