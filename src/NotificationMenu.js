import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import NotificationSwitch from './NotificationSwitch'


const styles = theme => ({
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });
class NotificationMenu extends React.Component{

    state = {
        anchorEl: null,
        open: false,
    };
    
    handleToggle = (event) => {
        event.persist()
        this.setState(state => ({ open: true, anchorEl: event.currentTarget }));
    };

    handleClose = () => {
        this.setState({ anchorEl: null, open: false });
    };
    render(){
        const { open  } = this.state;
        const { classes } = this.props;
        let notificationIsSuported = 'serviceWorker' in navigator && 'PushManager' in window
        if(!notificationIsSuported){
            return null
        }
        return (
            <IconButton className={classes.menuButton} 
                buttonRef={node => {
                this.anchorEl = node;
                }}
                aria-owns={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}
                color="inherit" aria-label="Open drawer">
                <MenuIcon />
                <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    id="menu-list-grow"
                    style={{ transformOrigin: 'center bottom' }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={this.handleClose}>
                        <MenuList>
                            <MenuItem>
                                <Tooltip title="Você irá receber notificação quando chegar em 90%" placement="bottom-start">
                                <InfoIcon style={{marginRight: '10px'}}/> 
                                </Tooltip>
                                Receber Notificações
                                <NotificationSwitch />
                            </MenuItem>
                        </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
                </Popper>
            </IconButton>)
    }
}
export default withStyles(styles) (NotificationMenu)