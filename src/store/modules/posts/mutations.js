export default {
  setLoadingPosts(state, { loading }) {
    state.loadingPosts = loading;
  },
  setPostsError(state, { error }) {
    state.postsError = error;
  },
  setUserPosts(state, { posts, id }) {
    const userPosts = posts.map((el) => ({
      id: el.id,
      title: el.title,
      body: el.body,
    }));
    state.usersPosts[id] = userPosts;
  },
};
