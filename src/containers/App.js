/**
 * Main App Script.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppTheme from './../components/AppTheme';
import Main from './Main';
import EventBus from './../components/EventBus';

const muiTheme = getMuiTheme(AppTheme);


class App extends React.Component {
	componentDidMount = () => {
		EventBus.initializeAll()
	};
	render = () => (

		<MuiThemeProvider muiTheme={muiTheme}>
			<Main/>
		</MuiThemeProvider>
	);
}


function alertSomthing() {
	alert('alert something!');
}
export default App;
