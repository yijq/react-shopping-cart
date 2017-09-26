import * as types from './actionTypes';
import { combineReducers } from 'redux';

const reciveProducts = (products) => {
    return {
        type: types.RECIVE_PRODUCTS,
        products
    }
}

export const getAllProducts = () => (dispatch) => {
    fetch('./api/productInfo.json',{credentials: 'include'})
    .then(response => {return response.json()})
    .then(json => {console.log("action RECIVE_PRODUCTS==========>");dispatch(reciveProducts(json));console.log("dispatched")})
}

export const addToCartUnsafe = (productId) => ({
    type: types.ADD_TO_CART,
    productId
})

// export const addToCart = (productId) => (dispatch) => {
//     console.log(productId);
//     // console.log(getState);
//     // getState
//     // if (getState.products.byId[productId].inventory > 0) {
//         dispatch(addToCartUnsafe(productId))
//     // }
// }

const reciveCarouselPic = (carouselPics) => {
    return {
        type: types.RECIVE_CAROUSEL_PIC,
        carouselPics
    }
}

export const getCarouselPics = () => (dispatch) => {
    fetch('./api/carouselInfo.json')
    .then(response => {console.dir(response) ;return response.json()})
    .then(json => {console.log("action RECIVE_CAROUSEL_PIC==========>");dispatch(reciveCarouselPic(json));console.log("dispatched")})
}

// export default combineReducers({
//     getAllProducts,
//     getCarouselPics
// })


