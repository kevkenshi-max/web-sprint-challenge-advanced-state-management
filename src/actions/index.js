import axios from 'axios';

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: START})
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: ERROR, payload: { err } });
        });
}

export const START = "FETCH_START";
export const SUCCESS = "FETCH_SUCCESS";
export const FAILURE = "FETCH_FAILURE";
export const ADD = "ADD_SMURF";
export const ERROR = "ERROR";

export const start = () => {
    return({type: START});
}

export const successful = () => {
    return({type: SUCCESS});
}

export const failed = () => {
    return({type: FAILURE});
}

export const add = (value) => {
    return({type: ADD, payload:value});
}

export const error = () => {
    return({type: ERROR});
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, 
//    performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.