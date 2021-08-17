<template>
  <ul class="user-list">
    <user v-for="user in users" :key="user.id" :user-data="user" />
  </ul>
</template>
<script>
import fetchData from "../services/FetchData";
import User from "../components/User.vue";

export default {
  components: {
    user: User,
  },
  data() {
    return { fetchedUsers: [], users: null, sortVal: "" };
  },
  async created() {
    this.fetchedUsers = await fetchData(
      "http://jsonplaceholder.typicode.com/users"
    );
    this.sortVal = "name";
    this.emitter.on("filter-users", (searchVal) => {
      this.filterUsers(searchVal);
    });
    this.emitter.on("sort-users", (selected) => {
      this.sortVal = selected;
    });
  },
  watch: {
    sortVal(val) {
      this.sortUsers(val);
    },
  },
  methods: {
    filterUsers(searchVal) {
      this.users = this.fetchedUsers.filter(({ email, name, username }) => {
        return (
          `${email}${name}${username}`
            .toLowerCase()
            .indexOf(searchVal.toLowerCase()) >= 0
        );
      });
      this.sortUsers(this.sortVal);
    },
    sortUsers(selected) {
      if (/name|email|username/.test(selected)) {
        this.users = (this.users || this.fetchedUsers).sort((a, b) =>
          a[selected].localeCompare(b[selected])
        );
      }
    },
  },
};
</script>
<style lang="less">
@import "../styles/global.less";

.user-list {
  padding: 0;
  .md({
    padding: 20px;
  });
}
</style>
