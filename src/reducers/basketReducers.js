import { ADD_PRODUCT_BASKET,  GET, INCREASE, DECREASE, CLEAR } from "../actions/types";

const initialState ={
    basketNumbers: 0,
    cartCost: 0,
    products: { 
        MacBookAir :{
            name: 'MacBookAir',
            tagName:'MacBookAir',
            price: 120000,
            numbers: 0,
            inCart: false

        },
        LenovoThinkpad :{
            name: ' LenovoThinkpad',
            tagName:'LenovoThinkpad',
            price: 90000,
            numbers: 0,
            inCart: false

        },
        DellInspiron :{
            name: 'DellInspiron',
            tagName:'DellInspiron',
            price: 70000,
            numbers: 0,
            inCart: false
        },
        MacBook :{
            name: 'MacBook',
            tagName:'MacBook',
            price: 120000,
            numbers: 0,
            inCart: false

        }, Lenovo :{
            name: 'Lenovo',
            tagName:'Lenovo',
            price: 90000,
            numbers: 0,
            inCart: false

        }, Dell :{
            name: 'Dell',
            tagName: 'Dell',
            price: 70000,
            numbers: 0,
            inCart: false

        }, MacBookPro :{
            name: 'MacBookPro',
            tagName:'MacBookPro',
            price: 120000,
            numbers: 0,
            inCart: false

        }, LenovoIdeapad :{
            name: 'LenovoIdeaPad',
            tagName:'LenovoIdeapad',
            price: 90000,
            numbers: 0,
            inCart: false

        }, DellVostro :{
            name: 'DellVostro',
            tagName:'DellVostro',
            price: 70000,
            numbers: 0,
            inCart: false

        }, Dell3000 :{
            name: 'Dell3000',
            tagName: 'Dell3000',
            price: 60000,
            numbers: 0,
            inCart: false

        },
    },
    } 

export default (state = initialState, action ) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = {...state.products[action.payload]}
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);
            return{
                ...state,
                basketNumbers: state.basketNumbers +1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
            case  GET:
                return {
                    ...state
                }
            case  INCREASE:
                productSelected =  {...state.products[action.payload]}
                productSelected.numbers += 1;
                 return {
                     ...state,
                     basketNumbers: state.basketNumbers + 1,
                     cartCost: state.cartCost + state.products[action.payload].price,
                     products:{
                         ...state.products,
                         [action.payload]: productSelected
                     }
            }
             case  DECREASE:
                productSelected =  {...state.products[action.payload]};
                let newCartCost = 0;
                let newBasket = 0;
                if( productSelected.numbers === 0){
                    productSelected.numbers = 0;
                    newCartCost = state.cartCost
                    newBasket = state.basketNumbers
                }else{
                    productSelected.numbers -= 1;
                    newCartCost = state.cartCost -state.products[action.payload].price
                    newBasket = state.basketNumbers - 1
                }
             
                 return {
                     ...state,
                    basketNumbers : newBasket,
                     cartCost: newCartCost, 
                     products:{
                         ...state.products,
                         [action.payload]: productSelected
                     }
            }
            case CLEAR:
                productSelected = {...state.products[action.payload]};
                let numberBackup = productSelected.numbers;
                productSelected.numbers = 0;
                productSelected.inCart = false;
                return{
                    ...state,
                    basketNumbers: state.basketNumbers - numberBackup,
                    cartCost: state.cartCost - (numberBackup * productSelected),
                    products:{
                        ...state.products,
                        [action.payload]: productSelected
                    }

                }
        default: 
        return state ;
    }
}