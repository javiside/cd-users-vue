import fetchData from "../../../services/FetchData";

export default {
  async fetchUsers({ commit, state }) {
    if (state.fetchedUsers) {
      return;
    }
    commit({ type: "setLoadingUsers", loading: true });
    const usersRes = await fetchData(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit({ type: "setLoadingUsers", loading: false });

    if (usersRes.error) {
      commit({
        type: "setUsersError",
        error: usersRes.error.message,
      });
    } else {
      commit({ type: "setUsers", users: usersRes.data });
      commit({ type: "sortUsers", selected: "name" });
    }
  },
  async fetchAvatars({ commit, state }) {
    if (state.avatars) {
      return;
    }
    const avatarsRes = await fetchData(
      "https://randomuser.me/api/?results=10&inc=,picture&noinfo"
    );

    if (!avatarsRes.error && avatarsRes.data?.results) {
      commit({
        type: "setAvatars",
        avatars: avatarsRes.data.results.map((el) => el.picture.thumbnail),
      });
    }
  },
  filterUsers({ commit }, payload) {
    commit("filterUsers", payload);
  },
  sortUsers({ commit }, payload) {
    commit("sortUsers", payload);
  },
};
