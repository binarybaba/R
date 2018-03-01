import React from 'react';
import { render } from 'react-dom';
// import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';

/* const FooStyled = styled.div`
width: 100%;
height:14px;
background-color: aliceblue;
`; */

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>), document.getElementById('root'));
