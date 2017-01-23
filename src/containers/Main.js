/**
 * Created by fisher at 12:11 AM on 11/30/16.
 *
 * App Main Module.
 */
import React from 'react';
import AppBar from '../components/AppBar';
import AppDrawer from '../components/AppDrawer';
import JwcNewsList from '../components/JwcNewsList';
import AppRefreshIndicator from '../components/RefreshIndicator';
import NetworkJWC from './../../network/ecust/jwc';
import EventBus from '../components/EventBus';
import LocalStorage from '../libs/LocalStorage';
import Constants from '../resources/Constants';

let links = [{
	name: '华理主页',
	href: 'http://www.ecust.edu.cn/'
}, {
	name: '图书馆',
	href: 'http://lib.ecust.edu.cn/'
}, {
	name: '教务处',
	href: 'http://jwc.ecust.edu.cn/'
}, {
	name: '信息办',
	href: 'http://xxb.ecust.edu.cn/'
}, {
	name: '学生评教系统',
	href: 'http://pjb.ecust.edu.cn/pingce/'
}, {
	name: '教师平台',
	href: 'http://202.120.108.14/ecustedu/TeacherDefault.aspx'
}, {
	name: '重读选课平台',
	href: 'http://59.78.109.103/ecustRLMS/index.aspx'
}, {
	name: '学生选课平台',
	href: 'http://202.120.108.14/xk1.asp'
}, {
	name: '综合查询(学生、教师、家长）',
	href: 'http://202.120.108.14/ecustedu/K_StudentQuery/K_Default.aspx'
}];

EventBus.onRefreshData = function () {
	console.log('b');
	EventBus.showRefreshIndicator();
	EventBus.onNewsesUpdate([]);
	NetworkJWC.newsesList().then(function (json) {
		if (LocalStorage.available()) {
			console.log('Saved newses into caches', json);
			LocalStorage.set(Constants.KEY_API_JWC_NEWSES, json);
		}
		EventBus.hideRefreshIndicator();
		EventBus.onNewsesUpdate(json);
	}).catch(function (ex) {
		console.log('Get newses list failed', ex);
	})
};

// post run method.
EventBus.addOnInitializedListener(function () {
	if (LocalStorage.available()) {
		let newses = LocalStorage.get(Constants.KEY_API_JWC_NEWSES);
		if (newses) {
			console.log('Got newses from caches', newses);
			EventBus.onNewsesUpdate(newses);
		} else {
			EventBus.onRefreshData();
		}
	} else {
		EventBus.onRefreshData();
	}
});


// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
class Main extends React.Component {
	render = () => (
		<div>
			<AppBar />
			<AppRefreshIndicator/>
			<AppDrawer items={links}/>
			<JwcNewsList/>
		</div>
	);
}

export default Main;

