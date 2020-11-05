import axios from '../../common/api';
import url from '../../common/urls';

export const GET_JSON = 'GET_JSON';
export const GET_JSON_FAILURE = 'GET_JSON_FAILURE';
export const GET_JSON_SUCCESS = 'GET_JSON_SUCCESS';

export const getJson = () => ({
  type: GET_JSON
});

export const getJsonSuccess = payload => ({
  type: GET_JSON_SUCCESS,
  payload
});

export const getJsonFailure = () => ({
  type: GET_JSON_FAILURE,
});

export const getJsonThunk = id => dispatch => {
  dispatch(getJson());
  axios.get(`${url.GET_DB_RECORDS_LIST_URL}?formId=${id}`)
    .then(res => dispatch(getJsonSuccess(res.data)))
    .catch(err => dispatch(getJsonFailure()))
};
