/**
 * Created by fisher at 6:47 PM on 1/8/17.
 */

'use strict';

import LocalStorage from './LocalStorage';

let KEY_ECUST_JWC_NEWSES = 'lt.ecust.jwc.newses';

let Util = {};
Util.getNewsesCache = () => {
	return LocalStorage.get(KEY_ECUST_JWC_NEWSES);
};

Util.setNewsesCache = (status) => {
	LocalStorage.set(KEY_ECUST_JWC_NEWSES, status, {expiration: +new Date() + 2 * 60 * 60 * 1000});
};

export default Util;

