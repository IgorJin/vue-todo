<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" :checked="todo.completed" v-on:change="todo.completed = !todo.completed" />
      {{ index + 1 }} {{ todo.title | uppercase }}
    </span>
    <button v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      require: true,
    },
    index: Number,
  },
  filters: {
    uppercase(val) {
      return val.toUpperCase();
    }
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>