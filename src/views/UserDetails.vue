<template>
  <a-skeleton :loading="this.loadingInfo" active :paragraph="{ rows: 5 }">
    <a-alert
      v-if="this.infoError"
      message="Error"
      type="error"
      :description="this.infoError"
      show-icon
    />
    <base-card v-else :info="currentUser" />
  </a-skeleton>
  <h2>Posts by {{ userName }}</h2>
  <a-skeleton :loading="this.loadingPosts" active :paragraph="{ rows: 5 }">
    <a-alert
      v-if="this.postsError"
      message="Error"
      type="error"
      :description="this.postsError"
      show-icon
    />
    <the-carousel v-else :info="posts" />
  </a-skeleton>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
import TheCarousel from "../components/TheCarousel.vue";

export default {
  components: {
    BaseCard,
    TheCarousel,
  },
  data() {
    return {
      fetchedUserPosts: [],
    };
  },
  computed: {
    userName() {
      return this.$store.getters.userName;
    },
    loadingInfo() {
      return this.$store.getters.loadingInfo;
    },
    infoError() {
      return this.$store.getters.infoError;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
    loadingPosts() {
      return this.$store.getters.loadingPosts;
    },
    postsError() {
      return this.$store.getters.postsError;
    },
    posts() {
      return this.$store.getters.posts;
    },
  },
  async created() {
    this.$store.dispatch({ type: "fetchUserInfo", id: this.$route.params.id });
    this.$store.dispatch({ type: "fetchUserPosts", id: this.$route.params.id });
  },
};
</script>
