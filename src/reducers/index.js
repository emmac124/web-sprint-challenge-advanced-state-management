import { LOADING, SMURF_FETCH_SUCCESS, SMURF_FETCH_FAIL, ADD_SMURF, ERROR } from '../actions/index';

export const initialState = {
    smurfs: [],
    loading: false,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch(action.payload){
        case LOADING:
            return({
                ...state,
                loading: true
            });
        case SMURF_FETCH_SUCCESS:
            return({
                ...state,
                smurfs: action.payload
            });
        case SMURF_FETCH_FAIL:
            return({
                ...state,
                smurfs: [],
                loading: false
            });
        case ADD_SMURF:
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload]
            });
        case ERROR:
            return({
                ...state,
                error: action.payload
            });
        default:
            return state;
    }
}

export default reducer;

//Task List:

//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.