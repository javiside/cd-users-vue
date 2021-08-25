export default {
  setLoadingUsers(state, { loading }) {
    state.loadingUsers = loading;
  },
  setUsersError(state, payload) {
    state.usersError = payload.error;
  },
  setUsers(state, { users }) {
    if (!state.fetchedUsers) {
      state.fetchedUsers = users;
    }
    state.users = users;
  },
  setAvatars(state, { avatars }) {
    if (avatars) {
      state.avatars = avatars;
    }
  },
  filterUsers(state, { searchVal }) {
    state.users = state.fetchedUsers.filter(({ email, name, username }) => {
      return (
        `${email}${name}${username}`
          .toLowerCase()
          .indexOf(searchVal.toLowerCase()) >= 0
      );
    });
  },
  sortUsers(state, { selected }) {
    if (/name|email|username/.test(selected)) {
      state.users = (state.users || state.fetchedUsers).sort((a, b) =>
        a[selected].localeCompare(b[selected])
      );
    }
  },
};
