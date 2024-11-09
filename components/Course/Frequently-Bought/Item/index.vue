<template>
  <div
    class="relative flex justify-between items-start gap-x-6 py-5 hover:bg-gray-50"
  >
    <div class="flex min-w-0 gap-x-4">
      <img
        class="w-44 flex-none bg-gray-50 object-cover"
        :src="person.imageUrl"
        alt=""
      />
      <div class="min-w-0 flex-auto">
        <div class="text-sm/6 font-semibold text-gray-900">
          <p class="text-base text-gray-900 font-extrabold">
            {{ person.title }}
          </p>
        </div>
        <div class="mt-1 flex text-xs/5 text-gray-500">
          <p class="relative capitalize truncate hover:underline">
            {{ person.author }}
          </p>
        </div>
        <div class="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
          <span class="text-sm font-semibold text-amber-800 leading-5">{{
            person.stars
          }}</span>
          <BaseStarRatingFloating
            v-model="person.stars"
            :precision="0.1"
            @rating-selected="handleRatingSelected"
            @current-rating="handleCurrentRating"
            starSize="19px"
            :showRating="false"
            :disabled="true"
            fillColor="#d55400"
          />
          <span class="text-sm text-gray-500">({{ person.students }})</span>
        </div>
      </div>
    </div>
    <div class="flex shrink-0 items-center gap-x-4">
      <div
        class="hidden sm:flex sm:flex-col sm:items-end font-semibold text-lg"
      >
        {{
          person.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  person: Object,
});

const rating = ref(3.4);
</script>
