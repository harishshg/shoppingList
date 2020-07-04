import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {connect} from 'react-redux'
import { addBasket } from "../actions/addAction";



function Product(props) {
 
  const { description, image, price, discount, addBasket} = props;
  const style1={
    textDecorationLine: "line-through",
    color: "grey"
  }
  const style2={
    color: "green"
  }
  

  return (
    <ProdcutWrapper>
      <Image src={image} />
      <Description>{description}</Description>
      <PriceWrapper>
  <span>&#8377;{price}</span>
  <span style ={style1} >{((discount*price)/100)+price }</span>
        <span style ={style2} >{discount}% off</span>
        
      </PriceWrapper>

      <div align="center" onClick={addBasket}><Button >Add to Cart</Button></div>

    </ProdcutWrapper>
    
  );
}


Product.propTypes = {
  description: PropTypes.string,
};

export default connect (null, {addBasket}) (Product);

const ProdcutWrapper = styled.div`
  height: 280px;
  width: 18%;
  margin: 1%;
`;

const Image = styled.img`
  height: 75%;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #ffb84d ;
  padding:5px;
  font-weight: bold;

  
`;

const PriceWrapper = styled.div`
display:flex;
justify-content: space-between;
margin-top: 5px;
margin-bottom: 5px;
font-weight: bold;

`
const Description = styled.span`
border: 5px 0px;
`
