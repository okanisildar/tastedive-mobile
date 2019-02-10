import callApi from '../api'
import actionTypes from '../constants/actions'

export const getAll = (params = '') => (dispatch) => {
  console.log(params)
  dispatch({
    type: actionTypes.loading_started,
  })
  callApi(params)
    .then((response) => {
      dispatch({
        type: actionTypes.get_all,
        payload: response.data.Similar.Results,
      })
    })
}

