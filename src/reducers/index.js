import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
    posts_reducer: PostsReducer,
    form: formReducer
});

export default rootReducer;
