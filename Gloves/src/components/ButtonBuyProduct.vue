<template>
  <div class="modal-content__control">
    <div class="modal-content__control__button">
      <a href="#feedback-product" rel="modal:open" class="btn-primary" @click="updateOrderStore">Отправить заявку</a>
    </div>
    <div class="modal-content__control__counter">
      <el-input-number
        :max="counterMax"
        :min="counterMin"
        :name="counterName"
        v-model="counterValue"></el-input-number>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      productId: {
        default: 0
      },
      counterName: {
        default: 'product-count'
      },
      counterMax: {
        default: 10
      },
      counterMin: {
        default: 1
      },
    },
    data() {
      return {
        counterValue: this.$props.counterMin
      }
    },
    methods: {
      updateOrderStore() {
        this.$store.commit('setProductId', this.productId)
        this.$store.commit('setNumberOfProduct', this.counterValue)
      }
    }
  }
</script>

<style lang="scss">

</style>