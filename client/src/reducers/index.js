import {combineReducers} from 'redux';
import kilowattReducer from './kilowattReducer';

export default combineReducers({
  kilowatts: kilowattReducer
})
