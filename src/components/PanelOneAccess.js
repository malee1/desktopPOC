import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Collapse,
  Button
} from '@material-ui/core';
import { ArrowDropDown, ExpandMore } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { panelOneLabels } from '../constants/panelLabels';
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
    width: '100%',
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
  },
  titleContainer: {
    display: 'flex'
  },
  accordianDetails: {
    zIndex: '1500',
    // position: 'absolute',
    backgroundColor: 'white',
    width: '100%'
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
    <div className={classes.root} data-testid="panel-one-access">
      <Box className={classes.box}>
        <Accordion data-testid="accordian">
          <AccordionSummary className={classes.accordion}>
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="h5" data-testid="aaa">
                {labels.name} {customer.name}
              </Typography>
            </div>
          </AccordionSummary>
        </Accordion>
        <Accordion data-testid="accordian">
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordion}
          >
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="h5" data-testid="aaa">
                {labels.dob}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.accordianDetails}>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="h4">
                {customer.dob}
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion data-testid="accordian">
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordion}
          >
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="h5" data-testid="aaa">
                {labels.uRef}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.accordianDetails}>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="h4">
                {customer.uRef}
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion data-testid="accordian">
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordion}
          >
            <div className={classes.labelContainer}>
              <Typography className={classes.label} variant="h5" data-testid="aaa">
                {labels.tel}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.accordianDetails}>
            <div className={classes.labelValueContainer}>
              <Typography className={classes.labelValue} variant="h4">
                {customer.tel}
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Button
          className={classes.panelButton}
          onClick={handleDropDown}
          variant="contained"
          color="secondary"
          data-testid="button"
        >
          <Typography className={classes.buttonLabel} variant="body2">
            More Info
          </Typography>
          <ArrowDropDown className={classes.dropDownIcon} />
        </Button>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <div className={classes.dropDown}>
            <DropDownPanel />
          </div>
        </Collapse>
      </Box>
    </div>
  );
}
