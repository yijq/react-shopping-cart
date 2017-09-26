import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux';

// const products = (state, action) => {
//     switch (action.type) {
//         case tpyes.ADD_TO_CART:{
//             return {
//                 ...state,
//                 inventry: state.inventry - 1
//             }
//         }
//     }
// }

// const byId = (state = {},action) => {

// }

// let productsState = [];

const productList = (state=[],action) => {
    console.log(action);
    switch (action.type) {
        
        case types.RECIVE_PRODUCTS: {
            for(const key in action.products){
                state.push(action.products[key])
            }

            return [
                ...state,
                ...action.products
            ]
        };
        case types.ADD_TO_CART: {
            console.log("ADD_TO_CART")
            state.forEach((v,i)=>{
                if(v.id === action.productId){
                    v.inventry = v.inventry - 1;
                    // productsState.push(v);
                }
                
            })

            return [
                ...state
            ]
        };
        default: {
            // console.log(action.type);
            // const { productId } = action;
            return [...state];
        }
    }
}

const carousel = (state = [], action) => {
    switch (action.type) {
        case types.RECIVE_CAROUSEL_PIC: {
            console.log("get pic========>")
            for (const key in action.carouselPics){
                state.push(action.carouselPics[key])
            }
            // console.log(state)
            return [...state];
        };
        default: {
            console.log(action.type)
            return [...state];
        }
    }
}

const cart = (state = [], action) => {
    switch (action.type) {
        case types.RECIVE_PRODUCTS: {
            for(const key in action.products){
                state.push(action.products[key])
            }

            return [
                ...state,
                ...action.products
            ]
        };
        case types.ADD_TO_CART: {
           console.log("getProductById:"+action.productId);
        //    console.log(productsState); 
        // dispatch('123');
        
        return [
            ...state
        ]
        };
        default: {
            return state;
        }
    }
}


export default combineReducers({
    productList,
    carousel,
    cart
});