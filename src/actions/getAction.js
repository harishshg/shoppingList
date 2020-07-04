import {GET} from './types'

export const getNumbers = () => {
    return (dispatch ) => {
        console.log ('getting');
        dispatch({
            type:GET
        }); 
    }
}