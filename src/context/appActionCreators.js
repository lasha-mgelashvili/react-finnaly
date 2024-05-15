import actions from "./appActions";

export const signInUser = (payload) => {
  return {
    type: actions.signInUser,
    payload,
  };
};
