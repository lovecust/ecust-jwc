/**
 * Created by fisher at 4:24 PM on 11/30/16.
 */

let Constants = {};

/**
 * 'lt' means LovecustT.
 */
Constants.KEY_PREFIX = 'lt.';
Constants.KEY_API_PREFIX = Constants.KEY_PREFIX + 'api.';
Constants.URL_API = 'http://apis.lovecust.com';
Constants.URL_API_JWC_NEWSES = Constants.URL_API + '/apis/ecust/jwc/newses';
Constants.URL_ECUST_JWC = 'http://jwc.ecust.edu.cn';

Constants.KEY_API_JWC_NEWSES = Constants.KEY_API_PREFIX + Constants.URL_API_JWC_NEWSES;

Constants.NEWS_COUNT_MIN = 3;
Constants.NEWS_COUNT_MAX = 12;
Constants.NEWS_INTERVAL_MIN = 3 * 24 * 3600 * 1000;
Constants.NEWS_INTERVAL_MAX = 6 * 24 * 3600 * 1000;
export default Constants;
