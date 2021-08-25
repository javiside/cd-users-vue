import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  state() {
    return {
      loadingPosts: true,
      postsError: null,
      usersPosts: {},
    };
  },
  getters,
  actions,
  mutations,
};
