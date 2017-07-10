/**
 * Created by YUN on 10/7/17.
 */
import * as actionType from '../../../constants/count';

function increaseCount () {
    return {
        type:actionType.INCREASE_COUNT,
        payload:1
    }
}

function decreaseCount() {
    return {
        type:actionType.DECREASE_COUNT,
        payload:1
    }
}

export {
    increaseCount,
    decreaseCount
}