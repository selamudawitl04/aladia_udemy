<template>
  <footer class="bg-[#2D2F31] text-white w-full pb-12 lg:pb-24">
    <div
      class="flex flex-col gap-y-2 lg:flex-row lg:gap-y-0 justify-between lg:items-center p-5 lg:px-12 lg:py-5"
    >
      <p>
        Top companies choose
        <span class="text-[#C0C4FC]">Udemy Business</span> to build in-demand
        career skills.
      </p>

      <div class="flex justify-between py-2 gap-x-6 flex-wrap">
        <img src="/images/nasdaq-dark.svg" alt="" />
        <img src="/images/volkswagen-dark.svg" alt="" />
        <img src="/images/box-dark.svg" alt="" />
        <img src="/images/netapp-dark.svg" alt="" />
        <img src="/images/eventbrite-dark.svg" alt="" />
      </div>
    </div>
    <hr class="border-gray-700" />

    <div
      class="w-full flex flex-col-reverse gap-y-2 lg:flex-row lg:gap-y-0 lg:justify-between lg:items-start px-5 lg:px-12 pt-6"
    >
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <li v-for="link in footerLinks" class="min-w-[15rem] text-sm">
          <a href="#" class="hover:underline">{{ link.text }}</a>
        </li>
      </ul>

      <div class="t">
        <BaseButton
          name="English"
          main-class="  border border-white text-white font-medium !py-1.5 !px-6"
        >
          <template #leading>
            <div>
              <Icon name="mage:globe" class="text-white text-2xl" />
            </div>
          </template>
        </BaseButton>
      </div>
    </div>

    <div class="w-full flex justify-between items-center px-5 lg:px-12 pt-6">
      <img
        src="/images/logo-udemy-inverted.svg"
        alt="Udemy Logo"
        class="w-24 h-12 object-contain"
      />

      <div class="text-center">
        <p class="text-xs">© 2024 Udemy, Inc.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLinks = [
  { text: "Udemy Business", url: "#" },
  { text: "Teach on Udemy", url: "#" },
  { text: "Get the app", url: "#" },
  { text: "About us", url: "#" },
  { text: "Contact us", url: "#" },
  { text: "Careers", url: "#" },
  { text: "Blog", url: "#" },
  { text: "Help and Support", url: "#" },
  { text: "Affiliate", url: "#" },
  { text: "Investors", url: "#" },
  { text: "Terms", url: "#" },
  { text: "Privacy policy", url: "#" },
  { text: "Sitemap", url: "#" },
  { text: "Accessibility statement", url: "#" },
];
</script>

<!-- #1C1D1F #2D2F31 -->
