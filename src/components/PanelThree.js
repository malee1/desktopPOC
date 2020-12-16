import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, List, ListItem, Button, Collapse } from '@material-ui/core';
import { Notes, Announcement, Notifications, CheckBox, ArrowDropDown } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { panelThreeLabels } from '../constants/panelLabels';
import DropDownPanel from './DropDownPanel';

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
  listItemButton: {
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    display: 'flex'
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
  dropDown: {
    // backgroundColor: 'grey',
    zIndex: '1000',
    position: 'absolute',
    height: '15vh',
    width: '27vw'
  },
  panelButton: {
    height: '30px'
  }
});

export default function PanelOne() {
  const classes = useStyles();

  const labels = panelThreeLabels;

  const customer = useSelector((state) => state.customer.data);

  const [open, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.box} bgcolor="primary.main">
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <div className={classes.iconContainer}>
              <Notifications className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.alerts}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.alerts}
              </Typography>
            </div>
          </ListItem>
          <ListItem className={classes.listItem}>
            <div className={classes.iconContainer}>
              <Announcement className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.service}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.service}
              </Typography>
            </div>
          </ListItem>
          <ListItem className={classes.listItem}>
            <div className={classes.iconContainer}>
              <Notes className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.keyInfo}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.keyInfo}
              </Typography>
            </div>
          </ListItem>
          <ListItem className={classes.listItem}>
            <div className={classes.iconContainer}>
              <CheckBox className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.auth}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.auth}
              </Typography>
            </div>
          </ListItem>
          <ListItem className={classes.listItemButton}>
            <Button
              className={classes.panelButton}
              onClick={handleDropDown}
              variant="contained"
              color="secondary"
            >
              More Alert Details
              <ArrowDropDown />
            </Button>
          </ListItem>
        </List>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className={classes.dropDown}>
            <DropDownPanel />
          </div>
        </Collapse>
      </Box>
    </div>
  );
}
