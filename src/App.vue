<template>
  <div>
    <Header />
    <div class="loyaut">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>

<style lang="scss" scoped>
.loyaut{
  padding: 60px;
}
</style>