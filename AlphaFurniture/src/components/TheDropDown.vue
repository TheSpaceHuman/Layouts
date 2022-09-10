<template>
  <div class="drop-down-wrapper">
    <div
      class="drop-down-wrapper__title"
      :class="{'active' : visibility}"
      @click="visibility = !visibility"
    >
      {{ title }}</div>
    <div class="drop-down-wrapper__items" v-show="visibility">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        default: 'DropDown'
      },

    },
    data() {
      return {
        visibility: false
      }
    }
  }
</script>

<style lang="scss">
  @import "../scss/utils/vars";
  .drop-down-wrapper {
    &__title::after {
      position: absolute;
      left: calc(100% + 10px);
      top: 50%;
      transform: translateY(-50%);
      content: '\f054';
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 13px;
      transition: 0.5s;
    }
    &__title.active::after {
      color: $primary-color;
    }
    &__title.active {
      color: $primary-color;
    }
    &__title {
      transition: 0.5s;
      position: relative;
      display: inline-block;
    }
    &__items {
      padding-left: 22px;
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 20px;
    }
  }
</style>