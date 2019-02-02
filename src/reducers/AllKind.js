import actionTypes from '../constants/actions'

const INITIAL_STATE = {
  all: [],
  loading: null,
  error: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.loading_started:
      return { ...state, loading: action.payload }
    case actionTypes.get_all:
      return { ...state, all: action.payload }
    case actionTypes.unexpected_error:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
