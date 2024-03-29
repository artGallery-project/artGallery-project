import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducer, productsReducer } from './reducer/productReducer';
import { authReducer, forgotPasswordReducer, userReducer } from './reducer/userReducer';
/* import { cartReducer } from './reducer/cartReducer';
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from './reducer/orderReducer'; */

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  //cart: cartReducer,
  //newProduct: newProductReducer,
  //product: productReducer,
  //newOrder: newOrderReducer,
  //myOrders: myOrdersReducer,
  //orderDetails: orderDetailsReducer
})

let initialState = {
  /* cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingInfo: localStorage.getItem('shippingInfo')
      ? JSON.parse(localStorage.getItem('shippingInfo'))
      : {}
  } */
}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;