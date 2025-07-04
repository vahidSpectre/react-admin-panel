import axios from 'axios';
import { del, get, post, put, patch } from './api_helper';
import * as url from './url_helper';

// Gets the logged in user data from local session
const getLoggedInUser = () => {
 const user = localStorage.getItem('user');
 if (user) return JSON.parse(user);
 return null;
};

//is user is logged in
const isUserAuthenticated = () => {
 return getLoggedInUser() !== null;
};

// Register Method
const postFakeRegister = data => {
 return axios
  .post(url.POST_FAKE_REGISTER, data)
  .then(response => {
   if (response.status >= 200 || response.status <= 299) return response.data;
   throw response.data;
  })
  .catch(err => {
   let message;
   if (err.response && err.response.status) {
    switch (err.response.status) {
     case 404:
      message = 'متاسفانه! صفحه مورد نظر شما یافت نشد';
      break;
     case 500:
      message = 'متاسفانه! مشکلی پیش آمد، لطفاً با تیم پشتیبانی ما تماس بگیرید';
      break;
     case 401:
      message = 'گواهی نامه نامعتبر';
      break;
     default:
      message = err[1];
      break;
    }
   }
   throw message;
  });
};

// Login Method
const postFakeLogin = data => post(url.POST_FAKE_LOGIN, data);

