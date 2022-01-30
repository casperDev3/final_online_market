<template>
  <div class="cardCart">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="
              cardCart__bg
              d-flex
              justify-content-between
              align-items-center
            "
          >
            <div class="cardCart__info d-flex align-items-center">
              <div class="cardCart__contImg d-flex justify-content-center align-items-center">
                <img :src="product.image" class="cardCart__img" />
              </div>
              <div class="cardCart__descp">{{ product.title }}</div>
            </div>
            <!-- /__info -->
            <div class="cardCart__price">
              {{ product.price + " " + "USD" }}
            </div>
            <div class="cardCart__delete" @click="delProduct(product.id)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product_id"],
  data() {
    return {
      product: [],
      list_products: [],
    };
  },
  methods: {
    getProductById() {
      fetch("https://fakestoreapi.com/products/" + this.product_id)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.product = data;
          return data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    delProduct(id) {
      this.list_products = JSON.parse(localStorage.getItem("products"));
      for (let i = 0; i <= this.list_products.length; i++) {
        if (this.list_products[i].id == id) {
          this.list_products.splice(i, 1);
          let save_chng = JSON.stringify(this.list_products);
          window.localStorage.setItem("products", save_chng);
          break;
        }
      }
    },
  },
  beforeMount() {
    this.getProductById();
  },
};
</script>

<style lang="scss" scoped>
.cardCart {
  &__bg {
    position: relative;
    height: 194px;
    background: #F5F5F5;;
    border-radius: 6px;
    margin-bottom: 6px;
  }
  &__contImg {
    height: 160px;
    width: 164px;
    margin-left: 10px;
    background: #fff;
  }
  &__img {
    max-height: 160px;
    max-width: 164px;
    background-size: center;
    background-position: center;
  }
  &__descp {
    margin-left: 24px;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.2x;
  }
  &__price {
    margin-right: 44px;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    text-align: right;
    color: #009d35;
  }
  &__delete {
    position: absolute;
    top: +12px;
    right: +14px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f00;
    cursor: pointer;
  }
}
</style>