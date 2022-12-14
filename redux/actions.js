export const SET_USERNAME = "SET_USERNAME"

export const setUserName = (name) => dispatch => {
    dispatch({
        type : SET_USERNAME,
        payload : name
    })
}