import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
    posts_reducer: PostsReducer

});

export default rootReducer;
