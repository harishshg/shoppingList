import React, {
  Component,
 
} from "react";
import Product from "./components/Product";
import styled from "styled-components";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from './store';
import Cart from './components/Cart';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends Component {
  state = {
    productList: []
  }
  componentDidMount() {
    fetch("http://localhost:3001/productList").then(res => res.json()).then(data => this.setState({
      productList: data
    }))
  }
  render() {
    return (
      <Provider store = {store}>
      <div className='App'>
      <BrowserRouter>
         <Header />
          <Switch>
           
          <Route path ="/cart" component={Cart}/>
         
          <Wrapper>
            {
              this.state.productList.map((p) => (< Product {...p} key={p.id} />))}
          </ Wrapper>  </Switch>
      </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
const Wrapper = styled.div `
  margin-left: 20px;
  display: flex;
  flex-flow: row wrap;
  background-color: #e9eefb;
`;