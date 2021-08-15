<template>
  <nav class="nav">
    <a-breadcrumb separator=">">
      <a-breadcrumb-item>
        <router-link v-if="userName" to="/">Users</router-link>
        <span v-else>Users</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item v-if="userName">
        <span>{{ userName }}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <span class="nav-actions" v-if="!userName">
      <a-input
        v-model:value="inputValue"
        placeholder="Search by name, username or email"
        @input="this.$emit('onFilter', $event.target.value)"
      />

      <a-select
        ref="select"
        v-model:value="selectValue"
        @change="this.$emit('onSort', $event)"
      >
        <a-select-option value="name">Name</a-select-option>
        <a-select-option value="username">UserName</a-select-option>
        <a-select-option value="email">Email</a-select-option>
      </a-select>
    </span>
  </nav>
</template>
<script>
export default {
  props: ["user-name"],
  data() {
    return {
      user: this["user-name"],
      inputValue: "",
      selectValue: "name",
    };
  },
};
</script>
<style lang="less">
.nav {
  display: flex;
  position: static;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  background-color: #3f51b5;
  width: 100%;
  z-index: 1100;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  min-height: 64px;
  padding: 0 20px;

  .nav-actions {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
  }
  .ant-breadcrumb {
    flex-grow: 8;
    text-align: left;
    font-size: 2rem;
    &-link,
    &-separator {
      color: #bbcbe4;
    }
    a {
      color: #fff;
      text-decoration: underline;
    }
  }
  .ant-input {
    width: auto;
    flex-grow: 8;
    margin-right: 10px;
  }
  .ant-select {
    width: auto;
    flex-grow: 2;
  }
}
</style>
