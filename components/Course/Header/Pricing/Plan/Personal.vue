<template>
  <div class="text-black px-6 py-5">
    <p class="text-xl font-extrabold">Subscribe to Udemy’s top courses</p>

    <p class="text-sm mb-4">
      Get this course, plus 12,000+ of our top-rated courses, with Personal
      Plan.
      <span class="text-[#3B198F] font-extrabold underline"> Learn more </span>
    </p>

    <BaseButton
      name="Try Personal Plan for free "
      main-class=" bg-[#A435F0] !text-white !w-full !border-none"
    />

    <div class="text-center text-xs py-2 text-gray-500">
      Starting at $10.00 per month after trial
    </div>

    <p class="py-1 text-xs text-center text-gray-500">Cancel anytime</p>

    <!-- <div class="border-b border-gray-300 relative w-full">
      <div class="absolute insert-x-0 top-0">or</div>
    </div> -->

    <div class="">
      <div class="text-2xl font-semibold text-gray-900">
        <span class="mr-2">$11.99</span>
        <span class="text-xl line-through text-gray-400">$64.99</span>
        <span class="text-sm font-medium ml-2">82% off</span>
      </div>
      <div class="text-sm text-red-600 mt-2">
        ⏰ <span class="font-bold">2 hours</span> left at this price!
      </div>

      <button
        class="w-full mt-4 py-3 font-semibold border border-black hover:bg-gray-200"
      >
        Add to cart
      </button>

      <div class="text-center text-xs py-1 text-gray-500">
        30-Day Money-Back Guarantee
      </div>

      <p class="py-1 text-xs text-center text-gray-500">Full Lifetime Access</p>

      <div
        class="mt-4 flex justify-around text-sm font-extrabold text-[#292b2c]"
      >
        <button class="hover:underline">Share</button>
        <button class="hover:underline">Gift this course</button>
        <button class="hover:underline">Apply Coupon</button>
      </div>

      <div
        class="flex items-center justify-between border border-dashed border-gray-400 p-2 mt-4 mb-3 text-xs"
      >
        <div class="text-gray-500">
          <p>
            <span class="font-extrabold">ST2MT110724BNEW </span>
            is applied
          </p>

          <span class="text-xs text-gray-500">Udemy open</span>
        </div>

        <div @click="$emit('close')" class="text-[#A435F0]">
          <Icon
            name="material-symbols:close"
            class="cursor-pointer text-xl text-"
          />
        </div>
      </div>

      <div class="flex items-stretch">
        <BaseInput
          placeholder="Enter Coupon"
          main-div=" !w-[70%] "
          class="!border-black !rounded-none h-full"
          placeholder-style="text-xs"
        />

        <BaseButton
          name="Apply"
          main-class="bg-gray-800 !text-white font-medium text-sm !py-0 !w-[30%] !border !border-black"
        />
      </div>
    </div>
  </div>
</template>
