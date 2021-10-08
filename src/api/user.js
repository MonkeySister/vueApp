import api from "./api"

export const userInfo = (parameter) => {
  return api({
    url: "/login/userInfo",
    method: "get",
    parameter,
  })
}
