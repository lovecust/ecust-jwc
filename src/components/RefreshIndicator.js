/**
 * Created by fisher at 4:42 PM on 11/30/16.
 */

import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import EventBus from './EventBus';

const style = {
	container: {
		position: 'absolute',
		right: 0,
		left: 0,
		top: '25%',
		textAlign: 'center'
	},
	refresh: {
		display: 'inline-block',
		position: 'relative',
	},
};

class AppRefreshIndicator extends React.Component {
	constructor(props) {
		super(props);
		let _this = this;
		this.state = {status: 'hide'};
		EventBus.showRefreshIndicator = function () {
			_this.setState({status: 'loading'});
		};
		EventBus.hideRefreshIndicator = function () {
			_this.setState({status: 'hide'});
		};
	}

	render() {
		return (
			<div style={style.container}>
				<RefreshIndicator
					size={50}
					left={70}
					top={0}
					loadingColor="#FF9800"
					status={this.state.status}
					style={style.refresh}
				/>
			</div>
		);
	}
}

export default AppRefreshIndicator;


