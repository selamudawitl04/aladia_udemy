<template>
  <div class="">
    <div class="grid grid-cols-2">
      <div
        class="py-4 text-gray-600 text-center font-bold cursor-pointer hover:text-black border-b border-gray-300"
        :class="{ 'active-plan': isPersonalPlanActive }"
        @click="isPersonalPlanActive = true"
      >
        Personal
      </div>

      <div
        class="py-4 text-gray-600 text-center font-bold cursor-pointer hover:text-black border-b border-gray-300"
        :class="{ 'active-plan': !isPersonalPlanActive }"
        @click="isPersonalPlanActive = false"
      >
        Teams
      </div>
    </div>

    <Transition name="fade" mode="out-in">
      <div v-if="isPersonalPlanActive">
        <CourseHeaderPricingPlanPersonal />
      </div>
      <div v-else>
        <CourseHeaderPricingPlanTeams />
      </div>
    </Transition>
  </div>
</template>

<script setup>
const isPersonalPlanActive = ref(true);
</script>

<style scoped>
.active-plan {
  border-bottom: 2px solid black;
  color: black;
}
</style>
