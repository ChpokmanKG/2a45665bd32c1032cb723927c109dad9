import {
  GET_JSON,
  GET_JSON_FAILURE,
  GET_JSON_SUCCESS,
} from './mainTableActions';

const initialState = {
  data: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_JSON:
      return {
        ...state,
        loading: true,
      }
    case GET_JSON_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case GET_JSON_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}
