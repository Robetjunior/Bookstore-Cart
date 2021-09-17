<template>
  <div class="cart-item-card" v-show="products.length">
    <div class="cart">
      <h3>TOTAL: R$ {{ card_total.toFixed(2) }}</h3>

      <button class="view-product-button">FINALIZAR A COMPRA</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartSummaryPaymentCard',

  props: ['products'],

  computed: {
    card_total() {
      console.log(this.products.reduce((a, b) => a + b.price * b.quantity, 0));
      return this.products.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
};
</script>

<style lang="scss">
.cart {
  justify-content: center;

  h3 {
    display: inline-block;
    margin-right: 3rem;
  }
}
</style>
