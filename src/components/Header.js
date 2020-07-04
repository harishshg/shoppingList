import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap';
import { FaSearch, FaCartPlus, FaStar } from 'react-icons/fa';
import {connect } from 'react-redux';
 import {getNumbers} from '../actions/getAction';
 import {Link } from 'react-router-dom';

 const Header = (props) => {
   useEffect(() => {
     getNumbers();
     
   }, [])
      const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: relative !important;
    left: 75%;
    right: 75%;
  }
`;
return (

<Styles >
    
  <Navbar bg="primary" variant="dark">
    <Nav>< FaStar /></Nav>
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button ><FaSearch /></Button>
      <Nav ><Link to ='/Cart'><FaCartPlus /></Link><span >{props.basketProps.basketNumbers}</span></Nav>
    </Form>
  </Navbar>

  <br />
</Styles>
)
           
          
        
    }
const mapStateToProps = state  => ({
  basketProps: state.basketState
})

export default connect (mapStateToProps, { getNumbers }) (Header);