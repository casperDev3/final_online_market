<template>
  <div>
    <div
      class="
        header__fluentNumber
        d-flex
        align-items-center
        justify-content-center
      "
    >
      {{ products }}
    </div>
  </div>
</template>

<script>
export default {
    props: ["products"],
    
};
</script>

<style lang="scss" scoped>
.header {
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