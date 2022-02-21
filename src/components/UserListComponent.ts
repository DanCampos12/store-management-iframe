import { User } from '@/models'
import { Component, Vue } from 'vue-property-decorator'
import { Mutation, State } from 'vuex-class'

@Component
export default class UserListComponent extends Vue {
  @State('users') readonly users!: User[]
  @Mutation('removeUser') readonly $removeUser!: (indexUser: number) => void

  removeUser (indexUser: number): void {
    this.$removeUser(indexUser)
    window.parent.postMessage('user:removed', 'http://app1.local')
  }
}
