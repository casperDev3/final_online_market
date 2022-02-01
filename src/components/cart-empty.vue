<template>
  <div class="empty">
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <div
            class="empty_cart d-flex align-items-center justify-content-center"
          >
            На жаль, Ви ще нічого не додали до кошика
          </div>
        </div>
      </div>
    </div>
    <!-- /container -->
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <router-link
            style="text-decoration: none"
            :to="{ name: 'Catalog', params: { category: 'all' } }"
          >
            <div
              class="
                empty_cart__btn
                d-flex
                justify-content-center
                align-items-center
              "
            >
              До каталогу
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.empty{
    height: 100vh
}
.empty_cart {
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
  text-align: center;
  color: #ff842c;

  width: 542px;
  height: 54px;
  background: rgba(255, 168, 0, 0.21);
  border-radius: 6px;
  margin-bottom: 34px;
  &__btn {
    width: 178px;
    height: 56px;
    background: #ff842c;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 6px;

    font-weight: 500;
    font-size: 22px;
    line-height: 1.2;
    color: #ffffff;
     transition-duration: 0.2s;
    &:hover {
      transform: scale(1.05, 1.05);
      background: #f76e12;
      transition-duration: 0.2s;  
    }
  }
}
</style>