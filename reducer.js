
//łączenie reduktorów za pomocą funkcji pomocniczej combineReducers
import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

//stan początkowy aplikacji
const initialState = {
    comments: [],
    users: []
};

//główny reducer
const app = combineReducers({
    comments,
    users
});