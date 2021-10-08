export default {
  state: {
    token: localStorage.getItem("token") || "",
    accessList: localStorage.getItem("accessList") || [],
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
  },
  actions: {},
}
