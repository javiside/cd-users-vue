import { createStore } from "vuex";

import usersModule from "./modules/users/index";
import usersInfoModule from "./modules/usersInfo/index";
import postsModule from "./modules/posts/index";

const store = createStore({
  modules: {
    usersModule,
    usersInfoModule,
    postsModule,
  },
  state() {
    return {
      currentId: null,
      usersNames: {},
    };
  },
  getters: {
    currentUserId(state) {
      return state.currentId;
    },
    currentUserName(state) {
      return state.usersNames[state.currentId];
    },
  },
  actions: {
    setCurrentId(context, payload) {
      context.commit("setCurrentId", payload);
    },
    setCurrentName(context, payload) {
      context.commit("setCurrentName", payload);
    },
  },
  mutations: {
    setCurrentId(state, { id }) {
      state.currentId = id;
    },
    setCurrentName(state, { name, id }) {
      state.usersNames[id] = name;
    },
  },
});

export default store;
