import React, { Component } from 'react';
import './App.css';
import HomeMenu from './HomeMenu'
import CircularStatic from './CircularStatic'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: navigator.onLine ? '#99346d': '#7b7b7b' },
    secondary: { main: '#f50057' },
  },
  typography: {
    useNextVariants: true,
  },
});
class App extends Component {
  state={
    progress: 0
  }
  componentDidMount(){
    fetch('https://timesheeeet.herokuapp.com/http://my-hive.com/beer/progress/CWB', { 
        headers: {'Origin': 'http://my-hive.com'} 
      }).then(response => {
      response.text().then(body => {
        let json = JSON.parse(body.replace('joblog(', '').replace(')', ''))
        this.setState({progress: json.Total})
      });
    })
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <HomeMenu/>
          <CircularStatic progress={this.state.progress}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
