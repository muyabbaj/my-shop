import {actionTypes} from '../constants/action-types'
const initialState={
    products:[]
}
 export const productReducer=(state=initialState,action)=>{
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {...state,products:action.payload}; 
        default:
            return state;
    }
}
export const selectProductReducer=(state={},{type,payload})=>{
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return {...state,...payload}
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}