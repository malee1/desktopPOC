import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, List, ListItem, Button, Collapse } from '@material-ui/core';
import { AccessTime, RecordVoiceOver, Help, Mic, ArrowDropDown } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { panelTwoLabels } from '../constants/panelLabels';
import DropDownPanel from './DropDownPanel';
import DropDownPanel2 from './DropDownPanel2';

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

  const labels = panelTwoLabels;

  const customer = useSelector((state) => state.customer.data);
  const user = useSelector((state) => state.user.data.roleProfile);

  const [open, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!open);
  };

  let dropDown;
  if (user === 'Gamma') {
    dropDown = <DropDownPanel2 />;
  } else {
    dropDown = <DropDownPanel />;
  }

  return (
    <div className={classes.root} data-testid="panel-two">
      <Box className={classes.box} bgcolor="primary.main">
        <List className={classes.list}>
          <ListItem className={classes.listItem} data-testid="item">
            <div className={classes.iconContainer}>
              <AccessTime className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.time}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.timeWait}
              </Typography>
            </div>
          </ListItem>
          <ListItem className={classes.listItem} data-testid="item">
            <div className={classes.iconContainer}>
              <Help className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.context}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.context}
              </Typography>
            </div>
          </ListItem>
          <ListItem className={classes.listItem} data-testid="item">
            <div className={classes.iconContainer}>
              <Mic className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.rec}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.recording}
              </Typography>
            </div>
          </ListItem>
          <ListItem className={classes.listItem} data-testid="item">
            <div className={classes.iconContainer}>
              <RecordVoiceOver className={classes.icon} />
            </div>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="body1">
                {labels.info}
              </Typography>
            </div>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="body1">
                {customer.callInfo}
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
              More Context
              <ArrowDropDown />
            </Button>
          </ListItem>
        </List>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className={classes.dropDown}>{dropDown}</div>
        </Collapse>
      </Box>
    </div>
  );
}
