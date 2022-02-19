import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppComponent extends Vue {
  created (): void {
    document.title = 'POC Gerenciamento de Estados - Lista de Usuários'
  }
}
