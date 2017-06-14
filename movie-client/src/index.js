import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
injectTapEventPlugin();

ReactDOM.render(
<MuiThemeProvider muiTheme={getMuiTheme()}>
<App />
</MuiThemeProvider>,

 document.getElementById('root'));
// registerServiceWorker();
