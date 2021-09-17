<template>
  <div class="cart-item-card">
    <h3>Cart Total: ${{ card_total.toFixed(2) }}</h3>

    <button class="view-product-button">Pay by Credit Card</button>
  </div>
</template>

<script>
export default {
  props: ['products'],
  computed: {
    card_total() {
      return this.products.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
};
</script>
