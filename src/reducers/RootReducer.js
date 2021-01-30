import {combineReducers} from 'redux';
import ActionReducer from './ActionReducer'
import {reducer as formReducer} from 'redux-form';
import {reducer as burgerMenu} from 'redux-burger-menu';

const RootReducer = combineReducers({
    Actions: ActionReducer,
    form: formReducer,
    Burger: burgerMenu
});
export default RootReducer;