// postForgetPwd
const postFakeForgetPwd = data => post(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
const postJwtProfile = data => post(url.POST_EDIT_JWT_PROFILE, data);

const postFakeProfile = data => post(url.POST_EDIT_PROFILE, data);

// Register Method
const postJwtRegister = (url, data) => {
 return axios
  .post(url, data)
  .then(response => {
   if (response.status >= 200 || response.status <= 299) return response.data;
   throw response.data;
  })
  .catch(err => {
   var message;
   if (err.response && err.response.status) {
    switch (err.response.status) {
     case 404:
      message = 'متاسفانه! صفحه مورد نظر شما یافت نشد';
      break;
     case 500:
      message = 'متاسفانه! مشکلی پیش آمد، لطفاً با تیم پشتیبانی ما تماس بگیرید';
      break;
     case 401:
      message = 'گواهی نامه نامعتبر';
      break;
     default:
      message = err[1];
      break;
    }
   }
   throw message;
  });
};

// Login Method
const postJwtLogin = data => post(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
const postJwtForgetPwd = data => post(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = data => post(url.SOCIAL_LOGIN, data);

// get Products
export const getProducts = () => get(url.GET_PRODUCTS);

// categories CRUD
export const getCategoriesUrl = page =>
 get(`${url.GET_CATEGORIES}?page=${page}`, page);

export const showCategorysUrl = id => get(`${url.SHOW_CATEGORIES}/${id}`);

export const addCategoryUrl = data => post(url.ADD_CATEGORIES, data);

export const updateCategoryUrl = data =>
 patch(`${url.UPDATE_CATEGORIES}/${data.id}`, data);

export const deleteCategoryUrl = data => post(`${url.DELETE_CATEGORIES}`, data);

// Measurements CRUD
export const getMeasurementsUrl = (page=1) =>
 get(`${url.GET_MEASUREMENT}?page=${page}`, page);

export const showMeasurementUrl = id => get(`${url.SHOW_MEASUREMENT}/${id}`);

export const addMeasurementUrl = data => post(url.ADD_MEASUREMENT, data);

export const updateMeasurementUrl = data =>
 patch(`${url.UPDATE_MEASUREMENT}/${data.id}`, data);

export const deleteMeasurementsUrl = data =>
 post(`${url.DELETE_MEASUREMENT}`, data);

// get Product detail
export const getProductDetail = id =>
 get(`${url.DELETE_CATEGORIES}/${id}`, { params: { id } });

// get Events
export const getEvents = () => get(url.GET_EVENTS);

// add Events
export const addNewEvent = event => post(url.ADD_NEW_EVENT, event);

// update Event
export const updateEvent = event => put(url.UPDATE_EVENT, event);

// delete Event
export const deleteEvent = event =>
 del(url.DELETE_EVENT, { headers: { event } });

// get Categories
// export const getCategories = () => get(url.GET_CATEGORIES);

//Email Chart
export const getDashboardEmailChart = chartType =>
 get(`${url.GET_DASHBOARD_EMAILCHART}/${chartType}`, { param: chartType });

// get chats
export const getChats = () => get(url.GET_CHATS);

// get groups
export const getGroups = () => get(url.GET_GROUPS);

// get Contacts
export const getContacts = () => get(url.GET_CONTACTS);

// get messages
export const getMessages = roomId =>
 get(`${url.GET_MESSAGES}/${roomId}`, { params: { roomId } });

// post messages
export const getselectedmails = selectedmails =>
 post(url.GET_SELECTED_MAILS, selectedmails);

//post setfolderonmails
export const setfolderonmails = (selectedmails, folderId, activeTab) =>
 post(url.SET_FOLDER_SELECTED_MAILS, { selectedmails, folderId, activeTab });

// get orders
export const getOrders = () => get(url.GET_ORDERS);

// add order
export const addNewOrder = order => post(url.ADD_NEW_ORDER, order);

// update order
export const updateOrder = order => put(url.UPDATE_ORDER, order);

// delete order
export const deleteOrder = order =>
 del(url.DELETE_ORDER, { headers: { order } });

// get cart data
export const getCartData = () => get(url.GET_CART_DATA);

// get customers
export const getCustomers = () => get(url.GET_CUSTOMERS);

// add CUSTOMER
export const addNewCustomer = customer => post(url.ADD_NEW_CUSTOMER, customer);

// update CUSTOMER
export const updateCustomer = customer => put(url.UPDATE_CUSTOMER, customer);

// delete CUSTOMER
export const deleteCustomer = customer =>
 del(url.DELETE_CUSTOMER, { headers: { customer } });

// get shops
export const getShops = () => get(url.GET_SHOPS);

// get wallet
export const getWallet = () => get(url.GET_WALLET);

// get crypto order
export const getCryptoOrder = () => get(url.GET_CRYPTO_ORDERS);

// get crypto product
export const getCryptoProduct = () => get(url.GET_CRYPTO_PRODUCTS);

// get invoices
export const getInvoices = () => get(url.GET_INVOICES);

// get invoice details
export const getInvoiceDetail = id =>
 get(`${url.GET_INVOICE_DETAIL}/${id}`, { params: { id } });

// get jobs
export const getJobList = () => get(url.GET_JOB_LIST);

// get Apply Jobs
export const getApplyJob = () => get(url.GET_APPLY_JOB);

// get project
export const getProjects = () => get(url.GET_PROJECTS);

// get project details
export const getProjectsDetails = id =>
 get(`${url.GET_PROJECT_DETAIL}/${id}`, { params: { id } });

// get tasks
export const getTasks = () => get(url.GET_TASKS);

// add CardData Kanban
export const addCardData = cardData => post(url.ADD_CARD_DATA, cardData);

// update jobs
export const updateCardData = card => put(url.UPDATE_CARD_DATA, card);

// delete Kanban
export const deleteKanban = kanban =>
 del(url.DELETE_KANBAN, { headers: { kanban } });

// get contacts
export const getUsers = () => get(url.GET_USERS);

// add user
export const addNewUser = user => post(url.ADD_NEW_USER, user);

// update user
export const updateUser = user => put(url.UPDATE_USER, user);

// delete user
export const deleteUser = user => del(url.DELETE_USER, { headers: { user } });

// add jobs
export const addNewJobList = job => post(url.ADD_NEW_JOB_LIST, job);

// update jobs
export const updateJobList = job => put(url.UPDATE_JOB_LIST, job);

// delete jobs
export const deleteJobList = job =>
 del(url.DELETE_JOB_LIST, { headers: { job } });

// Delete Apply Jobs
export const deleteApplyJob = data =>
 del(url.DELETE_APPLY_JOB, { headers: { data } });

/** PROJECT */

// update user
export const updateProject = project => put(url.UPDATE_PROJECT, project);

// delete user
export const deleteProject = project =>
 del(url.DELETE_PROJECT, { headers: { project } });

export const getUserProfile = () => get(url.GET_USER_PROFILE);

// get maillist
export const getMailsLists = filter =>
 post(url.GET_MAILS_LIST, { params: filter });

//update mail
export const deleteMail = mail => del(url.DELETE_MAIL, { headers: { mail } });
export const trashMail = mail => del(url.TRASH_MAIL, { headers: { mail } });
export const staredMail = mail => del(url.STARED_MAIL, { headers: { mail } });
export const getMailsListsId = id =>
 get(`${url.GET_MAILS_ID}/${id}`, { params: { id } });

// get folderlist
export const selectFolders = () => get(url.SELECT_FOLDER);

// post messages
export const addMessage = message => post(url.ADD_MESSAGE, message);
// delete message
export const deleteMessage = data =>
 del(url.DELETE_MESSAGE, { headers: { data } });

export const walletBalanceData = roomId =>
 get(`${url.GET_WALLET_DATA}/${roomId}`, { params: { roomId } });

export const getStatisticData = roomId =>
 get(`${url.GET_STATISTICS_DATA}/${roomId}`, { params: { roomId } });

export const visitorData = roomId =>
 get(`${url.GET_VISITOR_DATA}/${roomId}`, { params: { roomId } });

export const topSellingData = month =>
 get(`${url.TOP_SELLING_DATA}/${month}`, { params: { month } });

export const getEarningChartsData = month =>
 get(`${url.GET_EARNING_DATA}/${month}`, { params: { month } });

const getProductComents = () => get(url.GET_PRODUCT_COMMENTS);

const onLikeComment = (commentId, productId) => {
 return post(`${url.ON_LIKNE_COMMENT}/${productId}/${commentId}`, {
  params: { commentId, productId },
 });
};
const onLikeReply = (commentId, productId, replyId) => {
 return post(`${url.ON_LIKNE_COMMENT}/${productId}/${commentId}/${replyId}`, {
  params: { commentId, productId, replyId },
 });
};

const onAddReply = (commentId, productId, replyText) => {
 return post(`${url.ON_ADD_REPLY}/${productId}/${commentId}`, {
  params: { commentId, productId, replyText },
 });
};

const onAddComment = (productId, commentText) => {
 return post(`${url.ON_ADD_COMMENT}/${productId}`, {
  params: { productId, commentText },
 });
};

export {
 getLoggedInUser,
 isUserAuthenticated,
 postFakeRegister,
 postFakeLogin,
 postFakeProfile,
 postFakeForgetPwd,
 postJwtRegister,
 postJwtLogin,
 postJwtForgetPwd,
 postJwtProfile,
 getProductComents,
 onLikeComment,
 onLikeReply,
 onAddReply,
 onAddComment,
};
