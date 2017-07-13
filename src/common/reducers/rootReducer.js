/**
 * Created by YUN on 2/6/17.
 */
import {combineReducers} from 'redux';
import PostsReducer from './postsReducer';
import CountReducer from '../../pages/Count/reducers/countReducer';

const rootReducer = combineReducers({
    posts:PostsReducer,
    count:CountReducer
});



export default rootReducer;