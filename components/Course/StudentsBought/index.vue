<template>
  <div class="mt-8 flow-root">
    <h2 class="text-xl font-extrabold text-gray-800">Students also bought</h2>

    <div class="min-w-full align-middle">
      <table class="min-w-full divide-y divide-gray-300">
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="course in courses" :key="course.id">
            <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
              <div class="flex h-full">
                <div class="h-16 w-16 shrink-0">
                  <img class="h-16 w-16" :src="course.image" alt="" />
                </div>
                <div class="ml-4 flex flex-col gap-y-1">
                  <div class="font-medium text-gray-900">
                    {{ course.title }}
                  </div>
                  <div class="mt-1 text-gray-500 flex items-center">
                    <span
                      class="bg-customYellow-300 text-gray-600 self-center font-semibold px-2 text-xs leading-loose"
                      >{{ course.tag }}</span
                    >
                    <span class="text-teal-800 font-semibold pl-2">
                      {{ course.duration }}</span
                    >
                    <Icon name="radix-icons:dot-filled" class="px-2" />
                    <span class="text-gray-600">
                      Updated {{ course.updated_at }}</span
                    >
                  </div>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <div
                class="text-gray-600 flex gap-x-1 items-center text-base font-semibold"
              >
                {{ course?.stars }}
                <Icon
                  name="material-symbols:star"
                  class="text-yellow-600 text-xl"
                />
              </div>
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <div class="text-gray-600 flex gap-x-1 items-center">
                <Icon name="ic:sharp-group" class="text-gray-500 text-xl" />
                {{ course?.students.toLocaleString() }}
              </div>
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <div class="flex shrink-0 items-center gap-x-6">
                <div class="hidden sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm/6 text-gray-900">
                    {{
                      course.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                    }}
                  </p>
                  <p class="mt-1 text-xs/5 text-gray-500 line-through">
                    {{
                      course.discount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                    }}
                  </p>
                </div>
              </div>
            </td>
            <td
              class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
            >
              <button
                type="button"
                class="text-gray-500 hover:text-gray-600 ring-1 ring-gray-600 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <Icon
                  name="fluent-emoji-high-contrast:white-heart"
                  class="text-2xl"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button
      v-if="courses?.length - 10"
      class="border-2 border-gray-400 font-medium w-full text-sm py-3"
    >
      {{ courses.length - 10 }} more sections
    </button>
  </div>
</template>

<script setup>
const courses = [
  {
    id: 1,
    image: "https://img-c.udemycdn.com/course/50x50/3227583_5e75_6.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 2,
    image: "https://img-c.udemycdn.com/course/50x50/3197760_98b9_9.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 1,
    image: "https://img-c.udemycdn.com/course/50x50/3227583_5e75_6.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 2,
    image: "https://img-c.udemycdn.com/course/50x50/3197760_98b9_9.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 1,
    image: "https://img-c.udemycdn.com/course/50x50/3227583_5e75_6.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 2,
    image: "https://img-c.udemycdn.com/course/50x50/3197760_98b9_9.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 1,
    image: "https://img-c.udemycdn.com/course/50x50/3227583_5e75_6.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 2,
    image: "https://img-c.udemycdn.com/course/50x50/3197760_98b9_9.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 1,
    image: "https://img-c.udemycdn.com/course/50x50/3227583_5e75_6.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 2,
    image: "https://img-c.udemycdn.com/course/50x50/3197760_98b9_9.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 1,
    image: "https://img-c.udemycdn.com/course/50x50/3227583_5e75_6.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
  {
    id: 2,
    image: "https://img-c.udemycdn.com/course/50x50/3197760_98b9_9.jpg",
    title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
    tag: "Bestseller",
    duration: "25.5 total hours",
    updated_at: "9/2024",
    stars: 4.5,
    students: 161715,
    price: 11.99,
    discount: 94.99,
  },
];
</script>
