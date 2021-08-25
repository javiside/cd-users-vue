import fetchData from "../../../services/FetchData";

export default {
  async fetchUserInfo({ commit, state }, { id }) {
    if (state.usersInfo[id]) {
      return;
    }
    commit({ type: "setLoadingInfo", loading: true });
    const infoRes = await fetchData(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    commit({ type: "setLoadingInfo", loading: false });

    if (infoRes.error) {
      commit({
        type: "setInfoError",
        error: infoRes.error.message,
      });
    } else {
      commit({ type: "setCurrentName", name: infoRes.data.name, id });
      commit({ type: "setUserInfo", user: infoRes.data });
    }
  },
};
