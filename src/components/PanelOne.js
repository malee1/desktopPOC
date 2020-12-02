import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, List, ListItem, Collapse, Button } from '@material-ui/core';
import { AccountCircle, Phone, Event, Fingerprint } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { panelOneLabels } from '../constants/panelLabels';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '5px'
  },
  box: {
    width: '27vw'
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
  },
  test: {
    backgroundColor: 'grey',
    zIndex: '1000',
    position: 'absolute',
    height: '15vh',
    width: '27vw'
  }
});

export default function PanelOne() {
  const classes = useStyles();
  const labels = panelOneLabels;

  const [open, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!open);
  };

  const customer = useSelector((state) => state.customer.data);

  return (
    <div className={classes.root}>
      <Box className={classes.box} bgcolor="primary.main">
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
          <Button onClick={handleDropDown}>Test</Button>
        </List>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className={classes.test}>Testing</div>
        </Collapse>
      </Box>
    </div>
  );
}
