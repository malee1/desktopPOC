import { React, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Logo from './Logo';
import PanelOne from './PanelOne';
import PanelTwo from './PanelTwo';
import PanelThree from './PanelThree';
import PanelOneAccess from './PanelOneAccess';
// import PanelAccess from './PanelAccess';
import { getCustomerApi, getUserApi } from '../constants/api';
import { getCustomer, getUser } from '../redux/actions';
import user from '../constants/user';

const useStyles = makeStyles({
  root: {
    height: '20%',
    display: 'flex',
    overflow: 'hidden',
    padding: '5px'
  },
  logoContainer: {
    minWidth: '15vw',
    display: 'flex',
    marginTop: '15px'
  },
  panelContainer: {
    flexGrow: 10,
    display: 'flex'
  }
});

export default function ContextPanel() {
  const classes = useStyles();

  const customerUrl = getCustomerApi;
  const userUrl = getUserApi;

  const showAccessibilityPanel = useSelector((state) => state.accessibility.accessibility);

  const dispatch = useDispatch();

  useEffect(() => {
    const getCustomerData = async () => {
      try {
        const response = await axios(customerUrl);
        dispatch(getCustomer(response.data));
      } catch (error) {
        console.log(`Error getting customer data: ${error}`);
      }
    };
    getCustomerData();
  }, [customerUrl, dispatch]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.post(userUrl, user);
        dispatch(getUser(response.data));
      } catch (error) {
        console.log(`Error getting user data: ${error}`);
      }
    };
    getUserData();
  }, [userUrl, dispatch]);

  return (
    <div className={classes.root} data-testid="context-panel">
      <div className={classes.logoContainer}>
        <Logo className={classes.logo} data-testid="logo" />
      </div>
      <div className={classes.panelContainer} data-testid="panel-container">
        {/* <PanelOne className={classes.panel} /> */}
        {/* <PanelOneAccess /> */}
        {showAccessibilityPanel ? <PanelOneAccess /> : <PanelOne />}
        <PanelTwo className={classes.panel} />
        <PanelThree className={classes.panel} />
      </div>
    </div>
  );
}
