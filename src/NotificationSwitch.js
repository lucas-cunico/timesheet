import React from 'react'
import Switch from '@material-ui/core/Switch';

class NotificationSwitch extends React.Component{
    state = {
        active: false,
    };
    handleChange(){
        this.setState(state => {
            return {active: !state.active}
        })
    }
    render(){
        const {active} = this.state
        if(active){
            navigator.serviceWorker.ready.then(function(swReg) {
            console.log('Service Worker is registered', swReg);

            swReg.pushManager.getSubscription()
                .then(function(subscription) {
                    let isSubscribed = !(subscription === null);

                    if (isSubscribed) {
                    console.log('User IS subscribed.');
                    } else {
                    console.log('User is NOT subscribed.');
                    }

                });
            }).catch(e => console.log(e))
        }
        return <Switch
        checked={active}
        onChange={this.handleChange.bind(this)}
        value="checkedA"
      />
    }
}

export default NotificationSwitch