import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

// Ecommerce Redux States
import {
 GET_CART_DATA,
 GET_CUSTOMERS,
 GET_ORDERS,
 GET_PRODUCT_DETAIL,
 GET_PRODUCTS,
 GET_SHOPS,
 ADD_NEW_ORDER,
 DELETE_ORDER,
 UPDATE_ORDER,
 ADD_NEW_CUSTOMER,
 DELETE_CUSTOMER,
 UPDATE_CUSTOMER,
 GET_PRODUCT_COMMENTS,
 ON_LIKE_COMMENT,
 ON_LIKE_REPLY,
 ON_ADD_REPLY,
 ON_ADD_COMMENT,
 GET_CATEGORIES,
 ADD_CATEGORY,
 ADD_CATEGORY_SUCCESS,
 UPDATE_CATEGORY,
 UPDATE_CATEGORY_SUCCESS,
 DELETE_CATEGORY,
 DELETE_CATEGORY_SUCCESS,
 CATEGORY_ERROR,
 GET_CATEGORIES_SUCCESS,
 SHOW_CATEGORY,
 GET_MEASUREMENTS,
 ADD_MEASUREMENT,
 UPDATE_MEASUREMENT,
 DELETE_MEASUREMENT,
} from './actionTypes';
import {
 getCartDataFail,
 getCartDataSuccess,
 getCustomersFail,
 getCustomersSuccess,
 getOrdersFail,
 getOrdersSuccess,
 getProductDetailFail,
 getProductDetailSuccess,
 getProductsFail,
 getProductsSuccess,
 getShopsFail,
 getShopsSuccess,
 addOrderFail,
 addOrderSuccess,
 updateOrderSuccess,
 updateOrderFail,
 deleteOrderSuccess,
 deleteOrderFail,
 addCustomerFail,
 addCustomerSuccess,
 updateCustomerSuccess,
 updateCustomerFail,
 deleteCustomerSuccess,
 deleteCustomerFail,
 getProductCommentsSuccess,
 getProductCommentsFail,
 onLikeCommentSuccess,
 onLikeCommentFail,
 onLikeReplySuccess,
 onLikeReplyFail,
 onAddReplySuccess,
 onAddReplyFail,
 onAddCommentSuccess,
 onAddCommentFail,
 onGetCategoriesSuccess,
 onAddCategoriesSuccess,
 updateCategoryAction,
 onGetCategorySuccess,
} from './actions';

//Include Both Helper File with needed methods
import {
 getCartData,
 getCustomers,
 getOrders,
 getProducts,
 getShops,
 getProductDetail,
 addNewOrder,
 updateOrder,
 deleteOrder,
 addNewCustomer,
 updateCustomer,
 deleteCustomer,
 getProductComents as getProductComentsApi,
 onLikeComment as onLikeCommentApi,
 onLikeReply as onLikeReplyApi,
 onAddReply as onAddReplyApi,
 onAddComment as onAddCommentApi,
 deleteCategoryUrl,
 updateCategoryUrl,
 addCategoryUrl,
 getCategoriesUrl,
 showCategorysUrl,
 getMeasurementsUrl,
 showMeasurementUrl,
 addMeasurementUrl,
 updateMeasurementUrl,
 deleteMeasurementsUrl,
} from '../../helpers/fakebackend_helper';

// toast
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_MEASUREMENT } from '../../helpers/url_helper';

function* fetchProducts() {
 try {
  const response = yield call(getProducts);
  yield put(getProductsSuccess(response));
 } catch (error) {
  yield put(getProductsFail(error));
 }
}

function* fetchProductDetail({ productId }) {
 try {
  const response = yield call(getProductDetail, productId);
  yield put(getProductDetailSuccess(response));
 } catch (error) {
  yield put(getProductDetailFail(error));
 }
}

function* fetchOrders() {
 try {
  const response = yield call(getOrders);
  yield put(getOrdersSuccess(response));
 } catch (error) {
  yield put(getOrdersFail(error));
 }
}

function* fetchCartData() {
 try {
  const response = yield call(getCartData);
  yield put(getCartDataSuccess(response));
 } catch (error) {
  yield put(getCartDataFail(error));
 }
}

function* fetchCustomers() {
 try {
  const response = yield call(getCustomers);
  yield put(getCustomersSuccess(response));
 } catch (error) {
  yield put(getCustomersFail(error));
 }
}

function* onUpdateCustomer({ payload: customer }) {
 try {
  const response = yield call(updateCustomer, customer);
  yield put(updateCustomerSuccess(response));
  toast.success('به روز رسانی مشتری با موفقیت', { autoClose: 2000 });
 } catch (error) {
  yield put(updateCustomerFail(error));
  toast.error('به روز رسانی مشتری ناموفق بود', { autoClose: 2000 });
 }
}

