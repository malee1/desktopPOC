import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
// import defaultUrl from '../constants/defaultUrl';

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

  const url = useSelector((state) => state.iFrame.iFrameUrl);

  return (
    <div className={classes.root} data-testid="iframe">
      <iframe
        title="title"
        src={url}
        allowFullScreen
        allow="encryted-media"
        height="100%"
        width="100%"
      />
    </div>
  );
}
