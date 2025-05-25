import {
 GET_CART_DATA_FAIL,
 GET_CART_DATA_SUCCESS,
 GET_CUSTOMERS_FAIL,
 GET_CUSTOMERS_SUCCESS,
 ADD_CUSTOMER_SUCCESS,
 ADD_CUSTOMER_FAIL,
 UPDATE_CUSTOMER_SUCCESS,
 UPDATE_CUSTOMER_FAIL,
 DELETE_CUSTOMER_SUCCESS,
 DELETE_CUSTOMER_FAIL,
 GET_ORDERS_FAIL,
 GET_ORDERS_SUCCESS,
 GET_PRODUCTS_FAIL,
 GET_PRODUCTS_SUCCESS,
 GET_SHOPS_FAIL,
 GET_SHOPS_SUCCESS,
 GET_PRODUCT_DETAIL_SUCCESS,
 GET_PRODUCT_DETAIL_FAIL,
 ADD_ORDER_SUCCESS,
 ADD_ORDER_FAIL,
 UPDATE_ORDER_SUCCESS,
 UPDATE_ORDER_FAIL,
 DELETE_ORDER_SUCCESS,
 DELETE_ORDER_FAIL,
 GET_PRODUCT_COMMENTS_SUCCESS,
 GET_PRODUCT_COMMENTS_FAIL,
 ON_LIKE_COMMENT_SUCCESS,
 ON_LIKE_REPLY_SUCCESS,
 ON_ADD_REPLY_SUCCESS,
 ON_ADD_COMMENT_SUCCESS,
 GET_CATEGORIES,
 GET_CATEGORIES_SUCCESS,
 ADD_CATEGORY,
 ADD_CATEGORY_SUCCESS,
 UPDATE_CATEGORY_SUCCESS,
 DELETE_CATEGORY_SUCCESS,
 UPDATE_CATEGORY,
 DELETE_CATEGORY,
 SHOW_CATEGORY,
 SHOW_CATEGORY_SUCCESS,
 GET_MEASUREMENTS,
 GET_MEASUREMENTS_SUCCESS,
 SHOW_MEASUREMENT,
 SHOW_MEASUREMENT_SUCCESS,
 ADD_MEASUREMENT,
 ADD_MEASUREMENT_SUCCESS,
 UPDATE_MEASUREMENT,
 UPDATE_MEASUREMENT_SUCCESS,
 DELETE_MEASUREMENT,
 DELETE_MEASUREMENT_SUCCESS,
} from './actionTypes';

const INIT_STATE = {
 products: [],
 product: {},
 orders: [],
 cartData: {},
 customers: [],
 shops: [],
 error: {},
 productComments: [],
 categories: [],
 category: [],
 measurements: [],
 measurement: [],
 loading: true,
};

