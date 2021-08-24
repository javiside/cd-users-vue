<template>
  <a-skeleton :loading="this.loadingInfo" active :paragraph="{ rows: 5 }">
    <a-alert
      v-if="this.infoError"
      message="Error"
      type="error"
      :description="this.infoError"
      show-icon
    />
    <base-card v-else :info="cardUserInfo" />
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
    <the-carousel v-else :info="cardUserPosts" />
  </a-skeleton>
</template>

<script>
import fetchData from "../services/FetchData";
import BaseCard from "../components/BaseCard.vue";
import TheCarousel from "../components/TheCarousel.vue";

export default {
  components: {
    BaseCard,
    TheCarousel,
  },
  data() {
    return {
      fetchedUserInfo: {},
      infoError: null,
      fetchedUserPosts: [],
      postsError: null,
      cardUserInfo: {},
      cardUserPosts: [],
      userName: "",
      loadingInfo: true,
      loadingPosts: true,
    };
  },
  async created() {
    this.fetchedUserInfo = await fetchData(
      `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
    );
    this.fetchedUserPosts = await fetchData(
      `https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`
    );
  },
  watch: {
    fetchedUserInfo({ error, data: user }) {
      this.loadingInfo = false;
      if (error) {
        this.infoError = error.message;
      } else {
        this.infoError = null;
        this.emitter.emit("set-user-name", user.name);
        this.userName = user.name;

        this.cardUserInfo = {
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
      }
    },
    fetchedUserPosts(posts) {
      this.loadingPosts = false;
      if (posts.error) {
        this.postsError = posts.error.message;
      } else {
        this.postsError = null;
        this.cardUserPosts = posts.data.map((el) => ({
          id: el.id,
          title: el.title,
          body: el.body,
        }));
      }
    },
  },
};
</script>
