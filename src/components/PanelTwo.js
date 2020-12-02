import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, List, ListItem } from '@material-ui/core';
import { AccessTime, RecordVoiceOver, Help, Mic } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { panelTwoLabels } from '../constants/panelLabels';
// import customer1 from '../constants/mockCustomerData';

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
  }
});

export default function PanelOne() {
  const classes = useStyles();

  const labels = panelTwoLabels;

  const customer = useSelector((state) => state.customer.data);
  // const mockCustomer = customer1;

  // const [customer, setCustomer] = useState({});

  // useEffect(() => {
  //   setCustomer(mockCustomer);
  // }, [mockCustomer]);

  return (
    <div className={classes.root}>
      <Box className={classes.box} bgcolor="primary.main">
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
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
          <ListItem className={classes.listItem}>
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
          <ListItem className={classes.listItem}>
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
          <ListItem className={classes.listItem}>
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
        </List>
      </Box>
    </div>
  );
}
