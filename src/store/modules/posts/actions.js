import fetchData from "../../../services/FetchData";

export default {
  async fetchUserPosts({ commit, state }, { id }) {
    if (state.usersPosts[id]) {
      return;
    }
    commit({ type: "setLoadingPosts", loading: true });
    const postsRes = await fetchData(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    commit({ type: "setLoadingPosts", loading: false });

    if (postsRes.error) {
      commit({
        type: "setPostsError",
        error: postsRes.error.message,
      });
    } else {
      commit({ type: "setUserPosts", posts: postsRes.data, id });
    }
  },
};
