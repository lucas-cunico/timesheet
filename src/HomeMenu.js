import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class HomeMenu extends React.Component {
   
    render(){
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <NotificationMenu /> */}
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Timesheeet
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
    }
}

export default withStyles(styles)(HomeMenu);