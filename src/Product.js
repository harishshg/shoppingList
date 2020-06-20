import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Product(props) {
  const { description, image } = props;

  return (
    <ProdcutWrapper>
      <Image src={image} />
      <span>{description}</span>
    </ProdcutWrapper>
  );
}

Product.propTypes = {
  description: PropTypes.string,
};

export default Product;

const ProdcutWrapper = styled.div`
  height: 250px;
  width: 18%;
  margin: 1%;
  background-color: grey;
`;

const Image = styled.img`
  height: 200px;
  width: 100%;
`;
