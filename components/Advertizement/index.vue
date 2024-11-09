<template>
  <div class="flex justify-center bg-[#ECEB98] w-full py-5 px-5 relative z-50">
    <div>
      <div>
        <span class="font-bold text-sm">Sale ends today |</span> Invest skills.
        Starting at $11.99
      </div>

      <p class="font-bold text-lg text-center">
        Ends in {{ hours }}h {{ minutes }}m {{ seconds }}s
      </p>
    </div>

    <div @click="$emit('close')" class="absolute right-4 top-4">
      <Icon name="material-symbols:close" class="cursor-pointer text-xl" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Initialize the countdown with 24 hours (in seconds)
      countdown: 24 * 60 * 60,
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  },
  mounted() {
    // Start the countdown timer
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      // Set an interval to update the countdown every second
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
          this.updateTime();
        } else {
          clearInterval(this.timer); // Clear the timer when countdown is over
        }
      }, 1000);
    },
    updateTime() {
      // Calculate hours, minutes, and seconds
      this.hours = String(Math.floor(this.countdown / 3600)).padStart(2, "0");
      this.minutes = String(Math.floor((this.countdown % 3600) / 60)).padStart(
        2,
        "0"
      );
      this.seconds = String(this.countdown % 60).padStart(2, "0");
    },
  },
  beforeDestroy() {
    // Clear the timer if the component is destroyed
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
/* Optional: Add any additional styling you need here */
</style>
