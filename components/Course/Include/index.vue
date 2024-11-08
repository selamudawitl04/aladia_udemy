<template>
  <div class="flex flex-col gap-3 my-12">
    <h2 class="text-xl font-extrabold">This course includes</h2>

    <div class="grid grid-cols-2 gap-2">
      <div
        v-for="course in courseIncludes"
        :key="course.id"
        class="text-sm flex items-center gap-3"
      >
        <Icon :name="course.icon" class="text-xl" />
        {{ course.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
const courseIncludes = ref([
  {
    icon: "material-symbols-light:live-tv-outline",
    title: "41.5 hours on-demand video",
  },
  { icon: "fe:mobile", title: "Access on mobile and TV" },
  { icon: "uil:folder-download", title: "2 downloadable resources" },
  {
    icon: "material-symbols:trophy-outline",
    title: "Certificate of completion",
  },
]);
</script>
