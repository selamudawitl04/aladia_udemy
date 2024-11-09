<template>
  <div class="p-6 border border-black">
    <h2 class="text-2xl font-bold">What you'll learn</h2>

    <ul
      class="grid grid-cols-2 gap-x-3 py-2 relative"
      :class="{
        ' ': !isShowMore,
      }"
    >
      <li
        v-for="(feature, index) in displayedFeatures"
        :key="index"
        :class="[
          'flex items-center mb-2 text-sm transition-opacity duration-300',
        ]"
      >
        <Icon
          name="material-symbols:check"
          class="h-4 w-4 text-gray-800 mr-2"
        />
        <span class="text-gray-700">{{ feature }}</span>
      </li>

      <div
        class="bg-gradient-to-t from-white to-white/0 h-40 absolute bottom-0 w-full"
        v-if="!isShowMore"
      ></div>
    </ul>

    <button
      class="flex items-center text-[#3B198F] font-bold hover:underline text-sm"
      @click="toggleShowMore"
    >
      <span>{{ isShowMore ? "Show Less" : "Show More" }}</span>
      <Icon
        :name="
          isShowMore
            ? 'material-symbols:expand-less'
            : 'material-symbols:expand-more'
        "
        class="ml-1 h-5 w-5"
      />
    </button>
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
