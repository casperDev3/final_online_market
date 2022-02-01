<template>
  <div class="product_card">
    <router-link
      :to="{ name: 'Product', params: { id: product.id } }"
      style="
        text-decoration: none;
        font-size: 18px;
        line-height: 1.2;

        color: #000000;
      "
    >
      <div class="d-flex justify-content-center">
        <img :src="product.image" />
      </div>
      <div class="product_card__title">
        {{ product.title }}
      </div>
      <div class="product_card__price">
        {{ product.price + " " + "USD" }}
      </div>
    </router-link>
    <div class="d-flex justify-content-center">
      <div
        class="
          product_card__button
          d-flex
          justify-content-center
          align-items-center
        "
        @click="addToCart(product.id)"
      >
        <div>До кошика</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["product"],

  methods: {
    showModal() {
      this.$bvModal.show("item-added");
    },
    addToCart(id) {
      let tempIdProduct = {
        id: id,
      };
      this.id_products = JSON.parse(localStorage.getItem("products"));
      this.id_products.push(tempIdProduct);
      console.log(this.id_products);
      let save_product = JSON.stringify(this.id_products);
      window.localStorage.setItem("products", save_product);
      this.showModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.product_card {
  img {
    height: 138px;
    margin-bottom: 38px;
  }
  &__modalImg {
    max-width: 64px;
    max-height: 64px;
    margin-bottom: 8px;
  }
  &__modalText {
    font-size: 24px;
    line-height: 1.2;
  }
  &__modalBtn {
    max-width: 504px;
    max-height: 58px;
    background: #ff842c;
    border-radius: 6px;
  }
  &__modalWindow {
    max-width: 538px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }
  &__title {
    font-size: 18px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
    min-height: 44px;
  }
  &__price {
    font-weight: 500;
    font-size: 22px;
    line-height: 1.2;
    text-align: center;
    color: #009d35;
    margin-bottom: 14px;
  }
  &__button {
    width: 191px;
    height: 56px;
    background: #ff842c;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 6px;

    font-weight: 500;
    font-size: 22px;
    line-height: 1.2;
    text-align: center;
    vertical-align: middle;
    color: #ffffff;
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    &__button {
      margin-bottom: 40px;
    }
  }
  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.1, 1.1);
    transition-duration: 0.3s;
  }
}
</style>