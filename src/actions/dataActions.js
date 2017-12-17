import axios from 'axios';
import * as types from "../constants/actionTypes";

const successAction = (data) => {
    return {
        type: types.SUCCESS_REQUEST,
        payload: data,
    }
}

const errorRequest = () => {
    return {

    }
}

const getData = () => {
  return (dispatch) => {
    try {
      const result = await axios.get();
      dispatch(successAction(result.data));
    } catch (e) {
      dispatch(errorRequest())
    } 
}