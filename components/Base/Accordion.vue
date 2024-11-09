<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: [],
    required: false,
  },
  collabsable: {
    type: Boolean,
    default: false,
    required: false,
  },
  wrapperClass: {
    type: String,
    default: "px-5 py-4 bg-gray-100 duration-200",
    required: false,
  },
});

const tableData = ref(props.items || []);
const content = ref(null);

const beforeEnter = (el) => {
  el.style.height = "0";
};

const enter = (el) => {
  el.style.height = `${el.scrollHeight}px`;
};

const beforeLeave = (el) => {
  el.style.height = `${el.scrollHeight}px`;
};

const leave = (el) => {
  el.style.height = "0";
};

const toggleOpen = (index) => {
  // Close all items
  if (props.collabsable) {
    tableData.value.forEach((item, i) => {
      if (i !== index) item.open = false;
    });
  }
  tableData.value[index].open = !tableData.value[index].open;
};
</script>
<template>
  <div class="flex flex-col" v-if="tableData">
    <div
      v-for="(i, index) in tableData"
      :key="index"
      @click="toggleOpen(index)"
      class="flex-col w-full border border-gray-200"
      :class="wrapperClass"
    >
      <slot name="header" :item="i" />

      <transition
        name="slide-fade"
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-show="i.open" class="overflow-y-auto" ref="content">
          <div v-if="$slots.content">
            <slot name="content" :item="i" />
          </div>
          <div v-else>- - -</div>
        </div>
      </transition>
    </div>
  </div>
</template>
<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  overflow: hidden;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave {
  opacity: 1;
}
</style>
