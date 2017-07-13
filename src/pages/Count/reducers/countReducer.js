/**
 * Created by YUN on 10/7/17.
 */
import * as actionType from '../../../common/constants/count'

function countReducer(state = 0, action) {
    switch (action.type) {
        case actionType.INCREASE_COUNT:
           return state+1;
        case actionType.DECREASE_COUNT:
            return state-1;
        default:
            return state;
    }
}

export default countReducer;