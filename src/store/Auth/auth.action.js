import axios from 'axios'
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from './auth.actionTypes';




  export const signIn = (creds) => async (dispatch) => {
    dispatch({type:AUTH_SIGN_IN_LOADING});
    try {
      let response = await axios.post("http://localhost:8080/user", creds);
      dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({type:AUTH_SIGN_IN_ERROR})
    }
  };


  export const signout = () =>  (dispatch) => {
    dispatch({ type: AUTH_SIGN_OUT });
  };