<template>
  <ul
    role="list"
    class="overflow-hidden bg-white ring-1 ring-gray-300 px-4 sm:px-6 py-5 my-8"
  >
    <h1 class="text-xl font-extrabold text-gray-800 mb-5">
      Frequently bought together
    </h1>
    <CourseFrequentlyBoughtItem
      v-for="person in people"
      :key="person.author"
      :person="person"
      class="relative flex justify-between gap-x-6 py-5 hover:bg-gray-50"
    />

    <div class="flex justify-between mt-5">
      <div class="flex items-center text-xl text-black">
        Total :
        <h1 class="text-2xl font-semibold text-black">
          {{
            people
              .reduce((acc, person) => acc + person.price, 0)
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
          }}
        </h1>
      </div>
      <div class="flex justify-end">
        <button class="px-7 py-3 bg-primary-600 font-bold text-white text-lg">
          Add all to cart
        </button>
      </div>
    </div>
  </ul>
</template>

<script setup>
const people = [
  {
    imageUrl: "https://img-c.udemycdn.com/course/240x135/4296386_3a96.jpg",
    title: "UI/UX Design with Figma: 5+ Real Word Projects",
    author: "creativity Unleashed",
    stars: 4.2,
    students: 3944,
    href: "#",
    price: 11.99,
    discount: 69.99,
  },
  {
    imageUrl: "https://img-c.udemycdn.com/course/240x135/4361412_d880.jpg",
    title: "Complete Adobe XD Mega Course - Beginner to Expert",
    author: "creativity Unleashed",
    stars: 4.3,
    students: 1251,
    href: "#",
    price: 11.99,
    discount: 69.99,
  },
  {
    imageUrl: "https://img-c.udemycdn.com/course/240x135/4279488_7a29_2.jpg",
    title: "Complete Figma Mega Course - UI/UX Design Beginner to Expert",
    author: "Chetan Pujari",
    stars: 4.4,
    students: 1004,
    href: "#",
    price: 11.99,
    discount: 69.99,
  },
];
</script>
