<template>
  <ul>
    <Todo
      v-for="(todo, i) of todos"
      v-bind:todo="todo"
      :key="i"
      v-bind:index="i"
      v-on:remove-todo="removeTodo"
    />
  </ul>
</template>


<script>
import Vue from "vue";
import Todo from "./todo.vue";

export default {
  name: "TodoList",
  created() {
    console.log(this.todos);
  },
  props: ["todos"],
  components: {
    Todo,
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>