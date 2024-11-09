<template>
  <div class="flex flex-col gap-y-3">
    <h1 class="text-2xl font-semibold text-gray-600 mb-5">Course Content</h1>
    <div class="flex justify-between text-sm">
      <p class="flex items-center gap-x-1 text-gray-600">
        <span>13 section</span><Icon name="radix-icons:dot-filled" /><span>
          103 lectures</span
        ><Icon name="radix-icons:dot-filled" /><span>41h 19m total length</span>
      </p>
      <button
        @click="allOpen ? collapseAll() : expandAll()"
        class="font-semibold text-primary-600"
      >
        {{ allOpen ? "Collapse" : "Expand" }} all sections
      </button>
    </div>
    <BaseAccordion
      class="col-span-2"
      :items="items"
      wrapperClass="duration-200"
    >
      <template #header="{ item }">
        <div class="px-5 py-4 flex justify-between cursor-pointer bg-gray-50">
          <div class="flex items-center gap-x-3">
            <Icon
              name="radix-icons:chevron-up"
              class="duration-300 text-xl"
              :class="[item.open ? '' : 'transform rotate-180']"
            />
            <h3 class="text-base font-semibold text-gray-600 capitalize">
              {{ item.title }}
            </h3>
          </div>
          <div class="flex items-center text-gray-500 gap-x-1">
            <span class="text-sm text-gray-600">{{ item?.totalLecture }}</span>
            <Icon name="radix-icons:dot-filled" class="text-xs" />
            <span class="text-sm text-gray-600">{{ item?.totalDuration }}</span>
          </div>
        </div>
      </template>
      <template #content="{ item }">
        <div class="px-5 text-gray-500 text-sm">
          <!-- {{ item }} -->
          <div
            v-for="(lecture, index) in item.content"
            :key="index"
            class="flex justify-between items-center p-4"
          >
            <div class="flex items-center gap-3">
              <Icon
                name="ph:monitor-play-bold"
                v-if="lecture.type == 'video'"
                class="text-xl"
              />
              <Icon
                name="prime:file"
                v-if="lecture.type == 'text'"
                class="text-2xl"
              />
              <a
                :href="lecture?.link"
                :class="
                  lecture?.isFree
                    ? 'text-primary-700 hover:text-primary-900 cursor-pointer'
                    : 'text-gray-600'
                "
                class=""
                >{{ lecture?.title }}</a
              >
            </div>
            <div class="flex items-center gap-4">
              <a
                v-if="lecture?.isFree"
                href="#"
                class="text-primary-600 text-sm hover:text-primary-900"
                >Preview</a
              >
              <span class="text-sm text-gray-600 w-12">{{
                lecture?.duration
              }}</span>
            </div>
          </div>
        </div>
      </template>
    </BaseAccordion>
    <button
      v-if="items.length - 10"
      class="border-2 border-gray-400 font-medium w-full text-sm py-3"
    >
      {{ items.length - 10 }} more sections
    </button>
  </div>
</template>

