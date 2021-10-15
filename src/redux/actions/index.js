import axios from "axios";
import { constants } from "../constants";
const { GET_LIST_SUCCESS, GET_LIST_LOADING, UPDATE_LIST } = constants;

export const getPhotosAsync = () => async (dispatch) => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    dispatch({ type: GET_LIST_LOADING, payload: true });
    const { data = [] } = await axios(url);
    if (data.length) {
      const only10Data = data
        .filter((item, index) => index < 10)
        .map((ele) => {
          return { ...ele, isCompare: true, isRemove: false };
        });
      dispatch({ type: GET_LIST_SUCCESS, payload: only10Data });
    }
  } catch (err) {
    throw err;
  } finally {
    dispatch({ type: GET_LIST_LOADING, payload: false });
  }
};

export const updatePhotosList = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_LIST, payload });
};
