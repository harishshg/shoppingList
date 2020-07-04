import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import  '../App.css';
import styled from "styled-components";


function Cart(props) {
const { image, basketProps} = props;

    let productsInCart = [];
    Object.keys(basketProps.products).forEach ( function(item){
      
      
      if(basketProps.products[item].inCart){
         productsInCart.push(basketProps.products[item])
       } 
      
    })

    productsInCart = productsInCart.map((product, index) => {
        return(
            <Fragment>
                <div className='product'><Image src={image} />
                <span className='sm-hide'>{product.name}</span>
                </div>
                <div className='price sm-hide'>{product.price}
                </div>
                <div className='quantity'>

                   <span>{product.numbers}</span> 
                </div>
               <div className="total">{productsInCart.numbers * product.price}</div> 
            </Fragment>
        )
    })
    return (
        <div className='container-products' >
             <div className='product-header'>
                <h5 className= 'product-title'>product</h5>
                <h5 className= 'product-title'>product</h5>
                <h5 className= 'product-title'>product</h5>
                <h5 className= 'product-title'>product</h5>
             </div> 
        <div className='products'>
             {productsInCart}
        </div>
           <div className='basketTotaContainer'>
               <h4 className='basketTotalTitle'> Basket Total
               </h4>
               <h4 className ='basketTotal'>{basketProps.cartCost}

               </h4>
           

            </div>  
        </div>
    )
}
const mapStateToProps = state => ({
    basketProps : state.basketState
});
export default connect(mapStateToProps) (Cart);


const Image = styled.img`
  height: 100%;
  width: 45px;
`;
 