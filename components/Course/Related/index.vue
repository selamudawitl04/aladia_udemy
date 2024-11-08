<template>
  <div class="flex flex-col gap-3 my-7">
    <h2 class="text-xl font-extrabold">Explore related topics</h2>

    <div class="flex items-center gap-2">
      <div
        v-for="course in relatedCourses"
        :key="course.id"
        class="border border-black px-4 py-3 rounded-full cursor-pointer hover:bg-gray-200 font-bold text-sm"
      >
        {{ course.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
const relatedCourses = ref([
  {
    id: "1",
    title: "Figma",
  },

  {
    id: "2",
    title: "User Experience Design",
  },

  {
    id: "3",
    title: "Design",
  },
]);
</script>
