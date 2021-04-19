<template>
  <div class="users">
    <h1>Here users page</h1>

    <ul v-for="user of allUsers" :key="user.id">
      <div class="user-card">
        <span class="user-card__name">{{ user.name }}</span
        ><span>{{ user.email }}</span>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Users",
  data() {
    return {
      users: [],
    };
  },
  computed: mapGetters(["allUsers"]),
  async mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style>
.user-card {
  border: 1px solid black;

  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.user-card__name {
  display: block;
  margin-bottom: 5px;
  font-weight: 800;
}
</style>