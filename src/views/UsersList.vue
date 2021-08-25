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
      <base-user
        v-for="user in users"
        :key="user.id"
        :user-data="user"
        :avatars="avatars"
      />
    </transition-group>
  </a-skeleton>
</template>

<script>
import BaseUser from "../components/BaseUser.vue";

export default {
  components: {
    BaseUser,
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    avatars() {
      return this.$store.getters.avatars;
    },
    error() {
      return this.$store.getters.usersError;
    },
    loading() {
      return this.$store.getters.loadingUsers;
    },
  },
  created() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchAvatars");
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
