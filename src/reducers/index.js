import { combineReducers} from 'redux';
import basketReducer from './basketReducers'


export default combineReducers({
 basketState: basketReducer
});