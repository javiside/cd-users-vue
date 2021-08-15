<template>
  <app-header :user-name="userName" />
  <card :info="cardUserInfo" :posts="cardUserPosts" />
</template>

<script>
import fetchData from "../services/FetchData";

export default {
  data() {
    return {
      fetchedUserInfo: null,
      fetchedUserPosts: null,
      cardUserInfo: [],
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
      this.userName = user.name;
      this.cardUserInfo = [
        {
          id: "Contact Info",
          Username: user.username,
          Email: user.email,
          Phone: user.phone,
          Website: user.website,
        },
        {
          id: "Address",
          address: `${user.address.suite} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`,
          hideLabels: true,
        },
        {
          id: "Company",
          cn: user.company.name,
          bs: user.company.bs,
          cp: user.company.catchPhrase,
          hideLabels: true,
        },
      ];
    },
    fetchedUserPosts(posts) {
      this.cardUserPosts = posts.map((post) => ({
        title: post.title,
        body: post.body,
      }));
    },
  },
};
</script>
