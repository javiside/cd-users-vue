<template #renderItem="{ user }">
  <a-list-item @click="this.$router.push(`/user/${user.id}`)">
    <a-list-item-meta :description="user.username">
      <template #title>
        <strong>{{ user.name }}</strong>
      </template>
      <template #avatar>
        <a-avatar>{{ user.name[0] }}</a-avatar>
      </template>
    </a-list-item-meta>
    <template #actions>
      <a @click.stop :href="`mailto:${user.email}`">{{ user.email }}</a>
    </template>
    <template #extra> <hr /> </template>
  </a-list-item>
</template>

<script>
export default {
  props: ["userData"],
  data() {
    return {
      user: this.userData,
    };
  },
};
</script>
<style lang="less">
.ant-list-item {
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

  h4 {
    cursor: pointer;
  }
}
</style>
