<template>
  <div class="cart-item-card">
    <div class="header">
      <table v-show="products.length">
        <thead>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="book in products" :key="book.id">
            <td>{{ book.name }}</td>
            <td>{{ book.quantity }}</td>
            <td>R${{ book.price * book.quantity }}</td>
            <td>
              <button class="remove" @click="removeFromCart(book)">X</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-show="!products.length" class="cart">
        <h3>O seu carrinho está vazio.</h3>
        <h4>Deseja olhar outros produtos similares?</h4>

        <router-link
          class="btn"
          :class="{ active: $route.name === 'Home' }"
          to="/"
        >
          CONTINUAR COMPRANDO
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItemCard',

  props: ['products'],
  computed: {
    description() {
      return this.product.description.substring(0, 120);
    },
  },
  methods: {
    removeFromCart(book) {
      this.$store.commit('removeFromCart', book);
    },
  },
};
</script>

<style lang="scss">
.cart {
  text-align: center;
}

.btn {
  background-color: #f38910; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

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

.remove {
  border-radius: 30%;
  width: 60px;
  background-color: red;
}
</style>
