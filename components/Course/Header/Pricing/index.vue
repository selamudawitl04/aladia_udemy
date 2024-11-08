<template>
  <div class="relative">
    <div class="absolute top-0 w-full bg-white shadow-xl">
      <div class="bg-white">
        <div class="relative w-full bg-white">
          <!-- Background Image -->
          <img
            src="/images/udemy_cover.webp"
            alt="Udemy cover image"
            class="h-60 w-full object-cover"
          />

          <!-- Gradient and Overlay Content -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-white/20 flex flex-col gap-8 items-center pb-4 justify-end z-[202]"
          >
            <div
              class="rounded-full w-[6rem] h-[6rem] bg-white flex justify-center items-center shadow-lg"
            >
              <Icon name="mdi:play" class="text-5xl text-black" />
            </div>
            <p class="text-white text-center font-extrabold">
              Preview this course
            </p>
          </div>
        </div>

        <!-- -------Plan tab -->

        <CourseHeaderPricingTab />
      </div>
    </div>
  </div>
</template>
