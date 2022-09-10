<template>
  <div class="input-wrapper">
    <el-input v-if="phone" v-mask="'+7 (XXX) XXX-XX-XX'" v-model="value" :name="name" :type="type" :placeholder="placeholder"></el-input>
    <el-input v-else v-model="val" :name="name" :type="type" :placeholder="placeholder"></el-input>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        default: ''
      },
      name: {
        default: 'input-name'
      },
      type: {
        default: 'text'
      },
      placeholder: {
        default: ''
      },
      phone: {
        default: false
      }
    },
    data() {
      return {
        val : ''
      }
    },
    mounted() {
      this.val = this.$props.value
    }

  }
</script>

<style lang="scss">
  @import "../scss/utils/vars";
  .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: $primary-color;
  }
  .el-textarea.is-active .el-textarea__inner, .el-textarea__inner:focus {
    border-color: $primary-color;
  }
  .input-wrapper {}

</style>