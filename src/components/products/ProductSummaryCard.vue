<template>
  <div class="card">
    <h3>{{ product.name }}</h3>

    <div class="book">
      <img class="image-book" :src="product.image" alt="" />
      <div>
        <p class="description">{{ description }}</p>
        <h3 class="price">R${{ product.price.toFixed(2) }}</h3>
        <p class="text-muted">{{ product.category }}</p>
      </div>
    </div>
    <button class="view-product-button" @click="$emit('view-product', product)">
      Adicionar ao carrinho
    </button>
  </div>
</template>

<script>
export default {
  name: 'CartSummaryPaymentCard',

  props: ['product'],

  computed: {
    description() {
      return this.product.description.substring(0, 150);
    },
  },
};
</script>

<style lang="scss">
.book {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.image-book {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}

.card {
  width: 80%;
  margin: 10%;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px gray;

  h3.price {
    font-weight: 900;
  }

  p.description {
    font-size: 0.87rem;
    text-align: justify;
    margin: 0.5rem;
  }

  p.text-muted {
    color: gray;
  }
}

button.view-product-button {
  padding: 10px;
  background-color: rgb(79, 160, 187);
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.15rem;
  border-radius: 5px;
}

@media (min-width: 500px) {
  .card {
    width: 350px;
    margin: 10px;
  }
}
</style>
