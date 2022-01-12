

export const loginAction = ({dispatch, id, username, role}) => {

    dispatch({
        type: "LOGIN_SUCCESS",
        payload: {id, username, role},
    })
    

};