<script setup>
const items = ref([
  {
    title: "Introduction",
    open: true,
    totalLecture: "3 lectures",
    totalDuration: "13m 39s",
    content: [
      {
        title: "Welcome to the Course + User Interface Overview",
        duration: "04:22",
        type: "video",
        isFree: true,
      },
      {
        title: "User Research and User Needs",
        duration: "04:22",
        type: "video",
        isFree: true,
      },
      { title: "User Interface Principles", duration: "04:35", type: "text" },
    ],
  },
  {
    title: "Drafting",
    open: false,
    totalLecture: "5 lectures",
    totalDuration: "56m 22s",
    content: [
      {
        title: "Creating a Figma Account",
        duration: "12:25",
        type: "video",
        isFree: true,
      },
      {
        title: "Creating a New Design File",
        duration: "08:49",
        type: "video",
        isFree: true,
      },
      {
        title: "Mapping the User Journey pt 1",
        duration: "04:44",
        type: "video",
        isFree: true,
      },
      {
        title: "Mapping the User Journey pt 2",
        duration: "10:45",
        type: "video",
      },
      { title: "Creation of Wireframes", duration: "19:39", type: "video" },
    ],
  },
  {
    title: "Prototyping",
    open: false,
    totalLecture: "13 lectures",
    totalDuration: "3h 19m",
    content: [
      { title: "Creating a Frames", duration: "12:25", type: "video" },
      { title: "Function of Tools", duration: "14:41", type: "video" },
      { title: "Font Usage", duration: "15:05", type: "video" },
      { title: "Layout Planning", duration: "12:31", type: "video" },
      {
        title: "Framing, Layering, and Grouping",
        duration: "28:03",
        type: "video",
        isFree: true,
      },
      {
        title: "Creating and Editing Shapes",
        duration: "21:37",
        type: "video",
        isFree: true,
      },
      { title: "Images and Masking", duration: "18:51", type: "video" },
      { title: "Components", duration: "18:59", type: "video" },
      { title: "Constraints and Versioning", duration: "11:05", type: "video" },
      { title: "Prototyping", duration: "19:43", isFree: true, type: "video" },
      { title: "Team Libraries and Setups", duration: "19:43", type: "video" },
      { title: "Previewing and Commenting", duration: "18:49", type: "video" },
      { title: "Exporting Assets", duration: "12:56", type: "video" },
    ],
  },
  {
    title: "Demonstrations",
    open: false,
    content: [
      { title: "App Scenario 1", duration: "48:14", type: "video" },
      { title: "App Scenario 2", duration: "41:44", type: "video" },
      { title: "App Scenario 3", duration: "27:35", type: "video" },
      { title: "Website Scenario 1", duration: "01:07:02", type: "video" },
      { title: "Website Scenario 2", duration: "26:21", type: "video" },
    ],
  },
  { title: "Keep Learning", open: false },
  { title: "Bonus: Learn about UX", open: false },
  { title: "Advanced Figma Course - Introduction", open: false },
  { title: "The Approach", open: false },
  { title: "Mastering Auto Layout", open: false },
  { title: "Design Systems", open: false },
  { title: "Wrap Up", open: false },
  { title: "Use Cases: Applying Concepts", open: false },
  { title: "Next Steps", open: false },
]);

const description = ref(
  "Have you ever wanted to design your own app, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore provident recusandae, dicta itaque quas commodi tempora adipisci suscipit a dignissimos dolores facilis consectetur nostrum odit quod libero nemo! Ipsam! Quo, doloremque illo necessitatibus sapiente fugit odit voluptates placeat quis quasi rem ab harum nam! Sunt ipsam nihil cum rerum aliquid officiis libero! Eaque architecto sint tempora repellendus deleniti enim. Ex qui at corrupti veniam error. Sequi recusandae sed voluptatibus maxime distinctio ad officia pariatur vero animi, quo nihil non voluptates ex eius nesciunt at omnis corrupti consequuntur odit dolor? website or blog? These days, we use them without a second thought. They have become an integral part of both the human experience and the financial market. It’s easy to come up with a new idea for a viral new app, but not as easy to make that app a reality - or so you might think. That’s where Figma comes in. Figma is a free, collaborative UI/ UX design tool that can help you design a wide range of interfaces in great detail - and we’re here to teach you how. In this course, you’re going to learn everything about user interface design with Figma. Step-by-step, we’ll cover everything you need to know from opening the program for the very first time to finalising your finished design. You’ll learn all of the tools, as well as how and when to use them. We’ll also cover everything you’ll need to be able to collaborate with other web developers easily through its collaborative feature. During the course, you will learn about the principles of User Interface Design in order to design with purpose, as well as the principles of Human-Computer Interaction. Finally, we’ll teach you how to adapt to specific project requirements, as well as how to wireframe in order to turn your design into a functional prototype. Start your UI/UX development journey with us! After taking this course, you will be able to: Create prototypes and collaborate with web developers easily Achieve an understanding of the process, purpose, and tools of prototype design Understand the principles of User Interface Design in order to design with purpose Learn the basics of Human-Computer Interaction Discover the standard tools in User Interface Adapt to specific project deliverables in User Interface Understand the principles of User Experience Who this course is for: Anyone who wants to learn to design user interfaces - no experience needed! Anyone looking to design their own application, website or blog UI/UX designers who want to expand their portfolio"
);

const toggleOpen = (index) => {
  items.value[index].open = !items.value[index].open;
};

const allOpen = ref(false);
const expandAll = () => {
  allOpen.value = true;
  items.value.forEach((item) => {
    item.open = true;
  });
};

const collapseAll = () => {
  allOpen.value = false;
  items.value.forEach((item) => {
    item.open = false;
  });
};

const openDesc = ref(false);
</script>

<style scoped></style>