function* onDeleteCustomer({ payload: customer }) {
 try {
  const response = yield call(deleteCustomer, customer);
  yield put(deleteCustomerSuccess(response));
  toast.success('مشتری با موفقیت حذف شد', { autoClose: 2000 });
 } catch (error) {
  yield put(deleteCustomerFail(error));
  toast.error('حذف مشتری انجام نشد', { autoClose: 2000 });
 }
}

function* onAddNewCustomer({ payload: customer }) {
 try {
  const response = yield call(addNewCustomer, customer);
  yield put(addCustomerSuccess(response));
  toast.success('مشتری با موفقیت اضافه شد', { autoClose: 2000 });
 } catch (error) {
  yield put(addCustomerFail(error));
  toast.error('مشتری اضافه نشد', { autoClose: 2000 });
 }
}

function* fetchShops() {
 try {
  const response = yield call(getShops);
  yield put(getShopsSuccess(response));
 } catch (error) {
  yield put(getShopsFail(error));
 }
}

function* onUpdateOrder({ payload: order }) {
 try {
  const response = yield call(updateOrder, order);
  yield put(updateOrderSuccess(response));
  toast.success('سفارش به روز رسانی با موفقیت انجام شد', { autoClose: 2000 });
 } catch (error) {
  yield put(updateOrderFail(error));
  toast.error('سفارش به روز رسانی انجام نشد', { autoClose: 2000 });
 }
}

function* onDeleteOrder({ payload: order }) {
 try {
  const response = yield call(deleteOrder, order);
  yield put(deleteOrderSuccess(response));
  toast.success('سفارش حذف با موفقیت انجام شد', { autoClose: 2000 });
 } catch (error) {
  yield put(deleteOrderFail(error));
  toast.error('سفارش حذف نشد', { autoClose: 2000 });
 }
}

function* onAddNewOrder({ payload: order }) {
 try {
  const response = yield call(addNewOrder, order);
  yield put(addOrderSuccess(response));
  toast.success('سفارش با موفقیت اضافه شد', { autoClose: 2000 });
 } catch (error) {
  yield put(addOrderFail(error));
  toast.error('سفارش اضافه شد ناموفق بود', { autoClose: 2000 });
 }
}

function* getProductComents() {
 try {
  // todo - add product Id to the payload and api
  const response = yield call(getProductComentsApi);
  yield put(getProductCommentsSuccess(response));
 } catch (error) {
  yield put(getProductCommentsFail(error));
 }
}

function* onLikeComment({ payload: { commentId, productId } }) {
 try {
  // todo - add product Id to the payload and api
  const response = yield call(onLikeCommentApi, commentId, productId);
  yield put(onLikeCommentSuccess(response));
 } catch (error) {
  yield put(onLikeCommentFail(error));
 }
}

function* onLikeReply({ payload: { commentId, productId, replyId } }) {
 try {
  // todo - add product Id to the payload and api
  const response = yield call(onLikeReplyApi, commentId, productId, replyId);
  yield put(onLikeReplySuccess(response));
 } catch (error) {
  yield put(onLikeReplyFail(error));
 }
}

function* onAddReply({ payload: { commentId, productId, replyText } }) {
 try {
  const response = yield call(onAddReplyApi, commentId, productId, replyText);
  yield put(onAddReplySuccess(response));
 } catch (error) {
  yield put(onAddReplyFail(error));
 }
}

function* onAddComment({ payload: { productId, commentText } }) {
 try {
  const response = yield call(onAddCommentApi, productId, commentText);
  yield put(onAddCommentSuccess(response));
 } catch (error) {
  yield put(onAddCommentFail(error));
 }
}

function* fetchCategories(action) {
 const page = action.payload || 1;
 try {
  const response = yield call(getCategoriesUrl, page);
  yield put(onGetCategoriesSuccess(response.data));
  toast.success(response.message);
 } catch (error) {
  toast.error(error.message);
  toast.error(error.response.data.message);
  yield put({ type: CATEGORY_ERROR, payload: error.message });
 }
}

function* showCategory(action) {
 console.log(action);
 try {
  const response = yield call(showCategorysUrl, action.payload);
  yield put(onGetCategorySuccess(response.data));
  toast.success(response.message);
 } catch (error) {
  toast.error(error.message);
  toast.error(error.response.data.message);
  yield put({ type: CATEGORY_ERROR, payload: error.message });
 }
}

function* addCategory(action) {

    try {
  const response = yield call(addCategoryUrl, action.payload);
  yield put(onAddCategoriesSuccess(action.payload));
  yield put({ type: GET_CATEGORIES, payload: action.payload });
  toast.success(response.message);
 } catch (error) {
  toast.error(error.message);
  yield put({ type: CATEGORY_ERROR, payload: error.message });
 }
}

