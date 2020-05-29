export const SET_TOKEN = (state, token) => {
  state.token = token;
};

export const REMOVE_TOKEN = state => {
  state.token = null;
};
