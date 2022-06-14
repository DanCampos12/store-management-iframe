import { User } from '@/models'
import Vue from 'vue'
import Vuex, { Commit } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [] as User[],
    broadcast: new BroadcastChannel('user-list')
  },
  mutations: {
    setUsers (state, users: User[]) {
      state.users = [...users]
      state.broadcast.postMessage({
        notification: 'user:counter',
        value: state.users.length
      })
    },
    addUser (state, user: User) {
      state.users.push(user)
      state.broadcast.postMessage({ notification: 'user:added' })
    },
    removeUser (state, userIndex: number) {
      state.users.splice(userIndex, 1)
      state.broadcast.postMessage({ notification: 'user:removed' })
    }
  },
  actions: {
    getUsers ({ commit }: { commit: Commit }) {
      const response = {
        data: [
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
          },
          {
            id: 3,
            name: 'Tais Campos',
            email: 'tais.campos@meuportfol.io',
            role: 'UX Designer'
          }
        ] as User[]
      }
      commit('setUsers', response.data)
      return response.data || []
    }
  },
  modules: {
  }
})
