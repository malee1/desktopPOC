import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    flexGrow: 1,
    height: '100%',
    width: '100%'
  }
});

export default function IFrame() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <iframe
        title="title"
        src="https://freeklime.co.uk"
        allowFullScreen
        allow="encryted-media"
        height="100%"
        width="100%"
      />
    </div>
  );
}
