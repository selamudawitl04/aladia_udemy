<template>
  <div class="border-b-2 text-sm">
    <h1 class="text-xl font-extrabold mt-10 my-5">
      More Courses by
      <span class="text-[#371783]">Creative Unleashed</span>
    </h1>
    <ul class="grid grid-cols-3 gap-x-5">
      <CourseMoreCoursesItem
        v-for="item in otherCourses"
        :key="item.title"
        :item="item"
      />
    </ul>
    <hr class="mt-10" />
    <button
      class="text-gray-800 font-semibold px-8 py-3 border-2 border-gray-600 flex w-full justify-center items-center mt-5"
    >
      Report abuse
    </button>
  </div>
</template>

<script setup>
const otherCourses = ref([
  {
    image: "https://img-c.udemycdn.com/course/240x135/4651924_4143_2.jpg",
    title: "The Complete Web Developer in 2022: Zero to Mastery",
    tag: "Creativity Unleashed",
    stars: 4.7,
    reviews: 18000,
    duration: "25.5 total hours",
    lectures: 180,
    author: "Andrei Neagoie",
    price: 11.99,
  },
  {
    image: "https://img-c.udemycdn.com/course/240x135/4651924_4143_2.jpg",
    title: "The Complete Web Developer in 2022: Zero to Mastery",
    tag: "Creativity Unleashed",
    author: "Andrei Neagoie",
    stars: 3.7,
    reviews: 18000,
    duration: "25.5 total hours",
    lectures: 180,
    price: 11.99,
  },
  {
    image: "https://img-c.udemycdn.com/course/240x135/4651924_4143_2.jpg",
    title: "The Complete Web Developer in 2022: Zero to Mastery",
    tag: "Creativity Unleashed",
    author: "Andrei Neagoie",
    stars: 3.7,
    reviews: 18000,
    duration: "25.5 total hours",
    lectures: 180,
    price: 11.99,
  },
]);
</script>

<style scoped></style>
