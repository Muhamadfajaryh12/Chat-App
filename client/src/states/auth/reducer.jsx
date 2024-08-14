import { ActionType } from "./action";

const AuthenticationReducer = (state = null, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return action.payload?.auth;
    default:
      return state;
  }
};

export default AuthenticationReducer;
