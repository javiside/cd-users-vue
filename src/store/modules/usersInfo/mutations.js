export default {
  setLoadingInfo(state, { loading }) {
    state.loadingInfo = loading;
  },
  setInfoError(state, { error }) {
    state.infoError = error;
  },
  setUserInfo(state, { user }) {
    const userInfo = {
      "Contact Info": {
        Username: user.username,
        Email: user.email,
        Phone: user.phone,
        Website: user.website,
        showLabels: true,
      },
      Address: {
        address: `${user.address.suite} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`,
      },
      Company: {
        cn: user.company.name,
        bs: user.company.bs,
        cp: user.company.catchPhrase,
      },
    };
    state.usersInfo[user.id] = userInfo;
  },
};
