<template>
  <div class="p-4 border border-black">
    <h3 class="text-sm font-bold">
      Top companies offer this course to their employees
    </h3>

    <p class="text-sm mb-4 text-gray-500">
      Get this course, plus 12,000+ of our top-rated courses, with Personal
      Plan.
      <span class="text-[#3B198F] font-extrabold underline"> Learn more </span>
    </p>

    <div class="flex justify-between py-2">
      <img src="/images/nasdaq-dark.svg" alt="" />
      <img src="/images/volkswagen-dark.svg" alt="" />
      <img src="/images/box-dark.svg" alt="" />
      <img src="/images/netapp-dark.svg" alt="" />
      <img src="/images/eventbrite-dark.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
const features = ref([
  "The principles of User Interface Design and Prototyping",
  "The basics of Human-Computer Interaction",
  "How to read a User Flow Diagram",
  "How to use Figma and its given tools",
  "How to design within Figma",
  "Wireframing in order to produce a functional prototype",
  "How to use the collaborative feature",
  "How to give and receive feedback on prototypes",
  "The principles of UX design",
  "The importance of color theory",
  "What are the most common beginner mistakes and how to avoid them",
  "The principles of forms, buttons, and plugins",
  "How to create an app",
  "How to make a website",
  "All about content creation",
  "How to animate in Figma",
  "How to create interactive calendars",
  "To make a Netflix prototype",
]);

const isShowMore = ref(false);
const showLimit = 10; // Set the limit of items to show when collapsed

const displayedFeatures = computed(() =>
  isShowMore.value ? features.value : features.value.slice(0, showLimit)
);

function toggleShowMore() {
  isShowMore.value = !isShowMore.value;
}
</script>
