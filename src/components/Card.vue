<template>
  <span class="card" v-for="card in info" :key="card.id">
    <h2>{{ card.id }}</h2>
    <span v-for="(val, key) in card" :key="`${key}-${val}-id`">
      <label v-if="!/id|hide/.test(key)"
        ><strong v-if="!card.hideLabels">{{ key }}</strong>
        <input :value="val" />
      </label>
    </span>
    <hr />
  </span>
</template>
<script>
export default {
  props: ["info", "posts"],
};
</script>
<style>
.card {
  display: flex;
  flex-flow: column;
}
.card input {
  border: none;
}
</style>
