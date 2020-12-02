import { React, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Logo from './Logo';
import PanelOne from './PanelOne';
import PanelTwo from './PanelTwo';
import PanelThree from './PanelThree';
import getcustomer from '../constants/api';
import { getCustomer } from '../redux/actions';

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

  const url = getcustomer;

  const dispatch = useDispatch();

  useEffect(() => {
    const getCustomerData = async () => {
      try {
        const response = await axios(url);
        dispatch(getCustomer(response.data));
      } catch (error) {
        console.log(`Error getting customer data: ${error}`);
      }
    };
    getCustomerData();
  }, [url, dispatch]);

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
