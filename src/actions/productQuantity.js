import {INCREASE, DECREASE, CLEAR} from './types';

export const productQuantity = (action, name) => {
    return (dispatch) => {
        console.log('inside');
        console.log('the action', action);
        console.log('the name', name);
        dispatch({
            type: action === "increase" ? INCREASE : DECREASE,
            payload: name
        })
    }
}

export const clearProduct = (name) => {
    return (dispatch) => {
        console.log('inside clear');
        console.log('product name', name);
        dispatch({
            type: CLEAR,
            payload: name
        })
    }
}