<template>
  <div>
    <h1>Your Cart</h1>

    <CartItemCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />

    <CartSummaryPaymentCard :products="products" />
  </div>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue';
import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue';

export default {
  components: {
    CartItemCard,
    CartSummaryPaymentCard,
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style lang="scss">
.cart-item-card {
  width: 90%;
  margin: 5%;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: left;

  .header {
    display: flex;
    justify-content: space-around;
  }
}
</style>
