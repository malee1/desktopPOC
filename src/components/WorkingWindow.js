import { React, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import AppBar from './AppBar';
import IFrame from './IFrame';
import { getUrlsApi } from '../constants/api';
import { getUrls, setIFrame } from '../redux/actions';

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

  const url = getUrlsApi;

  const dispatch = useDispatch();

  useEffect(() => {
    const getUrlData = async () => {
      try {
        const response = await axios(url);
        // console.log(response.data);
        dispatch(getUrls(response.data));
        // console.log(response.data.urlOne.url);
        dispatch(setIFrame(response.data.urlOne.url));
      } catch (error) {
        console.log(`Error getting url data: ${error}`);
      }
    };
    getUrlData();
  }, [url, dispatch]);

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
