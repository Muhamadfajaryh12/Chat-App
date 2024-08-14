import AuthAPI from "../../api/Auth";
const ActionType = {
  LOGIN: "LOGIN",
};

const setLoginAction = (auth) => {
  return {
    type: ActionType.LOGIN,
    payload: {
      auth,
    },
  };
};

const asyncLoginAction = ({ username, password }) => {
  return async (dispatch) => {
    try {
      const response = await AuthAPI.login({ username, password });
      AuthAPI.setAccessToken(response.token);
      localStorage.setItem("id", response.data.id);
      dispatch(setLoginAction(response.token));
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export { ActionType, asyncLoginAction };
