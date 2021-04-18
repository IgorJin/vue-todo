<template>
  <form>
    <label for="input">Создайте новую задачу</label>
    <input id="input" type="text" v-model="title" placeholder="Купиить хлеб" />
    <button v-on:click="onClick">Добавить</button>
  </form>
</template>

<script>
export default {
  name: "AddForm",
  methods: {
    onClick(e) {
      e.preventDefault();
      if (this.title.trim()) {
        const todo = {
          id: new Date().valueOf(), 
          title: this.title,
          completed: false,
        };

        this.$emit("add-todo", todo);
        this.title = "";
      }
    },
  },
  data() {
    return {
      title: "",
    };
  },
};
</script>
