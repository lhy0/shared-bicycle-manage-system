/**
 * reducer
 */

// import { combineReducers } from 'redux'
import { actionTypes } from './actionTypes';
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SWITCH_MENU:
            return {
                ...state,
                menuName:action.menuName
            };
        case actionTypes.LOGIN_IN:
            return {
                ...state,
                logged: true
            };
        default:
            return {...state};
    }
};

// const loginIn = (state, action) => {
//     switch (action.type) {
//         case actionTypes.LOGIN_IN:
//             return {
//                 ...state,
//                 logged: true
//             };
//         default:
//             return {...state};
//     }
// }

// export default combineReducers({
//     ebikeData,
//     loginIn
// });

export default reducer;