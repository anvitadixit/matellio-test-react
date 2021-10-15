import { constants } from "../constants";
const { GET_LIST_LOADING, GET_LIST_SUCCESS, UPDATE_LIST } = constants;
const initialState = {
  listData: [],
  isLoading: false,
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        listData: action.payload,
      };
    case UPDATE_LIST:
      return {
        ...state,
        listData: action.payload,
      };
    default:
      return state;
  }
};
export default dashboard;
