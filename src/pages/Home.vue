<template>
  <div class="home-page--content">
    <v-card class="card--content">
      <v-card-text>
        <div class="iframe-title--label">
          <v-icon
            style="margin-right: 4px"
            size="20"
          >
            mdi-information-outline
          </v-icon>
          Componente carregado por iframe
        </div>
        <img
          alt="Vue logo"
          src="../assets/logo.png"
          width="104"
        >
        <user-list-component />
        <v-footer
          style="background: transparent"
          fixed
          bottom
        >
          <v-spacer />
          <v-btn
            fab
            dense
            small
            @click="addUser"
          >
            <v-icon size="24">
              mdi-plus
            </v-icon>
          </v-btn>
        </v-footer>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<style lang="scss" scoped>
  .home-page--content {
    display: flex !important;
    height: 100%;
    justify-content: center !important;
  }

  .card--content {
    transform: translate(0);
    width: 100%;
    .v-card__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      .iframe-title--label {
        display: flex;
        align-items: center;
        font-family: 'Roboto';
        font-size: 14px;
        color: #424242;
        font-weight: 500;
        margin-top: 8px;
        margin-bottom: 8px;
      }
    }
  }

  .v-btn {
    font-family: 'Roboto' !important;
    color: white !important;
    background: #E86C30 !important;
    margin-bottom: 4px;
    margin-right: 8px;
  }

</style>
