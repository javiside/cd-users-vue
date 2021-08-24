<template>
  <a-carousel :slidesToShow="isSmall ? 1 : 3" arrows autoplay>
    <div v-for="post in info" :key="post.id" class="post">
      <h3 class="title">
        <strong>{{ post.title }}</strong>
      </h3>
      <div class="body">{{ post.body }}</div>
    </div>
  </a-carousel>
</template>
<script>
import { Carousel } from "ant-design-vue";
export default {
  components: {
    "a-carousel": Carousel,
  },
  props: ["info", "posts", "use-carousel"],
  data() {
    return { isSmall: true, timeout: null };
  },
  methods: {
    onResize() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.isSmall = innerWidth < 768;
      }, 300);
    },
  },
  mounted() {
    this.isSmall = innerWidth < 768;
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="less">
.ant-carousel {
  padding: 20px;
  background-color: #3f51b570;

  & .post {
    padding: 20px;

    & .title,
    & .body {
      text-transform: capitalize;
      text-align: justify;
      text-justify: inter-word;
    }
  }
  .slick-dots {
    li {
      margin-top: 20px;
      padding: 5px;

      button {
        height: 5px;
        padding: 4px;
        border-radius: 4px;
      }
    }
  }
}
</style>
