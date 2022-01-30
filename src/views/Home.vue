<template>
  <div>
    <!-- Modal Window -->
    <modalWindow />
    <!-- /Modal window -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- slider -->
          <div class=" slider">
            <VueSlickCarousel :arrows="true" :dots="true">
              <div class="bg_img"></div>
              <div class="bg_img"></div>
              <div class="bg_img"></div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>

    <!-- product_crads -->
    <section class="product_cards">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-3" v-for="p in products" :key="p">
            <Product :product="p" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Product from "../components/product_card.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import modalWindow from "@/components/modal_window.vue";

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    Product,
    VueSlickCarousel,
    modalWindow,
  },

  beforeMount() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      fetch("https://fakestoreapi.com/products?limit=4")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.products = data;
          return data;
        })
        .catch((error) => {
          return error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  margin-top: 42px;
  margin-bottom: 96px;

  .bg_img {
    height: 408px;
    min-height: 50%;
    min-width: 50%;
    background-image: url("../assets/slide_img.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: cover;
    /*filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15));*/
    border-radius: 16px;
  }
}
.product_cards {
  margin-bottom: 66px;
}
</style>