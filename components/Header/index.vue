<template>
  <nav
    class="flex items-center justify-between px-6 bg-white shadow-md z-40 relative"
  >
    <!-- Logo and Categories -->
    <div class="flex items-center space-x-4">
      <img
        src="/images/logo-udemy.svg"
        alt="Udemy Logo"
        class="w-24 h-12 object-contain"
      />

      <Category />
    </div>

    <!-- Search Bar -->
    <div class="flex-grow w-fit mx-4 hidden sm:flex">
      <BaseInput
        v-model="search"
        placeholder="Search for anything"
        class="!w-full !rounded-full !py-3 focus:!outline-none focus:!ring-0"
        placeholder-style="text-sm"
        main-div="w-full"
        icon-leading-class="pl-12"
        name="search"
      >
        <template #leading>
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4"
          >
            <Icon
              name="material-symbols:search"
              class="text-gray-700 text-2xl"
            />
          </div>
        </template>
      </BaseInput>
    </div>

    <div class="flex items-center space-x-4">
      <a href="#" class="text-gray-700 hidden sm:block">Udemy Business</a>
      <a href="#" class="text-gray-700 hidden sm:block">Teach on Udemy</a>

      <div class="relative">
        <span
          class="absolute -top-6 -right-4 w-8 h-8 rounded-full bg-[#A435F0] text-white text-center flex items-center justify-center"
          >3
        </span>
        <Icon name="mdi:cart-outline" class="text-gray-700 text-2xl" />
      </div>
      <button class="text-gray-700">
        <i class="fas fa-shopping-cart"></i>
      </button>

      <BaseButton name="Log in" main-class="hover:bg-gray-300 !py-2" />
      <BaseButton
        name="Sign up"
        main-class="bg-gray-800 !text-white font-bold !py-2"
      />

      <button
        class="text-gray-700 border border-black px-3 py-2 hover:bg-gray-300"
      >
        <Icon name="mage:globe" class="text-gray-700 text-2xl" />
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
