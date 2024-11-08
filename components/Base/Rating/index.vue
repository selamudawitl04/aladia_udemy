<template>
  <div class="flex items-center gap-2">
    <p class="text-[#F69C08] font-bold">{{ rating }}</p>

    <NuxtRating :read-only="false" :ratingValue="rating" />

    <p class="text-[#C0C4FC]">( {{ numberOfReviews }} ratings)</p>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
  numberOfReviews: {
    type: Number,
    required: true,
  },
});
</script>
