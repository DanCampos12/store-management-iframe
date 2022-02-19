<template>
  <div
    v-if="users.length"
    class="user-list--content"
  >
    <div class="user-list-title--label">Lista de Usuários:</div>
    <div class="scroller" style="max-height: calc(400px - 220px);">
      <div
        class="user-line--content"
        v-for="(user, index) in users"
        :key="index"
      >
        <div class="user--info">
          <div class="user--description">{{ user.role }}</div>
          <div class="user--name">{{ user.name }}</div>
          <div class="user--description">{{ user.email }}</div>
        </div>
        <v-btn
          fab
          dense
          elevation="0"
          x-small
          @click="removeUser(index)"
        >
          <v-icon size="20">
            mdi-delete-outline
          </v-icon>
        </v-btn>
      </div>
    </div>
  </div>
  <div class="no--result" v-else>
    A lista de usuários está vazia.
  </div>
</template>

<script lang="rs" src="./UserListComponent.ts"></script>
<style lang="scss" scoped>
  .user-list--content {
    height: 100%;
    width: 100%;

    .user-list-title--label {
      padding-left: 12px;
      font-size: 18px;
      color: #424242;
      font-weight: 700;
      margin-top: 8px;
      margin-bottom: 8px;
    }

    .user-line--content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #E0E0E0;
      padding: 0 8px 0 8px;

      .user--info {
        height: 60px;
        line-height: 1.4;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .user--name {
          color: #424242;
          font-weight: 700;
          text-transform: uppercase;
        }
        .user--description {
          color: #424242;
          font-weight: 400;
          font-size: 12px;
        }
      }

      .v-btn {
        color: #424242 !important;
        background: transparent !important;
      }
    }
  }

  .no--result {
    height: calc(100vh - 220px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
</style>
