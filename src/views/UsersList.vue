<template>
  <a-skeleton :loading="this.loading" active :paragraph="{ rows: 10 }">
    <a-alert
      v-if="this.error"
      message="Error"
      type="error"
      :description="this.error"
      show-icon
    />
    <transition-group tag="ul" v-else class="user-list" name="user-list">
      <base-user v-for="user in users" :key="user.id" :user-data="user" />
    </transition-group>
  </a-skeleton>
</template>

<script>
import fetchData from "../services/FetchData";
import BaseUser from "../components/BaseUser.vue";

export default {
  components: {
    BaseUser,
  },
  data() {
    return {
      loading: true,
      error: null,
      fetchedUsers: [],
      users: null,
      sortVal: "",
    };
  },
  async created() {
    this.fetchedUsers = await fetchData(
      "https://jsonplaceholder.typicode.com/users"
    );

    this.emitter.on("filter-users", (searchVal) => {
      this.filterUsers(searchVal);
    });
    this.emitter.on("sort-users", (selected) => {
      this.sortVal = selected;
    });
  },
  watch: {
    fetchedUsers(users) {
      this.loading = false;
      if (users.error) {
        this.error = users.error.message;
      } else {
        this.users = users.data;
        this.sortVal = "name";
      }
    },
    sortVal(val) {
      this.sortUsers(val);
    },
  },
  methods: {
    filterUsers(searchVal) {
      this.users = this.fetchedUsers.data.filter(
        ({ email, name, username }) => {
          return (
            `${email}${name}${username}`
              .toLowerCase()
              .indexOf(searchVal.toLowerCase()) >= 0
          );
        }
      );
      this.sortUsers(this.sortVal);
    },
    sortUsers(selected) {
      if (/name|email|username/.test(selected)) {
        this.users = (this.users || this.fetchedUsers.data).sort((a, b) =>
          a[selected].localeCompare(b[selected])
        );
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/global.less";

.user-list {
  padding: 0;

  .md({
    padding: 20px;
  });

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.3s ease-out;
  }

  &-enter-to,
  &-leave-from {
    opacity: 1;
  }

  &-leave-active {
    transition: all 0.3s ease-in;
    position: absolute;
    width: 100%;
  }

  &-move {
    transition: all 0.3s ease;
  }
}
</style>
