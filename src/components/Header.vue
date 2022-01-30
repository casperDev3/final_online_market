<template>
  <div class="header d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <router-link to="/">
            <img src="../assets/logo.svg" class="header__logo" />
          </router-link>
        </div>
        <!-- /logo -->

        <div class="col-4 d-flex align-items-center">
          <div class="header__search d-flex align-items-center">
            <img src="../assets/searchIcon.svg" />
            <input type="text" placeholder="Пошук" />
          </div>
          <div
            class="
              header__searchButton
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <div class="header__buttonText">Шукати</div>
          </div>
        </div>
        <!-- /search -->

        <div class="col-6 d-flex align-items-center justify-content-end">
          <div class="header__navigation d-flex">
            <ul class="d-flex align-items-center">
              <li>
                <router-link
                  :to="{ name: 'Catalog', params: { category: 'all' } }"
                  id="firstLink"
                  >Каталог</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'Payments' }">Оплата</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Delivery' }">Доставка</router-link>
              </li>
            </ul>

            <router-link :to="{ name: 'Cart' }">
              <div class="header__fluent d-flex">
                <img src="../assets/fluent.svg" />
                <div v-if="products.length > 0">
                  <statusCart :products="products.length" />
                </div>
              </div>
            </router-link>
          </div>
          <!-- /navigation -->
        </div>
      </div>
      <!-- /row -->
    </div>
  </div>
</template>

<script>
import statusCart from "@/components/status_cart.vue";
export default {
  components: {
    statusCart,
  },
  data() {
    return {
      products: [],
      isHasId: null,
    };
  },
  methods: {
    startFunctions() {
      this.checkStorage();
      this.quantityProducts();
    },
    quantityProducts() {
      this.products = JSON.parse(localStorage.getItem("products"));
    },
    checkStorage() {
      this.isHasId = window.localStorage.getItem("products");

      if (!this.isHasId) {
        let emp = [];
        let save_local = JSON.stringify(emp);
        window.localStorage.setItem("products", save_local);
      }
    },
  },
  beforeMount() {
    setInterval(() => this.startFunctions(), 100);
    /*this.quantityProducts();
    this.isHasId();*/
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  left: 0;
  right: 0;
  background-color: #000;
  height: 60px;
  z-index: 10;
  &__search {
    height: 32px;
    width: 296px;
    background-color: #fff;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    img {
      margin-left: 8px;
    }
    input {
      width: calc(100% - 34px);
      margin-left: 10px;
      border: none;
      outline: none;
    }
  }
  &__searchButton {
    height: 32px;
    width: 78px;
    background-color: #ff842c;
    border-radius: 0px 6px 6px 0px;
    &:hover {
      cursor: pointer;
      background-color: #ffac70;
    }
  }
  &__buttonText {
    font-size: 14px;
    line-height: 1.2;
    color: #ffffff;
  }
  &__navigation {
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        a {
          text-decoration: none;
          font-size: 16px;
          line-height: 1.2;
          color: #ffffff;
          margin-left: 34px;
          &#firstLink {
            margin: 0;
          }
        }
      }
    }
  }
  &__fluent {
    margin-left: 48px;
    position: relative;
    &Number {
      width: 20px;
      height: 20px;
      background-color: #f00;
      border-radius: 50%;
      font-weight: 500;
      font-size: 16px;
      line-height: 1;
      color: #ffffff;

      position: absolute;
      top: -4px;
      right: -12px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>