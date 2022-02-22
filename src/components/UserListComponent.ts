import { User } from '@/models'
import { Component, Vue } from 'vue-property-decorator'
import { Action, Mutation, State } from 'vuex-class'

@Component
export default class UserListComponent extends Vue {
  @Action('getUsers') readonly getUsers!: () => Promise<User[]>
  @State('users') readonly users!: User[]
  @Mutation('removeUser') readonly removeUser!: (indexUser: number) => void

  async created (): Promise<void> {
    await this.getUsers()
  }
}
