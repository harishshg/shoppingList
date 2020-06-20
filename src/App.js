import React, { Component } from "react";
import Product from "./Product";
import styled from "styled-components";

class App extends Component {
  state = {
    productList: [
      {
        id: 1,
        description: "MacBook Air",
        price: 100000,
        discount: 45,
        image:
          "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      },
      {
        id: 2,
        description: "Lenovo Thinkpad",
        price: 60000,
        discount: 30,
        image:
          "https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      },
      {
        id: 3,
        description: "Dell Inspiron",
        price: 50000,
        discount: 10,
        image:
          "https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      },
      {
        id: 4,
        description: "MacBook Air",
        price: 100000,
        discount: 45,
        image:
          "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      },
      {
        id: 5,
        description: "Lenovo Thinkpad",
        price: 60000,
        discount: 30,
        image:
          "https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      },
      {
        id: 6,
        description: "Dell Inspiron",
        price: 50000,
        discount: 10,
        image:
          "https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      },
      {
        id: 7,
        description: "MacBook Air",
        price: 100000,
        discount: 45,
        image:
          "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      },
      {
        id: 8,
        description: "Lenovo Thinkpad",
        price: 60000,
        discount: 30,
        image:
          "https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      },
      {
        id: 9,
        description: "Dell Inspiron",
        price: 50000,
        discount: 10,
        image:
          "https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200",
      },
    ],
  };
  render() {
    return (
      <Wrapper>
        {this.state.productList.map((p) => (
          <Product {...p} key={p.id} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-flow: row wrap;
`;
