import { User } from '@/models'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 0,
        name: 'Danilo Campos',
        email: 'danilo.rodrigues@meuportfol.io',
        role: 'Júnior'
      },
      {
        id: 1,
        name: 'Leonardo Campos',
        email: 'leonardo.campos@meuportfol.io',
        role: 'Júnior'
      },
      {
        id: 2,
        name: 'Rafael Neves',
        email: 'rafael.neves@meuportfol.io',
        role: 'Tech Lead'
      }
    ] as User[]
  },
  mutations: {
    addUser (state, user: User) {
      state.users.push(user)
    },
    removeUser (state, userIndex: number) {
      state.users.splice(userIndex, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
