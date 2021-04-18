<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AddForm @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">all</option>
      <option value="completed">completed</option>
      <option value="not completed">not completed</option>
    </select>
    <Loader v-if="this.loading" />
    <TodoList v-else v-bind:todos="filteredTodos" @remove-todo="removeTodo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoList from "../components/todo-list.vue";
import AddForm from "../components/add-form.vue";
import Loader from "../components/loader.vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      todos: [{ id: 0, title: "", completed: false }],
      loading: true,
      filter: "all",
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((todos) => this.setTodos(todos));
  },
  components: {
    TodoList,
    AddForm,
    Loader,
  },
  methods: {
    removeTodo(id: number) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo: any) {
      this.todos.push(todo);
    },
    setTodos(todos: any) {
      this.todos = todos;
      this.loading = false;
    },
  },
  computed: {
    filteredTodos(): any {
      if (!this.todos.length) {
        return [];
      }
      switch (this.filter) {
        case "completed":
          return this.todos.filter((t) => t.completed);
        case "not completed":
          return this.todos.filter((t) => !t.completed);
        default:
          return this.todos;
      }
    },
  },
});
</script>
