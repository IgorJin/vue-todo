const users: any = {
  state: {
    users: [],
  },
  mutations: {
    updateUsers(state: StateType, newUsers: IUsers[]) {
      state.users = newUsers;
    },
  },
  actions: {
    async fetchUsers(ctx: any) {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      ctx.commit("updateUsers", users);
    },
  },
  getters: {
    allUsers(state: StateType) {
      return state.users;
    },
  },
  seters: {},
};

export default users;

export interface IUsers {
  name: string;
  email: string;
}

export interface StateType {
  users: IUsers[];
}
