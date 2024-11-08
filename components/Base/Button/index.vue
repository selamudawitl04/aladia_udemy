<template>
  <button
    class="border border-gray-800 text-gray-800 px-4 py-3 font-bold flex items-center gap-2"
    :class="mainClass"
    :disabled="disabled"
    @click="$emit('buttonClick')"
  >
    <slot name="leading" />
    <span :class="textClass">{{ name }}</span>

    <slot name="trailing" />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  mainClass: {
    type: String,
    default: "",
  },
  textClass: {
    type: String,
    default: "",
  },

  name: {
    type: String,
    default: "",
  },
});
</script>
