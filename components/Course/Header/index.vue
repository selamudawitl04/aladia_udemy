<template>
  <div class="bg-[#1C1D1F] w-full text-white">
    <CourseHeaderNav />
    <div class="gap-8 max-w-6xl w-full mx-auto py-8 grid grid-cols-3">
      <div class="flex flex-col gap-6 col-span-2 pr-5">
        <div class="text-[#C0C4FC] font-bold text-sm">
          Design <Icon name="mingcute:right-fill" class="text-xl" /> User
          Experience Design<Icon name="mingcute:right-fill" class="text-xl" />
          User Experience (UX) Design
        </div>
        <div class="text-4xl font-extrabold text-white">
          UX & Web Design Master Course: Strategy, Design, Development
        </div>

        <div class="text-xl font-bold text-white">
          Learn how to apply User Experience (UX) principles to your website
          designs, code a variety of sites, and increase sales!
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <BaseRating :rating="4.5" :numberOfReviews="15378" />
            <p class="">106,292 students</p>
          </div>

          <p class="">
            Created by
            <NuxtLink class="text-[#C0C4FC] underline" to="#"
              >Creativity Unleashed</NuxtLink
            >
          </p>

          <CourseHeaderLanguage />
        </div>
      </div>

      <CourseHeaderPricing />
    </div>
  </div>
</template>
