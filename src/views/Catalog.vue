<template>
  <div class="product">
    <div class="container">
      <!-- Modal Window -->
      <modalWindow/>
      <!-- /Modal window -->
      <div class="row">
        <div class="col-3">
          <div class="product__categories">
            <div class="product__categories__text">Товари за категоріями</div>
          </div>
          <div class="product__categories__line"></div>
          <router-link
            class="product__categories__item"
            :to="{ name: 'Catalog', params: { category: 'all' } }"
            >Всі товари</router-link
          >
          <div v-for="categ in categories" :categories="categ" :key="categ">
            <router-link
              :class="{ product__categories__item: true }"
              :to="{ name: 'Catalog', params: { category: categ } }"
            >
              {{ categ }}
            </router-link>
          </div>
        </div>
        <!-- /col-3 -->
        <div class="col-9">
          <div class="row">
            <div class="col-12">
              <div
                v-if="this.$route.params.category == 'all'"
                class="product__categTitle"
              >
                Всі товари
              </div>
              <div v-else class="product__categTitle">
                {{ this.$route.params.category }}
              </div>
            </div>
          </div>
          <!-- /col-12 -->
          <div class="row align-items-end">
            <productCard
              class="col-4 product__card"
              v-for="p in products"
              :key="p"
              :product="p"
            />
          </div>
        </div>
        <!-- /col-9 -->
      </div>
    </div>
  </div>
</template>

<script>
import productCard from "../components/product_card.vue";
import modalWindow from "@/components/modal_window.vue";
export default {
  watch: {
    $route() {
      this.getProducts();
    },
  },
  components: {
    productCard,
    modalWindow
  },
  data() {
    return {
      products: [],
      categories: [],
      isAddClass: false,
    };
  },
  beforeMount() {
    this.getProducts();
    this.getCategories();
  },

  methods: {
    addClass() {
      alert("complete");
      this.isAddClass = true;
    },
    getProducts() {
      if (this.$route.params.category == "all") {
        this.getAllProducts();
      } else {
        this.getProductsByCategory();
      }
    },
    getAllProducts() {
      fetch("https://fakestoreapi.com/products?limit=9")
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
    getCategories() {
      fetch("https://fakestoreapi.com/products/categories")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.categories = data;
          return data;
        })
        .catch((error) => {
          return error;
        });
    },
    getProductsByCategory() {
      var categ = this.$route.params.category;
      fetch("https://fakestoreapi.com/products/category/" + categ + "/?limit=9")
        .then((res) => res.json())
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
.product {
  &__categTitle {
    margin-top: 70px;
    margin-bottom: 70px;
    font-size: 36px;
    line-height: 1.2;
  }
  &__card {
    margin-bottom: 38px;
  }
  &__categories {
    &__text {
      margin-top: 78px;
      font-size: 18px;
      line-height: 1.2;
      margin-bottom: 10px;
    }
    &__line {
      width: 100%;
      border: 1px solid #000000;
      margin-bottom: 16px;
    }
    &__item {
      font-size: 18px;
      line-height: 1.2;
      text-decoration: none;
      color: #000000;
      &:hover {
        font-weight: bold;
      }
      &.active {
        font-weight: bold;
      }
    }
  }
}
</style>