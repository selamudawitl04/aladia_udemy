<template>
  <div class="flex">
    <div class="relative group" @mouseenter="handleMouseEnterCategories">
      <span class="text-gray-700">Categories</span>

      <div
        class="absolute left-0 bg-white border text-sm z-10 flex mt-[30px] min-h-[35rem]"
        :class="[dropdownWidth]"
        @mouseleave="handleMouseLeaveCategories"
        v-show="showCategories"
      >
        <!-- Categories Dropdown -->
        <div
          class="bg-white w-[16rem] py-4"
          @mouseenter="handleMouseEnterCategories"
        >
          <ul class="space-y-2 px-4">
            <li
              v-for="(category, index) in categories"
              :key="index"
              @mouseenter="handleMouseEnterCategory(category)"
              class="hover:text-purple-600 cursor-pointer flex items-center justify-between gap-8"
            >
              {{ category.name }}

              <Icon name="heroicons-solid:chevron-right" class="h-4 w-4" />
            </li>
          </ul>
        </div>

        <!-- Sub Categories Display -->
        <div v-if="activeCategory" class="border-l px-4 w-[16rem] py-4">
          <ul class="space-y-2">
            <li
              v-for="(subCategory, index) in activeCategory?.subcategories"
              :key="index"
              class="text-gray-700 hover:text-purple-600 cursor-pointer flex items-center justify-between gap-8"
              @mouseenter="handleMouseEnterSubCategory(subCategory)"
            >
              {{ subCategory }}

              <Icon name="heroicons-solid:chevron-right" class="h-4 w-4" />
            </li>
          </ul>
        </div>

        <!-- Popular Topics Display -->
        <div v-if="activeSubCategory" class="w-[16rem] border-l pl-6 py-4">
          <ul class="space-y-2 text-sm">
            <h3 class="font-bold">Popular Topics</h3>

            <li
              v-for="(topic, topicIndex) in getRandomTopics()"
              :key="topicIndex"
              class="text-gray-500 hover:text-purple-600 cursor-pointer"
            >
              {{ topic }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "Development",
          subcategories: [
            "Web Development",
            "Mobile Development",
            "Game Development",
            "AI",
            "Blockchain",
          ],
        },
        {
          name: "Business",
          subcategories: ["Marketing", "Sales", "HR", "Strategy", "Operations"],
        },
        {
          name: "IT & Software",
          subcategories: [
            "Cybersecurity",
            "Cloud Computing",
            "Software Development",
            "Networking",
          ],
        },
        {
          name: "Marketing",
          subcategories: [
            "Digital Marketing",
            "SEO",
            "Content Marketing",
            "Social Media",
          ],
        },
        {
          name: "Lifestyle",
          subcategories: [
            "Beauty & Makeup",
            "Gaming",
            "Food & Beverage",
            "Travel",
          ],
        },
        {
          name: "Photography & Video",
          subcategories: [
            "Photography Techniques",
            "Video Editing",
            "Film Production",
          ],
        },
        {
          name: "Health & Fitness",
          subcategories: [
            "Nutrition",
            "Weight Loss",
            "Yoga",
            "Personal Training",
          ],
        },
        {
          name: "Music",
          subcategories: [
            "Guitar Lessons",
            "Piano Lessons",
            "Music Production",
            "Vocal Training",
          ],
        },
        {
          name: "Teaching & Academics",
          subcategories: [
            "Engineering",
            "Humanities",
            "Mathematics",
            "Science",
          ],
        },
        {
          name: "Design",
          subcategories: [
            "Graphic Design",
            "Web Design",
            "UX/UI Design",
            "Interior Design",
          ],
        },
        {
          name: "Personal Development",
          subcategories: [
            "Neuro-Linguistic Programming (NLP)",
            "EFT (Emotional Freedom Techniques)",
            "Meditation",
            "Emotional Intelligence",
            "Cognitive Behavioral Therapy (CBT)",
            "Life Coach Training",
          ],
        },
        {
          name: "Business",
          subcategories: [
            "Aviation",
            "Herbalism",
            "Personal Development",
            "Mindfulness",
            "Time Management",
            "Project Management",
          ],
        },
      ],
      activeCategory: null,
      activeSubCategory: null,
      showCategories: false,
      popularTopics: [
        "Neuro-Linguistic Programming (NLP)",
        "EFT (Emotional Freedom Techniques)",
        "Meditation",
        "Emotional Intelligence",
        "Cognitive Behavioral Therapy (CBT)",
        "Life Coach Training",
        "Aviation",
        "Herbalism",
        "Personal Development",
        "Mindfulness",
        "Time Management",
        "Project Management",
        "Digital Transformation",
        "Fitness for Busy People",
        "Creative Writing",
      ],
    };
  },

  computed: {
    dropdownWidth() {
      if (this.activeCategory && this.activeSubCategory) {
        return "w-[48rem] ";
      } else if (this.activeCategory) {
        return "w-[32rem] ";
      } else {
        return "w-[16rem] ";
      }
    },
  },
  methods: {
    // Show Categories Dropdown
    handleMouseEnterCategories() {
      this.showCategories = true;
    },
    handleMouseLeaveCategories() {
      this.showCategories = false;
      this.activeCategory = null;
      this.activeSubCategory = null;
    },
    // Show Subcategories for a specific category
    handleMouseEnterCategory(category) {
      this.activeCategory = category;
      this.activeSubCategory = null;
    },
    handleMouseLeaveCategory() {
      this.activeCategory = null;
    },
    // Show Popular Topics for a specific subcategory
    handleMouseEnterSubCategory(subCategory) {
      this.activeSubCategory = subCategory;
    },
    handleMouseLeaveSubCategory() {
      this.activeSubCategory = null;
    },
    // Get random 3-5 popular topics
    getRandomTopics() {
      const topics = [...this.popularTopics];
      const randomTopics = [];
      const numberOfTopics = Math.floor(Math.random() * 3) + 3; // Get 3 to 5 random topics
      for (let i = 0; i < numberOfTopics; i++) {
        const randomIndex = Math.floor(Math.random() * topics.length);
        randomTopics.push(topics[randomIndex]);
        topics.splice(randomIndex, 1); // Remove the topic so it’s not repeated
      }
      return randomTopics;
    },
  },
};
</script>

<style scoped>
/* Add any additional custom styling */
</style>
