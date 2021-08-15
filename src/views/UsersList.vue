<template>
  <app-header @onSort="sortUsers" @onFilter="filterUsers" />
  <ul class="user-list">
    <user v-for="user in users" :key="user.id" :user-data="user" />
  </ul>
</template>
<script>
import fetchData from "../services/FetchData";
export default {
  data() {
    return { fetchedUsers: [], users: null };
  },
  async created() {
    this.fetchedUsers = await fetchData(
      "http://jsonplaceholder.typicode.com/users"
    );
    this.sortUsers("name");
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
    },
    sortUsers(selected) {
      this.users = (this.users || this.fetchedUsers).sort((a, b) =>
        a[selected].localeCompare(b[selected])
      );
    },
  },
};
</script>
<style>
.user-list {
  padding: 0;
}
</style>
