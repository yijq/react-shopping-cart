import React from 'react';
// import CartItem from 'components/CartItem';
import CartContainer from '../../containers/CartContainer'
import Checkout from 'components/Checkout';
import Footer from 'components/Footer';

const ShoppingCart = () => (
    <div style={{backgroundColor:'#ddd',overflow:'hidden'}}>
        {/* <CartItem /> */}
        <CartContainer />
        <Checkout />  
        <Footer /> 
    </div>
)

export default ShoppingCart;