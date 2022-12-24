import { SET_USERNAME } from "./actions";
import { SET_ISSIGNEDIN } from "./actions";

const initialState = {
    userName : "",
    isSignedIn: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERNAME : 
            return {
                ...state,
                userName : action.payload
            }
        case SET_ISSIGNEDIN :
            return{
                ...state,
                isSignedIn: action.payload
            }
        default:
            return state
    }
}

export default reducer