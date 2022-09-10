<template>
  <div class="product-meta-data">
    <input type="hidden" :name="idName" :value="productId">
    <input type="hidden" :name="numberOfProductName" :value="numberOfProduct">
  </div>
</template>

<script>
  export default {
    props: {
      idName: {
        default: 'product-id'
      },
      numberOfProductName: {
        default: 'number-of-product'
      }
    },
    data() {
      return {

      }
    },
    computed: {
      productId() {
        return this.$store.getters.getProductId
      },
      numberOfProduct() {
        return this.$store.getters.getNumberOfProduct
      }
    }
  }
</script>