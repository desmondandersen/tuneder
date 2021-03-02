import { combineReducers } from 'redux';

import venues from './venues';
import musicians from './musicians';

export default combineReducers({ venues, musicians });
