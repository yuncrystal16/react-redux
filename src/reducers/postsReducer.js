/**
 * Created by YUN on 16/6/17.
 */

// Reducer 的返回值，被存在state中
import * as actionType from '../constants/posts';
import _ from 'lodash';


/**
 * 使用axios + redux-promise时，返回action.payload.data
 * 使用 fetch +redux-promise时，返回action.payload
 * 在该function中，reducer没有处理 actionType.CREATE_POST 因为执行action后，这个操作返回了
 * postList页面，state在此时更新
 * @param state
 * @param action
 * @returns {*}
 */
function postsReducer(state = {}, action) {
    // console.log('reducers.action',action);
    switch (action.type) {
        case actionType.FETCH_POSTS:
            return _.mapKeys(action.payload.data,(obj)=>{
                return obj.id
            });
            // return action.payload.data;

        case actionType.FETCH_POST:
            return {...state, [action.payload.data.id]:action.payload.data};

        case actionType.DELETE_POST:
            return _.omit(state,action.payload);

        default:
            return state;
    }
}

export default postsReducer;

