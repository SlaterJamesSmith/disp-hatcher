import memberListReducer from './member-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterMemberList: memberListReducer
});

export default rootReducer;
