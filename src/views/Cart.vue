<template>
  <div class="cart">
    <!-- Modal Window -->
    <modalWindow />
    <!-- /Modal window -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="cart__title">Кошик замовлень</div>
        </div>
      </div>
    </div>
    <!-- Show if cart empty -->
    <div v-if="products.length < 1">
      <emptyCart />
    </div>
    <!-- Show if cart has product -->
    <div v-if="products.length >= 1">
      <div>
        <div v-for="p in products" :key="p">
          <cardCart :product_id="p.id" />
        </div>
      </div>
      <div
        class="
          cart__button_nonEmpt
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <div class="button_text">Оформити замовлення</div>
      </div>
      <!-- /cart_button -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="cart__others_text">Вас також можуть зацікавити</div>
          </div>
        </div>
      </div>
      <!-- /container -->
      <div class="cart__cards">
        <div class="container">
          <div class="row">
            <div class="col-3" v-for="p in all_products" :key="p">
              <allProducts :product="p" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emptyCart from "@/components/cart-empty.vue";
import cardCart from "@/components/card-cart.vue";
import allProducts from "@/components/product_card.vue";
import modalWindow from "@/components/modal_window.vue";
export default {
  components: {
    emptyCart,
    cardCart,
    allProducts,
    modalWindow,
  },
  data() {
    return {
      isHasId: null,
      products: [],
      all_products: [],
    };
  },
  methods: {
    startFunctions() {
      /*alert(this.products.length)*/
      let actual_pos_cart = JSON.parse(localStorage.getItem("products"));
      if (this.products.length != actual_pos_cart.length) {
        this.products = JSON.parse(localStorage.getItem("products"));
      }
    },
    checkStorage() {
      /*this.isHasId = window.localStorage.getItem("products");*/
      this.products = JSON.parse(localStorage.getItem("products"));
    },
    getAllProducts() {
      fetch("https://fakestoreapi.com/products?limit=4")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.all_products = data;
          return data;
        })
        .catch((error) => {
          return error;
        });
    },
  },
  beforeMount() {
    this.checkStorage();
    setInterval(() => this.startFunctions(), 100);
    this.getAllProducts();
  },
};
</script>

<style lang="scss" scoped>
.cart {
  &__title {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #000000;
    margin-top: 42px;
    margin-bottom: 40px;
    text-align: center;
  }
  &__button_nonEmpt {
    background: #ff842c;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    max-width: 372px;
    height: 56px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
    margin-bottom: 112px;

    .button_text {
      font-weight: 500;
      font-size: 22px;
      line-height: 1.2;
      text-align: center;
      color: #ffffff;
    }
  }
  &__others_text {
    font-size: 32px;
    line-height: 1.2;
    text-align: start;
    color: #000000;
    margin-bottom: 76px;
  }
  &__cards {
    margin-bottom: 138px;
  }
}
</style>