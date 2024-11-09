<template>
  <div>
    <div class="flex items-center gap-x-2 my-10">
      <Icon name="ic:baseline-star" class="text-4xl text-yellow-700 shrink-0" />
      <p class="text-gray-900 text-xl font-extrabold">4.3 course rating</p>
      <Icon
        name="radix-icons:dot-filled"
        class="text-2xl text-gray-500 shrink-0"
      />
      <p class="text-gray-900 text-xl font-extrabold">4K Ratings</p>
    </div>
    <ul class="grid grid-cols-2 gap-x-10">
      <CourseRatingItem
        :item="item"
        class="border-t-2 py-5"
        v-for="item in courses"
      />
    </ul>
    <button
      class="text-gray-800 font-semibold px-8 py-3 border-2 border-gray-600"
    >
      Show all reviews
    </button>
  </div>
</template>

<script setup>
const courses = ref([
  {
    image: "https://img-c.udemycdn.com/course/50x50/3227583_5e75_6.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    posted_at: "amonth ago",
    stars: 4.5,
    description:
      "The most complete course available on Product Management. 13+ hours of videos, activities, interviews, & more",
  },
  {
    image: "https://img-c.udemycdn.com/course/50x50/3227583_5e75_6.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    posted_at: "amonth ago",
    stars: 4.5,
    description:
      "The most complete course available on Product Management. 13+ hours of videos, activities, interviews, & more",
  },
  {
    image: "https://img-c.udemycdn.com/course/50x50/3227583_5e75_6.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    posted_at: "amonth ago",
    stars: 4.5,
    description:
      "The most complete course available on Product Management. 13+ hours of videos, activities, interviews, & more",
  },
  {
    image: "https://img-c.udemycdn.com/course/50x50/3227583_5e75_6.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    posted_at: "amonth ago",
    stars: 4.5,
    description:
      "The most complete course available on Product Management. 13+ hours of videos, activities, interviews, & more",
  },
]);
</script>

<style scoped></style>
