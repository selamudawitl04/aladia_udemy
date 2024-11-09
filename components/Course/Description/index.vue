<template>
  <div class="flex flex-col gap-y-5 relative my-6">
    <h2 class="text-xl font-semibold text-gray-800">Description</h2>
    <p class="text-gray-700 font-semibold">
      This course is constantly being revised and updated with new lessons.
    </p>
    <div class="relative">
      <div
        :class="[
          openDesc ? 'line-clamp-none' : 'line-clamp-[12]',
          'text-[#4b5563] duration-300 text-sm',
        ]"
      >
        Have you ever wanted to design your own app, website or blog? These
        days, we use them without a second thought. They have become an integral
        part of both the human experience and the financial market. It’s easy to
        come up with a new idea for a viral new app, but not as easy to make
        that app a reality - or so you might think. That’s where Figma comes in.
        Figma is a free, collaborative UI/ UX design tool that can help you
        design a wide range of interfaces in great detail - and we’re here to
        teach you how. In this course, you’re going to learn everything about
        user interface design with Figma. Step-by-step, we’ll cover everything
        you need to know from opening the program for the very first time to
        finalising your finished design. You’ll learn all of the tools, as well
        as how and when to use them. We’ll also cover everything you’ll need to
        be able to collaborate with other web developers easily through its
        collaborative feature. During the course, you will learn about the
        principles of User Interface Design in order to design with purpose, as
        well as the principles of Human-Computer Interaction. Finally, we’ll
        teach you how to adapt to specific project requirements, as well as how
        to wireframe in order to turn your design into a functional prototype.
      </div>
      <div
        class="bg-gradient-to-t from-white to-white/0 h-40 absolute bottom-0 w-full"
        v-if="!openDesc"
      ></div>

      <Transition name="fade">
        <div v-if="openDesc" class="text-sm flex flex-col gap-2">
          <h3>Start your UI/UX development journey with us!</h3>

          <h4 class="pt-4">After taking this course, you will be able to:</h4>
          <ul>
            <li>
              Create prototypes and collaborate with web developers easily
            </li>
            <li>
              Achieve an understanding of the process, purpose, and tools of
              prototype design
            </li>
            <li>
              Understand the principles of User Interface Design in order to
              design with purpose
            </li>
            <li>Learn the basics of Human-Computer Interaction</li>
            <li>Discover the standard tools in User Interface</li>
            <li>Adapt to specific project deliverables in User Interface</li>
            <li>Understand the principles of User Experience</li>
          </ul>

          <h4 class="text-xl font-bold">Who this course is for:</h4>
          <ul>
            <li>
              Anyone who wants to learn to design user interfaces - no
              experience needed!
            </li>
            <li>
              Anyone looking to design their own application, website or blog
            </li>
            <li>UI/UX designers who want to expand their portfolio</li>
          </ul>
        </div>
      </Transition>
    </div>
    <button
      @click="openDesc = !openDesc"
      class="text-[#371783] flex items-center justify-start gap-x-2 -translate-y-2 font-semibold"
    >
      Show <span>{{ openDesc ? "Less" : "More" }}</span>
      <Icon
        name="radix-icons:chevron-up"
        class="duration-300 text-xl"
        :class="[openDesc ? '' : 'transform rotate-180']"
      />
    </button>
  </div>
</template>

<script setup>
const openDesc = ref(false);
</script>

<style scoped></style>
