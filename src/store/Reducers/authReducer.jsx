const initState = {
  authError: null
}
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "login_Error":
      return {
        ...state,
        authError: "LogIn failed"
      }
    case "login_Success":
      console.log("logIn succes")
      return {
        ...state,
        authError: null
      }
    case "logout_Success":
      console.log("logout Success")
      return state;
    default:
      return state;
  }
}

export default authReducer
