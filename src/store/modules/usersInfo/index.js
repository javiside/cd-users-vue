import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  state() {
    return {
      loadingInfo: null,
      infoError: null,
      usersInfo: {},
    };
  },
  getters,
  actions,
  mutations,
};
