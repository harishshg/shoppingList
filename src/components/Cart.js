import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import '../App.css'
import { productQuantity, clearProduct} from '../actions/productQuantity'
import {BsPlusCircle} from 'react-icons/bs';
import {FiMinusCircle} from 'react-icons/fi';
import Dell from '../images/Dell.jpeg';
import Dell3000 from '../images/Dell3000.jpeg';
import DellInspiron from '../images/DellInspiron.jpeg';
import DellVostro from '../images/DellVostro.jpeg';
import Lenovo from '../images/Lenovo.jpeg';
import LenovoIdeapad from '../images/LenovoIdeapad.jpeg';
import LenovoThinkpad from '../images/LenovoThinkpad.jpeg';
import MacBook from '../images/MacBook.jpg';
import MacBookAir from '../images/MacBookAir.jpg';
import MacBookPro from '../images/MacBookPro.jpg';


function Cart(props) {
const { productQuantity, basketProps, clearProduct} = props;

    let productsInCart = [];
    Object.keys(basketProps.products).forEach ( function(item){
      
      
      if(basketProps.products[item].inCart){
         productsInCart.push(basketProps.products[item])
       } 
      
    })
const productImages = (product) => {
    if(product.tagName === 'Dell' ){
       return Dell; 
    }
    else if(product.tagName === 'Dell3000'){
        return Dell3000;
    }
    else if(product.tagName === 'DellInspiron'){
        return DellInspiron
    }
    else if(product.tagName === 'DellVostro'){
        return DellVostro;
    }
    else if(product.tagName === 'Lenovo'){
        return Lenovo;
    }
    else if(product.tagName === 'LenovoIdeapad'){
        return LenovoIdeapad
    }
    else if(product.tagName === 'LenovoThinkpad'){
        return LenovoThinkpad;
    }
    else if(product.tagName === 'MacBook'){
        return MacBook;
    }
    else if(product.tagName === 'MacBookAir'){
        return MacBookAir;
    }
    else if(product.tagName === 'MacBookPro'){
        return MacBookPro;
    }
};
 const style6 ={
     cursor: 'pointer',
 }
   
productsInCart = productsInCart.map((product, index ) => {
        return (
                <Fragment key={index}>
                    <div className='product'><img src={productImages(product)} alt='' />
                    <span className='sm-hide'>{product.name}</span>
                    </div>
                    <div className='price sm-hide'>{product.price}</div>
                    <div className='quantity' >
                        <FiMinusCircle className='decrease' onClick={() => productQuantity('decrease', product.tagName)} /> 
                            <span>{product.numbers}</span> 
                        <BsPlusCircle className='increase' onClick={() => productQuantity('increase', product.tagName)}/>  
                    </div>
                <div className="total" >{(productsInCart.numbers * product.price)}</div> 
                <div style={style6} onClick={() => clearProduct( product.tagName)}>Remove</div>
                </Fragment>
              )
    })
    return (
        <Fragment>
            <div className='container-products' >
                    
                <div className='products'>
                    {productsInCart }
                </div>
              
                </div>
                <div className='basketTotaContainer' >
                    <h4 className='basketTotalTitle' > Basket Total</h4>
                    <h4 className ='basketTotal' >{basketProps.cartCost}</h4>
                </div> 
     </Fragment>

    )
}
const mapStateToProps = state => ({
    basketProps : state.basketState
});
export default connect(mapStateToProps, {productQuantity, clearProduct }) (Cart);


