import callApi from '../api'
import actionTypes from '../constants/actions'

export const getAll = () => (dispatch) => {
  dispatch({
    type: actionTypes.loading_started,
  })
  callApi()
    .then((response) => {
      dispatch({
        type: actionTypes.get_all,
        payload: response.data.Similar.Results,
      })
    })
}

