import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, List, ListItem } from '@material-ui/core';
import { AccountCircle, Phone, Event, Fingerprint } from '@material-ui/icons';
import axios from 'axios';
import { panelOneLabels } from '../constants/panelLabels';
import customer1 from '../constants/mockCustomerData';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '5px'
  },
  list: {
    flexDirection: 'column',
    whiteSpace: 'nowrap'
  },
  listItem: {
    backgroundColor: 'white'
  },
  iconContainer: {
    width: '8%',
    backgroundColor: 'white'
  },
  icon: {
    backgroundColor: 'white'
  },
  labelContainer: {
    width: '40%',
    marginLeft: '2px'
  },
  label: {
    backgroundColor: 'white',
    paddingLeft: '5px'
  },
  labelValueContainer: {
    width: '55%',
    marginLeft: '2px'
  },
  labelValue: {
    backgroundColor: 'white',
    paddingLeft: '5px'
  }
});

export default function PanelOne() {
  const classes = useStyles();

  const labels = panelOneLabels;
  const mockCustomer = customer1;

  const [customer, setCustomer] = useState({});
  const [name, setName] = useState('');

  useEffect(() => {
    setCustomer(mockCustomer);
    const getName = async () => {
      try {
        const response = await axios('http://localhost:3002/');
        setName(response.data.name);
      } catch (error) {
        console.log(`Error ${error}`);
      }
    };
    getName();
    console.log(`this is it${name}`);
  }, [mockCustomer, name]);

  return (
    <div className={classes.root}>
      <Box bgcolor="primary.main">
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <div className={classes.iconContainer}>
              <AccountCircle className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.name}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.name}
              </Typography>
            </div>
          </ListItem>
          <ListItem className={classes.listItem}>
            <div className={classes.iconContainer}>
              <Event className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.dob}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.dob}
              </Typography>
            </div>
          </ListItem>
          <ListItem className={classes.listItem}>
            <div className={classes.iconContainer}>
              <Fingerprint className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.uRef}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.uRef}
              </Typography>
            </div>
          </ListItem>
          <ListItem className={classes.listItem}>
            <div className={classes.iconContainer}>
              <Phone className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.tel}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.tel}
              </Typography>
            </div>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
