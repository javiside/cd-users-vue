<template>
  <card :info="cardUserInfo" />
  <h2>Posts by {{ userName }}</h2>
  <carousel :info="cardUserPosts" />
</template>

<script>
import fetchData from "../services/FetchData";
import Card from "../components/Card.vue";
import Carousel from "../components/Carousel.vue";

export default {
  components: {
    card: Card,
    carousel: Carousel,
  },
  data() {
    return {
      fetchedUserInfo: {},
      fetchedUserPosts: [],
      cardUserInfo: {},
      cardUserPosts: [],
      userName: "",
    };
  },
  async created() {
    this.fetchedUserInfo = await fetchData(
      `http://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
    );
    this.fetchedUserPosts = await fetchData(
      `http://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`
    );
  },
  watch: {
    fetchedUserInfo(user) {
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
    },
    fetchedUserPosts(posts) {
      this.cardUserPosts = posts.map((el) => ({
        id: el.id,
        title: el.title,
        body: el.body,
      }));
    },
  },
};
</script>
