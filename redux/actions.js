export const SET_USERNAME = "SET_USERNAME"
export const SET_ISSIGNEDIN = "SET_ISSIGNEDIN"

export const setUserName = (name) => dispatch => {
    dispatch({
        type : SET_USERNAME,
        payload : name
    })
}

export const setIsSignedIn = (bool) => dispatch => {
    dispatch({
        type: SET_ISSIGNEDIN,
        payload: bool
    })
}