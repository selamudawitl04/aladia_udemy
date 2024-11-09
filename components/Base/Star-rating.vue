<template>
  <div class="star-rating" :class="{ 'preview-mode': previewOnly }">
    <div class="stars-container" @mouseleave="!previewOnly && resetTemp">
      <div
        v-for="index in maxStars"
        :key="index"
        class="star"
        @click="!previewOnly && selectRating(index)"
        @mousemove="!previewOnly && handleMouseMove($event, index)"
        :class="{ disabled: previewOnly }"
      >
        <div class="star-wrapper">
          <!-- Background star (gray) -->
          <svg
            class="star-svg background"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
          <!-- Filled star (yellow) with clip-path -->
          <svg
            class="star-svg filled"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            :style="{
              clipPath: `inset(0 ${100 - getFillPercentage(index)}% 0 0)`,
            }"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="rating-text" v-if="showRating">
      {{ (tempRating || modelValue || 0).toFixed(1) }} of {{ maxStars }} stars
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  maxStars: {
    type: Number,
    default: 5,
  },
  precision: {
    type: Number,
    default: 0.1,
  },
  showRating: {
    type: Boolean,
    default: true,
  },
  previewOnly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  "update:modelValue",
  "rating-selected",
  "current-rating",
]);

const tempRating = ref(0);

const getFillPercentage = (starIndex) => {
  const rating = tempRating.value || props.modelValue;
  const percentage = Math.max(
    0,
    Math.min(100, (rating - (starIndex - 1)) * 100)
  );
  return percentage;
};

const handleMouseMove = (event, starIndex) => {
  if (props.previewOnly) return;

  const rect = event.currentTarget.getBoundingClientRect();
  const width = rect.width;
  const position = event.clientX - rect.left;
  const percentage = position / width;

  // Calculate rating with precision
  let rating = starIndex - 1 + percentage;
  rating = Math.round(rating / props.precision) * props.precision;
  rating = Math.max(0, Math.min(props.maxStars, rating));

  tempRating.value = rating;
  emit("current-rating", rating);
};

const selectRating = (starIndex) => {
  if (props.previewOnly) return;

  const rating = tempRating.value;
  emit("update:modelValue", rating);
  emit("rating-selected", rating);
};

const resetTemp = () => {
  if (props.previewOnly) return;

  tempRating.value = 0;
  emit("current-rating", 0);
};
</script>

<style scoped>
.star-rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.preview-mode {
  cursor: default;
}

.stars-container {
  display: flex;
  gap: 0.25rem;
}

.star {
  cursor: pointer;
  width: 2rem;
  height: 2rem;
}

.star.disabled {
  cursor: default;
}

.star-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.star-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease;
}

.star-svg.background {
  fill: #e5e7eb; /* gray-200 */
}

.star-svg.filled {
  fill: #fbbf24; /* amber-400 */
}

/* Only apply hover effect when not in preview mode */
.star:not(.disabled):hover .star-svg {
  transform: scale(1.1);
}

.rating-text {
  font-size: 0.875rem;
  color: #6b7280; /* gray-500 */
}
</style>
