import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Router, Route, Link, IndexRoute} from 'react-router';
import { browserHistory,hashHistory } from 'react-router'

import Home from 'pages/Home/Home';
import Shop from 'pages/Shop/Shop';
import ProductInfo from 'pages/ProductInfo/ProductInfo';
import ShoppingCart from 'pages/ShoppingCart/Shoppingcart';
import MyRouter from 'pages/router/router.js';

import { getAllProducts,getCarouselPics } from './actions/actions';
import reducer from './reducers/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middleware = [ thunk ];
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
  )

store.dispatch(getCarouselPics())
store.dispatch(getAllProducts());
// getAllProducts();
// 模块热替换
// if (module.hot) {
//     module.hot.accept(Home,function(){
//         console.log('hot replace home')
//     });
// }


ReactDOM.render(
<Provider store={store}>
    <Router history={browserHistory}>
        
        <Route path="/" component={MyRouter}>
            <Route path="productInfo" component={ProductInfo}/>
            <Route path="home" component={Home} />
            <Route path="shop" component={Shop} />
            <Route path="shoppingCart" component={ShoppingCart}/>
        </Route>
        
    </Router>
    </Provider>
    ,
    document.getElementById('App')
)
