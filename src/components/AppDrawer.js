/**
 * Created by fisher at 11:32 PM on 11/29/16.
 *
 * App default drawer.
 */

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import EventBus from './EventBus';

const style = {
	margin: 10
};

class AppDrawer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
		EventBus.onToggleDrawer = this.handleToggle;
	}

	handleToggle = () => this.setState({open: !this.state.open});

	handleClose = () => this.setState({open: false});

	render() {
		let _this = this;
		let createItem = function (link) {
			return (<MenuItem onTouchTap={_this.handleClose}
			                  children={<a href={link.href}>{link.name}</a>}/>
			);
		};
		return (
			<div>
				<Drawer
					docked={false}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
				>
					<MenuItem onTouchTap={this.handleClose} children={
						<Avatar
							src="http://cdn.lovecust.com/images/favicon.png"
							size={40}
							style={style}
						/>
					}/>
					{this.props.items.map(createItem)}
				</Drawer>
			</div>
		);
	}
}
export default AppDrawer;