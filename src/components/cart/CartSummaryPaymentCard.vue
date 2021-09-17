<template>
  <div class="cart-item-card" v-show="products.length">
    <h3>TOTAL: R${{ card_total.toFixed(2) }}</h3>

    <button class="view-product-button">Pay by Credit Card</button>
  </div>
</template>

<script>
export default {
  name: 'CartSummaryPaymentCard',

  props: ['products'],

  computed: {
    card_total() {
      return this.products.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
};
</script>

<style lang="scss">
h3 {
  display: inline-block;
  margin-right: 10px;
}

.cart-item-card {
  justify-content: space-around;
}
</style>
