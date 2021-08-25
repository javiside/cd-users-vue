import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  state() {
    return {
      loadingUsers: null,
      usersError: null,
      fetchedUsers: null,
      avatars: null,
      users: null,
    };
  },
  getters,
  actions,
  mutations,
};
