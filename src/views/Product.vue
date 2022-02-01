<template>
  <div class="one_product">
    <modalWindow />
    <div class="container">
      <div class="row">
        <div class="col-4 d-flex justify-content-center">
          <img class="one_product__img" :src="product.image" />
        </div>
        <div class="col-8">
          <div class="one_product__title">
            {{ product.title }}
          </div>
          <div class="one_product__price">
            {{ product.price + " USD" }}
          </div>
          <div
            class="
              one_product__btn
              d-flex
              justify-content-center
              align-items-center
            "
            @click="addProductToCart(product.id)"
          >
            До кошика
          </div>
        </div>
      </div>
    </div>
    <!-- /container -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="one_product__categoryTitle">
            Ще товари тієї ж категорії
          </div>
        </div>
      </div>
      <!-- /row -->
      <div class="row one_product__categoryCard">
        <div class="col-3" v-for="p in productsByCategory" :key="p">
          <Product :product="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalWindow from "@/components/modal_window.vue";
import Product from "../components/product_card.vue";
export default {
  components: {
    modalWindow,
    Product,
  },
  data() {
    return {
      product: [],
      productsInCart: [],
      productsByCategory: [],
    };
  },
  methods: {
    getProductById(id) {
      fetch("https://fakestoreapi.com/products/" + id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.product = data;
          /*Get products by category our Product */
          this.getProductByCategory(this.product.category);
          return data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProductByCategory(category) {
      fetch("https://fakestoreapi.com/products/category/" + category)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.productsByCategory = data;
          return data;
        })
        .catch((error) => {
          return error;
        });
    },
    addProductToCart(id) {
      this.productsInCart = JSON.parse(localStorage.getItem("products"));
      let temp_id = {
        id: id,
      };
      this.productsInCart.push(temp_id);
      let save_products = JSON.stringify(this.productsInCart);
      window.localStorage.setItem("products", save_products);
      /*show Modal Window*/
      this.showModalWindow();
    },
    checkUrlParams() {
      let id_product = this.$route.params.id;
      /*this.getProductById(id_product);*/
      return id_product;
    },
    showModalWindow() {
      this.$bvModal.show("item-added");
    },
  },
  beforeMount() {
    let id_prod = this.checkUrlParams();
    this.getProductById(id_prod);
  },
  watch: {
    $route() {
      let id_prod = this.checkUrlParams();
      this.getProductById(id_prod);
    },
  },
};
</script>

<style lang="scss" scoped>
.one_product {
  margin-top: 80px;
  &__img {
    max-height: 372px;
    max-width: 280px;
    margin-bottom: 148px;
  }
  &__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 1.2;
    margin-bottom: 18px;
  }
  &__price {
    font-weight: 500;
    font-size: 28px;
    line-height: 1.2;
    color: #009d35;
    margin-bottom: 18px;
  }
  &__btn {
    width: 377px;
    height: 56px;
    background: #ff842c;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    cursor: pointer;
     transition-duration: 0.1s;
    &:hover {
      transform: scale(1.01,1.01);
      background: #f76e12;
      transition-duration: 0.1s;  
    }

    font-weight: 500;
    font-size: 22px;
    line-height: 1.2;
    color: #ffffff;
  }
  &__categoryTitle {
    font-size: 32px;
    line-height: 1.2;
    margin-bottom: 58px;
  }
  &__categoryCard {
    margin-bottom: 118px;
  }
}
</style>