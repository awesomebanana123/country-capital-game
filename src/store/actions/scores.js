import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_SCORES } from "../actionTypes";

//dispatched in fetchScores
export const loadScores = scores => ({
    type: LOAD_SCORES,
    scores
});

export const fetchScores = (userId) => {
  return dispatch => {
        // return apiCall("get", `http://localhost:8081/api/users/${userId}/scores`)
        //added the "/" before "api" in url to make the proxy work. 
        return apiCall("get", `/api/users/${userId}/scores`)
          .then(res => {
            dispatch(loadScores(res));
          })
          .catch(err => {
            dispatch(addError(err.message));
          });
      };
    
}

export const postNewScore = (score, id) => {
  return dispatch =>
  {return apiCall("post", `/api/users/${id}/scores`, { score })
    .then(res => {})
    .catch(err => addError(err.message));}
}
