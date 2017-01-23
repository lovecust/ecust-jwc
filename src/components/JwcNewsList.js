/**
 * Created by fisher at 11:48 PM on 11/29/16.
 *
 * Jwc News list.
 */

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {purple900, yellow500, blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import EventBus from './EventBus';
import Constants from '../resources/Constants'

const iconStyles = {
	marginRight: 15,
};

class NewsAttachment extends React.Component {
	render() {
		return (<FontIcon className="material-icons" style={iconStyles} color={purple900}>attachment</FontIcon>);
	}
}

class JwcNewsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newses: []
		};
		let _this = this;
		EventBus.onNewsesUpdate = function (newses) {
			_this.setState({
				newses: newses
			});
		}
	}

	render() {
		let current = new Date();
		let getDateString = function (date) {
			return new Date(+date - date.getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 10);
		};
		let today = getDateString(current);
		let yesterday = getDateString(new Date(+current - 1 * 24 * 3600 * 1000));
		let getReadableDate = function (date) {
			if (today === date) {
				return 'Today';
			} else if (yesterday === date) {
				return 'Yesterday'
			} else {
				return date;
			}
		};
		let createItem = function (news) {
			return <ListItem
				leftAvatar={<FontIcon className="material-icons" style={iconStyles}
				                      color={purple900}>link</FontIcon>}
				rightIcon={news.attachments.length === 0 ? null :
					<Badge
						badgeContent={news.attachments.length}
						secondary={true}
					>
						<FontIcon className="material-icons" style={iconStyles} color={purple900}>attachment</FontIcon>
					</Badge>}
				primaryText={<a href={Constants.URL_ECUST_JWC + news.path}>{news.name}</a>}
				secondaryText={getReadableDate(news.date)}
			/>;
		};
		let tags = ['教务处综合信息', '培养与质量管理', '教学运行管理', '实践教学管理', '学院教务信息'];
		let newses = this.state.newses;
		let createList = function (index) {
			return (
				<List style={{margin: '0 auto', maxWidth: '850px'}}>
					<Subheader inset={true}>{tags[index]}</Subheader>
					{newses.map(function (news) {
						if (index === news.tag) {
							return createItem(news);
						}
					})}
				</List>
			);
		};
		let createLatestNewses = function () {
			// Newses should be sorted by date.
			// News count: n;
			// News interval: i.
			// n <= 3 || i <= 3 || n <= 12 && i <= 6
			let n = 1;
			return (
				newses.map(function (news) {
					let interval = +(current - new Date(news.date));
					if (n <= Constants.NEWS_COUNT_MIN
						|| interval <= Constants.NEWS_INTERVAL_MIN
						|| (n <= Constants.NEWS_COUNT_MAX && interval <= Constants.NEWS_INTERVAL_MAX)
					) {
						n++;
						return createItem(news);
					}
				})
			)
		};
		return (
			<div>
				<List style={{margin: '0 auto', maxWidth: '850px'}}>
					<Subheader inset={true}>Latest Newses</Subheader>
					{createLatestNewses()}
				</List>
				<Divider inset={true}/>
				{createList(0)}
				<Divider inset={true}/>
				{createList(1)}
				<Divider inset={true}/>
				{createList(2)}
				<Divider inset={true}/>
				{createList(3)}
				<Divider inset={true}/>
				{createList(4)}
			</div>
		);
	}
}

export default JwcNewsList;
