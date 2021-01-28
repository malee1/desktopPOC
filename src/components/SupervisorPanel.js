import { React, useState } from 'react';
import { Button, Drawer, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '0px',
    padding: '20px',
    width: '120px',
    // height: '100px',
    // backgroundColor: 'lightgrey',
    backgroundColor: 'rgb(2,0,36)',
    background:
      'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(189,189,201,1) 0%, rgba(98,150,214,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  button: {
    width: '80px',
    marginTop: '10px'
  },
  listItem: {
    backgroundColor: 'red'
  },
  paper: {
    width: 'inherit',
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    width: 'inherit'
  }
});

export default function SupervisorPanel() {
  const classes = useStyles();

  const [openButtonOne, setOpenButtonOne] = useState(false);
  const [openButtonTwo, setOpenButtonTwo] = useState(false);

  const handleOpenButtonOne = () => {
    setOpenButtonOne(true);
  };

  const handleOpenButtonTwo = () => {
    setOpenButtonTwo(true);
  };

  const handleClose = () => {
    setOpenButtonOne(false);
    setOpenButtonTwo(false);
  };

  return (
    <div className={classes.root}>
      <Box>
        <Typography>Supervisor</Typography>
      </Box>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleOpenButtonOne}
      >
        One
      </Button>
      <Drawer
        style={{ width: '30vw' }}
        variant="temporary"
        anchor="right"
        open={openButtonOne}
        classes={{ paper: classes.paper }}
      >
        <Typography>Content 1</Typography>
        <img className={classes.image} src="/images/metrics.png" alt="placeholder metrics" />
        <Typography>Metrics</Typography>
        <Typography>Metrics</Typography>
        <Typography>Metrics</Typography>
        <Typography>Metrics</Typography>
        <Typography>Metrics</Typography>
        <Button
          className={classes.button}
          onClick={handleClose}
          variant="contained"
          color="secondary"
        >
          Close
        </Button>
      </Drawer>

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={handleOpenButtonTwo}
      >
        Two
      </Button>
      <Drawer
        style={{ width: '30vw' }}
        variant="temporary"
        anchor="right"
        open={openButtonTwo}
        classes={{ paper: classes.paper }}
      >
        <Typography>Content 2</Typography>
        <br />
        <Typography>Useful Links</Typography>
        <Typography>Useful Links</Typography>
        <Typography>Useful Links</Typography>
        <Typography>Useful Links</Typography>
        <Typography>Useful Links</Typography>
        <Typography>Useful Links</Typography>
        <Typography>Useful Links</Typography>
        <Typography>Useful Links</Typography>
        <Button
          className={classes.button}
          onClick={handleClose}
          variant="contained"
          color="secondary"
        >
          Close
        </Button>
      </Drawer>
    </div>
  );
}
