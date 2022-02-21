import { Component, Vue } from 'vue-property-decorator'
import UserListComponent from '@/components/UserListComponent.vue'
import { Mutation, State } from 'vuex-class'
import { User } from '@/models'

@Component({
  components: {
    UserListComponent
  }
})
export default class Home extends Vue {
  @State('users') readonly users!: User[]
  @Mutation('addUser') readonly $addUser!: (user: User) => void

  broadcast = new BroadcastChannel('user-list')

  addUser (): void {
    this.$addUser({
      id: this.users.length,
      name: `User-${this.users.length + 1}`,
      email: `user-${this.users.length}@meuportfol.io`,
      role: 'Integração'
    })
    this.broadcast.postMessage('user:added')
  }
}
