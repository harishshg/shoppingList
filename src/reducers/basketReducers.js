import { ADD_PRODUCT_BASKET,  GET } from "../actions/types";


const initialState ={
    basketNumbers: 0,
    cartCost: 0,
    products: { 
        MacBookAir :{
            name: 'MacBook Air',
            price: 70000,
            numbers: 0,
            inCart: false

        },
        LenovoThinkpad :{
            name: ' Lenovo Thinkpad',
            price: 2000,
            numbers: 0,
            inCart: false

        },
        DellInspiron :{
            name: 'MacBook Air',
            price: 70000,
            numbers: 0,
            inCart: false

        

        },
        MacBook :{
            name: 'MacBook Air',
            price: 70000,
            numbers: 0,
            inCart: false

        }, Lenovo :{
            name: 'Lenovo',
            price: 70000,
            numbers: 0,
            inCart: false

        }, Dell :{
            name: 'Dell',
            price: 70000,
            numbers: 0,
            inCart: false

        }, MacBookPro :{
            name: 'MacBookPro',
            price: 70000,
            numbers: 0,
            inCart: false

        }, LenovoIdeapad :{
            name: 'LenovoIdeaPad',
            price: 70000,
            numbers: 0,
            inCart: false

        }, DellVostro :{
            name: 'DellVostro',
            price: 70000,
            numbers: 0,
            inCart: false

        }, Dell3000 :{
            name: 'Dell3000 ',
            price: 70000,
            numbers: 0,
            inCart: false

        },
    },
    } 

    
     


export default (state = initialState, action ) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = {...state.products[action.payload]}
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return{
                ...state,
                basketNumbers: state.basketNumbers +1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload] : addQuantity
                }
            }
            case  GET:
                return {
                    ...state
                }
        default: 
        return state ;
    }
}