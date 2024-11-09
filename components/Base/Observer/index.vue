<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  options: {
    type: Object,
    default: () => ({
      rootMargin: "0px 0px 0px 0px", // Observe both entering and exiting viewport
      threshold: 0, // Trigger as soon as any part of the element intersects
    }),
  },
});

const emit = defineEmits(["intersect"]);
const root = ref(null);
const observer = ref(null);
let previousY = 0; // Store the previous Y position to determine the direction
let previousIntersection = false; // Track previous intersection state

onMounted(() => {
  observer.value = new IntersectionObserver(([entry]) => {
    const currentY = entry.boundingClientRect.y;
    const isIntersecting = entry.isIntersecting;

    if (isIntersecting && !previousIntersection) {
      // Element is entering the viewport
      const direction = currentY > previousY ? "from bottom" : "from top";
      emit("intersect", { isIntersecting: true, direction });
    } else if (!isIntersecting && previousIntersection) {
      // Element is exiting the viewport
      const direction = currentY > previousY ? "to bottom" : "to top";
      emit("intersect", { isIntersecting: false, direction });
    }

    previousY = currentY; // Update previous Y position
    previousIntersection = isIntersecting; // Update previous intersection state
  }, props.options);

  observer.value.observe(root.value);
});

onUnmounted(() => {
  observer.value.disconnect();
});
</script>

<template>
  <div ref="root" />
</template>
