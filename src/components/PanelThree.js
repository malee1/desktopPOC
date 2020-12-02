import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, List, ListItem } from '@material-ui/core';
import { Notes, Announcement, Notifications, CheckBox } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { panelThreeLabels } from '../constants/panelLabels';

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

  const labels = panelThreeLabels;

  const customer = useSelector((state) => state.customer.data);

  return (
    <div className={classes.root}>
      <Box bgcolor="primary.main">
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
        </List>
      </Box>
    </div>
  );
}
