<template #renderItem="{ user }">
  <a-list-item @click="this.$router.push(`/user/${user.id}`)">
    <a-list-item-meta :description="user.username">
      <template #title>
        <strong>{{ user.name }}</strong>
      </template>
      <template #avatar>
        <a-avatar :src="avatars?.[user.id - 1]">{{ user.name[0] }}</a-avatar>
      </template>
    </a-list-item-meta>
    <template #actions>
      <a @click.stop :href="`mailto:${user.email}`">{{ user.email }}</a>
    </template>
  </a-list-item>
</template>

<script>
import { List, Avatar } from "ant-design-vue";
const {
  Item: { Meta },
  Item,
} = List;
export default {
  components: {
    "a-list-item": Item,
    "a-list-item-meta": Meta,
    "a-avatar": Avatar,
  },
  props: ["userData", "avatars"],
  data() {
    return {
      user: this.userData,
    };
  },
};
</script>

<style lang="less">
@import "../styles/global.less";

.ant-list-item {
  display: flex;
  flex-flow: column;
  text-align: left;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px dotted black;

  &:hover {
    background-color: #add8e6;
  }
  &:active {
    background-color: #6d7cd1;
  }

  &-meta {
    align-items: center;

    .ant-avatar-circle {
      height: 64px;
      width: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }

    &-title {
      cursor: pointer;
    }
  }

  .md({
    flex-flow: row;

    .ant-avatar-circle {
      height: 32px;
      width: 32px;
      font-size: 1rem;
    }

    hr {
      display: block;
    }
  });
}
</style>
