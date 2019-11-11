
//łączenie reduktorów za pomocą funkcji pomocniczej combineReducers
import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

//stan początkowy aplikacji
const initialState = {
    comments: [],
    users: []
};

const app = combineReducers({
    comments,
    users
});

//główny reducer
function app(state = initialState, action) {
    return {
        comments: comments(state.comments, action),
        users: users(state.users, action)
    };
}

