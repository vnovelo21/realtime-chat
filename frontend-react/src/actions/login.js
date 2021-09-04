import * as api from '../utils/api'

// Constants
import { UPDATE_USER } from '../reducers/types'

// Actions Creators
export function loginUserSuccess(user) {
  return {
    type: UPDATE_USER,
    user
  }
}

// Middleware
export const loginUser = (email) => dispatch => {
  return api.loginUser(email)
    .then(user => dispatch(loginUserSuccess(user)))
};