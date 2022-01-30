<template>
  <div>
    <b-modal id="item-added" hide-footer hide-header centered>
      <div class="product_card__modalWindow">
        <div class="d-flex justify-content-center">
          <img class="product_card__modalImg" src="@/assets/check_modal.png" />
        </div>
        <div class="product_card__modalText d-flex justify-content-center">
          Товар в кошику
        </div>
        <div
          class="
            product_card__modalBtn
            d-flex
            justify-content-center
            align-items-center
          "
          @click="closeModal()"
        >
          Закрити
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$bvModal.hide("item-added");
    },
  },
};
</script>

<style lang="scss" scoped>
.product_card {
  &__modalImg {
    max-width: 64px;
    max-height: 64px;
    margin-bottom: 8px;
  }
  &__modalText {
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 46px;
  }
  &__modalBtn {
    max-width: 504px;
    height: 58px;
    background: #ff842c;
    border-radius: 6px;
    font-weight: normal;
    font-size: 24px;
    line-height: 1.2;
    color: #ffffff;
    cursor: pointer;
  }
  &__modalWindow {
    max-width: 538px;
    background: #ffffff;
  }
}
</style>