const Ecommerce = (state = INIT_STATE, action) => {
 switch (action.type) {
  case GET_PRODUCTS_SUCCESS:
   return {
    ...state,
    products: action.payload,
    loading: true,
   };

  case GET_PRODUCTS_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case GET_PRODUCT_DETAIL_SUCCESS:
   return {
    ...state,
    product: action.payload,
   };

  case GET_PRODUCT_DETAIL_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case GET_ORDERS_SUCCESS:
   return {
    ...state,
    orders: action.payload,
    loading: true,
   };

  case GET_ORDERS_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case ADD_ORDER_SUCCESS:
   return {
    ...state,
    orders: [action.payload, ...state.orders],
   };

  case ADD_ORDER_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case UPDATE_ORDER_SUCCESS:
   return {
    ...state,
    orders: state.orders.map(order =>
     order.id.toString() === action.payload.id.toString()
      ? { order, ...action.payload }
      : order,
    ),
   };

  case UPDATE_ORDER_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case DELETE_ORDER_SUCCESS:
   return {
    ...state,
    orders: state.orders.filter(
     order => order.id.toString() !== action.payload.toString(),
    ),
   };

  case DELETE_ORDER_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case GET_CART_DATA_SUCCESS:
   return {
    ...state,
    cartData: action.payload,
   };

  case GET_CART_DATA_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case GET_CUSTOMERS_SUCCESS:
   return {
    ...state,
    customers: action.payload,
    loading: true,
   };

  case GET_CUSTOMERS_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case ADD_CUSTOMER_SUCCESS:
   return {
    ...state,
    customers: [action.payload, ...state.customers],
   };

  case ADD_CUSTOMER_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case UPDATE_CUSTOMER_SUCCESS:
   return {
    ...state,
    customers: state.customers.map(customer =>
     customer.id.toString() === action.payload.id.toString()
      ? { customer, ...action.payload }
      : customer,
    ),
   };

  case UPDATE_CUSTOMER_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case DELETE_CUSTOMER_SUCCESS:
   return {
    ...state,
    customers: state.customers.filter(
     customer => customer.id.toString() !== action.payload.toString(),
    ),
   };

  case DELETE_CUSTOMER_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case GET_SHOPS_SUCCESS:
   return {
    ...state,
    shops: action.payload,
    loading: true,
   };

  case GET_SHOPS_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case GET_PRODUCT_COMMENTS_SUCCESS:
  case ON_LIKE_COMMENT_SUCCESS:
  case ON_LIKE_REPLY_SUCCESS:
  case ON_ADD_REPLY_SUCCESS:
  case ON_ADD_COMMENT_SUCCESS:
   return {
    ...state,
    productComments: action.payload,
   };

  case GET_PRODUCT_COMMENTS_FAIL:
   return {
    ...state,
    error: action.payload,
   };

  case GET_CATEGORIES:
   return {
    ...state,
    loading: true,
   };

  case GET_CATEGORIES_SUCCESS:
   return {
    ...state,
    categories: action.payload,
    loading: false,
   };

  case SHOW_CATEGORY:
   return {
    ...state,
    loading: true,
   };

  case SHOW_CATEGORY_SUCCESS:
   return {
    ...state,
    category: action.payload,
    loading: false,
   };

  case ADD_CATEGORY:
   return {
    ...state,
   };

  case ADD_CATEGORY_SUCCESS:
   return {
    ...state,
    categories: [...state.categories.items, action.payload],
    loading: false,
   };

  case UPDATE_CATEGORY:
   return { ...state };

  case UPDATE_CATEGORY_SUCCESS:
   return { ...state };

  case DELETE_CATEGORY:
   return { ...state };

  case DELETE_CATEGORY_SUCCESS:
   return {
    ...state,
    categories: state.categories.items.filter(
     id => !action.payload.includes(id),
    ),
   };

  case GET_MEASUREMENTS:
   return {
    ...state,
    loading: true,
   };

  case GET_MEASUREMENTS_SUCCESS:
   return {
    ...state,
    measurements: action.payload,
    loading: false,
   };

  case SHOW_MEASUREMENT:
   return {
    ...state,
    loading: true,
   };

  case SHOW_MEASUREMENT_SUCCESS:
   return {
    ...state,
    measurement: action.payload,
    loading: false,
   };

  case ADD_MEASUREMENT:
   return {
    ...state,
   };

  case ADD_MEASUREMENT_SUCCESS:
   return {
    ...state,
    measurements: [...state.categories.items, action.payload],
    loading: false,
   };

  case UPDATE_MEASUREMENT:
   return { ...state };

  case UPDATE_MEASUREMENT_SUCCESS:
   return { ...state };

  case DELETE_MEASUREMENT:
   return { ...state };

  case DELETE_MEASUREMENT_SUCCESS:
   return {
    ...state,
    measurements: state.categories.items.filter(
     id => !action.payload.includes(id),
    ),
   };

  default:
   return state;
 }
};

export default Ecommerce;