function* updateCategory(action) {
 console.log(action);
 try {
  const response = yield call(updateCategoryUrl, action.payload);
  toast.success(response.message);
  yield put({ type: GET_CATEGORIES });
 } catch (error) {
  toast.error(error.message);
  toast.error(error.response.data.message);
  yield put({ type: CATEGORY_ERROR, payload: error.message });
 }
}

function* deleteCategory(action) {
 try {
  const response = yield call(deleteCategoryUrl, action.payload);
  yield put({ type: GET_CATEGORIES });
  toast.success(response.message);
 } catch (error) {
  toast.error(error.message);
  toast.error(error.response.data.message);
  yield put({ type: CATEGORY_ERROR, payload: error.message });
 }
}

function* fetchMeasurements(action) {
 const page = action.payload || 1;
 try {
  const response = yield call(getMeasurementsUrl, page);
  yield put(onGetCategoriesSuccess(response.data));
  toast.success(response.message);
 } catch (error) {
  toast.error(error.message);
  toast.error(error.response.data.message);
  yield put({ type: CATEGORY_ERROR, payload: error.message });
 }
}

function* showMeasurement(action) {
 try {
  const response = yield call(showMeasurementUrl, action.payload);
  yield put(onGetCategorySuccess(response.data));
  toast.success(response.message);
 } catch (error) {
  toast.error(error.message);
  toast.error(error.response.data.message);
  yield put({ type: CATEGORY_ERROR, payload: error.message });
 }
}

function* addMeasurement(action) {
 try {
  const response = yield call(addMeasurementUrl, action.payload);
  yield put(onAddCategoriesSuccess(action.payload));
  yield put({ type: GET_MEASUREMENTS, payload: 1 });
  toast.success(response.message);
 } catch (error) {
  toast.error(error.message);
  toast.error(error.response.data.message);
  yield put({ type: CATEGORY_ERROR, payload: error.message });
 }
}

function* updateMeasurement(action) {
 try {
  const response = yield call(updateMeasurementUrl, action.payload);
  toast.success(response.message);
  yield put({ type: GET_MEASUREMENTS });
 } catch (error) {
  toast.error(error.message);
  toast.error(error.response.data.message);
  yield put({ type: CATEGORY_ERROR, payload: error.message });
 }
}

function* deleteMeasurement(action) {
 try {
  const response = yield call(deleteMeasurementsUrl, action.payload);
  yield put({ type: GET_MEASUREMENTS });
  toast.success(response.message);
 } catch (error) {
  toast.error(error.message);
  toast.error(error.response.data.message);
  yield put({ type: CATEGORY_ERROR, payload: error.message });
 }
}

function* ecommerceSaga() {
 yield takeEvery(GET_PRODUCTS, fetchProducts);
 yield takeEvery(SHOW_CATEGORY, showCategory);
 yield takeEvery(GET_CATEGORIES, fetchCategories);
 yield takeEvery(ADD_CATEGORY, addCategory);
 yield takeEvery(UPDATE_CATEGORY, updateCategory);
 yield takeEvery(DELETE_CATEGORY, deleteCategory);
 yield takeEvery(SHOW_CATEGORY, showMeasurement);
 yield takeEvery(GET_MEASUREMENTS, fetchMeasurements);
 yield takeEvery(ADD_MEASUREMENT, addMeasurement);
 yield takeEvery(UPDATE_MEASUREMENT, updateMeasurement);
 yield takeEvery(DELETE_MEASUREMENT, deleteMeasurement);
 yield takeEvery(GET_PRODUCT_DETAIL, fetchProductDetail);
 yield takeEvery(GET_ORDERS, fetchOrders);
 yield takeEvery(GET_CART_DATA, fetchCartData);
 yield takeEvery(GET_CUSTOMERS, fetchCustomers);
 yield takeEvery(ADD_NEW_CUSTOMER, onAddNewCustomer);
 yield takeEvery(UPDATE_CUSTOMER, onUpdateCustomer);
 yield takeEvery(DELETE_CUSTOMER, onDeleteCustomer);
 yield takeEvery(GET_SHOPS, fetchShops);
 yield takeEvery(ADD_NEW_ORDER, onAddNewOrder);
 yield takeEvery(UPDATE_ORDER, onUpdateOrder);
 yield takeEvery(DELETE_ORDER, onDeleteOrder);
 yield takeEvery(GET_PRODUCT_COMMENTS, getProductComents);
 yield takeEvery(ON_LIKE_COMMENT, onLikeComment);
 yield takeEvery(ON_LIKE_REPLY, onLikeReply);
 yield takeEvery(ON_ADD_REPLY, onAddReply);
 yield takeEvery(ON_ADD_COMMENT, onAddComment);
}

export default ecommerceSaga;
