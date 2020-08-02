export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED ";

export const REGISTER_FETCHING = "REGISTER_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED ";

export const GET_PROFILE_FETCHING = "GET_PROFILE_FETCHING";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILED = "GET_PROFILE_FAILED ";

export const GET_PRODUCT_FETCHING = "GET_PRODUCT_FETCHING";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILED = "GET_PRODUCT_FAILED ";

export const ADD_PRODUCT_FETCHING = "ADD_PRODUCT_FETCHING";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const ADD_PRODUCT_FAILED = "ADD_PRODUCT_FAILED ";

export const DEL_PRODUCT_FETCHING = "DEL_PRODUCT_FETCHING";
export const DEL_PRODUCT_SUCCESS = "DEL_PRODUCT_SUCCESS";
export const DEL_PRODUCT_FAILED = "DEL_PRODUCT_FAILED ";

export const LOGIN_STATUS = 'LOGIN_STATUS'
export const LOGOUT = 'LOGOUT'

export const apiUrl = "http://localhost:5000/api";

export const server = {
    LOGIN_URL: `/auth/login`,
    REGISTER_URL: `/auth/register`,
    ADD_URL: `/product/add`,
    DEL_URL: `/product/del`,
    GET_URL: `/product/get`,
    PROFILE_URL_GET:`/profile/get`,
    PROFILE_URL_ADD:`/profile/add`
}