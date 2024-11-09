<template>
  <div class="relative" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <p class="text-gray-700" @mouseenter="mouseEnter">Teach on Udemy</p>

    <div
      v-show="isPopupOpen"
      class="absolute top-[51px] right-1/2 w-72 p-5 flex flex-col gap-2 bg-white z-60"
    >
      <p class="text-lg font-extrabold">
        Turn what you know into an opportunity and reach millions around the
        world.
      </p>

      <BaseButton
        name="Learn More"
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
