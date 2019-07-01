import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em'
  }
};

const CreateMediaButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={"/media_lists/create"}
    label="Add a Media List"
    title="Add a Media List"
  >
  </Button>
);

export default withStyles(styles)(CreateMediaButton);
