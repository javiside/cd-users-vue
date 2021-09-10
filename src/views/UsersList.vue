<template>
  <a-skeleton :loading="this.loadingUsers" active :paragraph="{ rows: 10 }">
    <a-alert
      v-if="this.usersError"
      message="Error"
      type="error"
      :description="this.usersError"
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
import { mapGetters } from "vuex";
import BaseUser from "../components/BaseUser.vue";

export default {
  components: {
    BaseUser,
  },
  computed: {
    ...mapGetters(["users", "avatars", "usersError", "loadingUsers"]),
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
