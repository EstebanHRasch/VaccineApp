//this will contain all the action types that we raise on action creators or events

//For User
export const AddUserToStore = "USER.AddUserToStore";

//For Admin
export const AddAdminToStore = "ADMIN.AddAdminToStore";

//For Product
export const ADD_PRODUCTS_TOSTORE = "PRODUCT.ADD_PRODUCTS_TOSTORE";
export const FETCH_PRODUCTS_FULFILLED = "PRODUCT.FETCH_PRODUCTS_FULFILLED";
export const FETCH_PRODUCTS_REJECTED = "PRODUCT.FETCH_PRODUCTS_REJECTED";

//For Product
export const ADD_VACCINES_TOSTORE = "VACCINE.ADD_VACCINES_TOSTORE";
export const FETCH_VACCINES_FULFILLED = "VACCINE.FETCH_VACCINES_FULFILLED";
export const FETCH_VACCINES_REJECTED = "VACCINE.FETCH_VACCINES_REJECTED";

//For Product
export const ADD_HOSPITALS_TOSTORE = "HOSPITAL.ADD_HOSPITALS_TOSTORE";
export const FETCH_HOSPITALS_FULFILLED = "HOSPITAL.FETCH_HOSPITALS_FULFILLED";
export const FETCH_HOSPITALS_REJECTED = "HOSPITAL.FETCH_HOSPITALS_REJECTED";

//For Cart
//action types for cart operations
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";

//showLoading
export const SHOW_LOADING = "SHOW.LOADING";
