<template>
  <div class="flex flex-col gap-3 text-sm pb-3">
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-2">
        <Icon name="mdi:cog-outline" /> Last updated 3/2020
      </div>

      <div class="flex items-center gap-2"><Icon name="mdi-web" /> English</div>

      <div v-show="!showLanguages" class="flex items-center gap-2">
        <Icon name="fa-regular:list-alt" /> English [Auto], French [Auto],
        <span
          @click="toggleLanguages"
          class="text-[#C0C4FC] underline hover:cursor-pointer"
          >8 more
        </span>
      </div>
    </div>

    <div v-if="showLanguages">
      <div class="flex items-center gap-2">
        <Icon name="fa-regular:list-alt" /> English [Auto], French [Auto],
      </div>
      <p>
        German [Auto], Indonesian [Auto], Italian [Auto], Portuguese [Auto],
        Simplified Chinese [Auto], Spanish [Auto], Thai [Auto], Vietnamese
        [Auto]
      </p>
    </div>
  </div>
</template>

<script setup>
const showLanguages = ref(false);
function toggleLanguages() {
  showLanguages.value = !showLanguages.value;
}
</script>
