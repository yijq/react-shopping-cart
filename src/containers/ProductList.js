import React from 'react';
import DisplayBox from '../components/DisplayBox';
import { connect } from 'react-redux';
import { addToCartUnsafe } from '../actions/actions';

const ProductList = ({products,addToCart}) => {
    // products.map((v,i)={}) 
    // console.log(addToCart);
    return (
        <div>
            {
                products.map((v,i)=>(<DisplayBox product={v} key={i} onAddToCart={()=>{addToCart(v.id)}}/>))
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {products: state.productList}
}

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps")
    return {
        addToCart: (id)=>{
            dispatch(addToCartUnsafe(id))
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(ProductList)