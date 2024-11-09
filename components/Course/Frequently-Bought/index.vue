<template>
  <ul
    role="list"
    class="overflow-hidden bg-white ring-1 ring-gray-300 px-4 sm:px-6 py-5"
  >
    <h1 class="text-xl font-extrabold text-gray-800 mb-5">
      Frequently bought together
    </h1>
    <div
      v-for="person in people"
      :key="person.author"
      class="relative flex justify-between gap-x-6 py-5 hover:bg-gray-50"
    >
      <div class="flex min-w-0 gap-x-4">
        <img
          class="w-44 flex-none bg-gray-50 object-cover"
          :src="person.imageUrl"
          alt=""
        />
        <div class="min-w-0 flex-auto">
          <div class="text-sm/6 font-semibold text-gray-900">
            <p class="text-xl text-gray-600 font-semibold">
              {{ person.title }}
            </p>
          </div>
          <div class="mt-1 flex text-xs/5 text-gray-500">
            <p class="relative truncate hover:underline">{{ person.author }}</p>
          </div>
          <div class="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
            <span class="text-base font-semibold text-amber-800 leading-5">{{
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
            <span class="text-base text-gray-500">({{ person.students }})</span>
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

    <div class="flex justify-between mt-5">
      <div class="flex items-center text-xl text-gray-600">
        Total :
        <h1 class="text-3xl font-semibold text-gray-600">
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

const rating = ref(3.4);
</script>
