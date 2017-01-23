/**
 * Created by fisher at 11:25 PM on 11/29/16.
 *
 * Ecust Jwc App Bar.
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import EventBus from './EventBus';
import {purple900, blue500, yellow600, white} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

class JwcAppBar extends React.Component {
	render() {
		return (
			<AppBar title="Ecust JWC"
			        iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
			        iconElementRight={<IconButton><NavigationRefresh/></IconButton>}
			        onLeftIconButtonTouchTap={onLeftIconClick}
			        onRightIconButtonTouchTap={onRightIconClick}/>
		);
	}
}

function onRightIconClick() {
	EventBus.onRefreshData();
}
function onLeftIconClick() {
	EventBus.onToggleDrawer();
}

export default JwcAppBar;
