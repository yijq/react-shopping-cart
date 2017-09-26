import React from 'react';
import CartItem from '../components/CartItem';
import { connect } from 'react-redux';

const CartContainer = ({products}) => {
    let cartItems = [];
    products.forEach((v,i)=>{
        cartItems.push(<CartItem product={v} key={v.id}/>)
    })
    return (
        <div>
            {cartItems}
        </div>
    )
}

const mapStatetoProps = (state) => ({
    products: state.cart
});

export default connect(mapStatetoProps)(CartContainer);