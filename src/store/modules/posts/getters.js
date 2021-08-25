export default {
  loadingPosts(state) {
    return state.loadingPosts;
  },
  postsError(state) {
    return state.postsError;
  },
  posts(state, { currentUserId }) {
    return state.usersPosts[currentUserId];
  },
};
