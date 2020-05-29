import { Cookies } from 'quasar';

export function setToken({ commit }, { token, expiresIn }) {
  this.$axios.setToken(token, 'Bearer');
  const expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
  Cookies.set('x-access-token', token, { expires: expiryTime, httpOnly: true });
  commit('SET_TOKEN', token);
}

export async function refreshToken({ dispatch }) {
  const { token, expiresIn } = await this.$axios.$post('refresh-token');
  dispatch('setToken', { token, expiresIn });
}

export function logout({ commit }) {
  this.$axios.setToken(false);
  Cookies.remove('x-access-token');
  commit('REMOVE_TOKEN');
}
