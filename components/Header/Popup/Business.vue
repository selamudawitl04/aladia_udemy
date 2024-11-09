<template>
  <div class="relative" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <p class="text-gray-700" @mouseenter="mouseEnter">Udemy Business</p>

    <div
      v-show="isPopupOpen"
      class="absolute top-[51px] right-1/2 w-72 p-5 flex flex-col gap-2 bg-white z-60"
    >
      <p class="text-lg font-extrabold">
        Get your team access to over 27,000 top Udemy courses, anytime,
        anywhere.
      </p>

      <BaseButton
        name="Try Udemy Business"
        main-class="bg-gray-800 !text-white font-bold !py-2 w-full justify-center "
      />
    </div>
  </div>
</template>

<script setup>
const isPopupOpen = ref(false);
function mouseEnter() {
  isPopupOpen.value = true;
}

function mouseLeave() {
  isPopupOpen.value = false;
}
</script>
