<template>
  <div class="">
    <Transition name="fade" mode="out-in">
      <Advertizement v-if="showAdvertizement" @close="closeAdvertizement" />
    </Transition>
    <Header />
    <Course />
    <Footer />
  </div>
</template>
<script setup>
const showAdvertizement = ref(true);

function closeAdvertizement() {
  showAdvertizement.value = false;
}
</script>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
