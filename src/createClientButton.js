import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em'
  }
};

const CreateClientButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={"/clients/create"}
    label="Add a Client"
    title="Add a Client"
  >
  </Button>
);

export default withStyles(styles)(CreateClientButton);
