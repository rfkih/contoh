

export const loginAction = ({ id, username, role}) => {
    localStorage.setItem("userData", JSON.stringify({id, username, role}));

    return {
        type: "LOGIN_SUCCESS",
        payload: {id, username, role},
    }
    

};

export const keepLoginAction = ({  id, username, role }) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: {id, username, role},
  }
  };


  export const logoutAction = () => {
    localStorage.removeItem("userData")
     return {
      type: "LOGOUT_SUCCESS"
    }
  }