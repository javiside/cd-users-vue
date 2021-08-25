export default {
  loadingInfo(state) {
    return state.loadingInfo;
  },
  infoError(state) {
    return state.infoError;
  },
  currentUser(state, { currentUserId }) {
    return state.usersInfo[currentUserId];
  },
};
