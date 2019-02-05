import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    content: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
  progress: {
    height: '150px!important',
    width: '150px!important',
    position: 'absolute',
  },
  text: {
      position: 'absolute',
      fontSize: '50px',
      fontWeight: '200',
      color: 'rgba(0, 0, 0, 0.7)'
  },
  percentage: {
      position: 'relative',
      fontSize: '20px',
      fontWeight: '200',
      color: 'rgba(0, 0, 0, 0.7)',
      top: '-27px',
      left: '48px',
  }

});

class CircularStatic extends React.Component {
getColor(progress){
  if(progress >= 90){
    return '#52b202' 
  }else if(progress >= 80){
    return '#c1ff7a'
  }else if(progress >= 65){
    return '#ff9100'
  }else{
    return '#c62828'
  }
}
  render() {
    const { classes, progress } = this.props;
    return (
      <div className={classes.content}>
        <CircularProgress className={classes.progress} variant="static" value={progress} style={{color: this.getColor(progress)}}/>
        <Typography className={classes.text}>
           {progress}
        </Typography> 
        <Typography className={classes.percentage}>
           %
        </Typography> 
      </div>
    );
  }
}


export default withStyles(styles)(CircularStatic);
