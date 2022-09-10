<template>
  <div class="modal_wrapper">
    <button type="button" class="btn-primary" @click="$refs.modal.open()">{{ btnName }}</button>
    <SweetModal ref="modal">
      <slot></slot>
    </SweetModal>
  </div>
</template>

<script>
  import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
  export default {
    name: "TheModal",
    components: {
      SweetModal,
      SweetModalTab
    },
    props:{
      btnName: {
        type: String,
        default: 'Открыть модалку'
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  @import "../scss/utils/vars";
  .modal_wrapper {
    display: inline-block;
    margin-bottom: 20px;
  }
  .sweet-modal .sweet-box-actions .sweet-action-close:hover {
    background-color: $primary-color!important;
  }
  .sweet-modal {
    max-width: 1000px;
  }
  .modal-content {
    text-align: left;
    color: #101010;
    font-size: 14px;

    &__img {
      padding-bottom: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      img {
        width: auto;
        display: block;
        margin: 0 auto;
        max-height: 450px;
      }
    }
    &__options {
      padding-bottom: 60px;
    }
    &__options__title {
      font-size: 23px;
      font-weight: 700;
      margin-bottom: 40px;
    }
    &__options__article {
      font-size: 23px;
      font-weight: 700;
      margin-bottom: 40px;
    }
    &__options__table {
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 60px;
      th {
        font-weight: 700;
        padding-bottom: 18px;
      }
      td {
        font-weight: 300;
        padding: 4px 15px;
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }
      tbody > tr:nth-child(2n - 1) {
        background-color: #efeff1;
      }
      tr > td:nth-child(2) {
        font-weight: 700;
      }
    }
    &__descriptions {}
    &__descriptions__title {
      color: #101010;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 27px;
    }
    &__descriptions__content {
      color: #101010;
      font-size: 14px;
      font-weight: 300;
      line-height: 32px;
    }
    &__control {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &__control__button {
      /*flex: 0 0 50%;*/

      a {
        padding: 8px 35px;
        font-size: 14px;
        font-weight: 700;
      }
    }
    &__control__counter {
      /*flex: 0 0 50%*/
    }
  }
  .sweet-modal-overlay {
    background-color: rgba(0,0,0, .8)!important;
  }
</style>
