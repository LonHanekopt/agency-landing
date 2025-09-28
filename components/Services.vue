<script setup>
const items = [
  {
    title: 'Web Development',
    description: 'Custom web apps using modern frameworks like Nuxt.js and Vue.js',
    icon: 'ion:ios-laptop'
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile solutions for iOS and Android',
    icon: 'ion:phone-portrait-outline'
  },
  {
    title: 'SaaS Platforms',
    description: 'Scalable software-as-a-service applications with robust backend',
    icon: 'ion:cloud-outline'
  },
  {
    title: 'E-commerce Stores',
    description: 'Feature-rich online stores optimized for conversions',
    icon: 'ion:cart-outline'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive designs that enhance user engagement',
    icon: 'ion:paintbrush'
  },
  {
    title: 'Backend Development',
    description: 'Secure, scalable microservices with Node.js and PostgreSQL',
    icon: 'ion:terminal'
  },
]
</script>

<template>
  <section class="max-w-screen-lg mx-auto mt-6 mb-10 container">
    <!-- Header -->
    <div class="max-w-screen-lg mx-auto
     sm:grid grid-cols-2 gap-10 mb-12 sm:mb-24">
      <div class="mb-2">
        <h1 class="fade-in-right text-slate-900 text-4xl">
          Our Development Services
          <span class="inline-flex items-center gap-3">
            Tailored for Your Needs
            <Icon class="text-orange-500" size="40" name="line-md:briefcase-filled" />
          </span>
        </h1>
      </div>
      <div class="relative">
        <h3 class="fade-in-right delay-1500 text-slate-500 text-base tracking-normal">
          From concept to launch, our services cover every aspect of digital product development to help your business thrive.
        </h3>
      </div>
    </div>
    <!-- end Header -->

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5">

      <div v-for="(item, index) in items" :key="index" 
      class="border border-[#686d7688] card rounded-xl p-6 text-[#0f172a] relative">
          <h1 class="text-4xl text-[#b3b3b7]">0{{ index+1 }}</h1>
        <div class="mt-10">
          <h1 class="text-lg mb-1">{{ item.title }}</h1>
          <h3 class="text-sm">{{ item.description }}</h3>
        </div>
        <Icon class=" opacity-0 transition-opacity duration-150  text-4xl absolute right-14 top-10 text-[#ff750b]" :name="item.icon"/>

      </div>

    </div>

  </section>
</template>

<style>
.card {
  transition: all 0.15s ease;
}

.card:hover {
  background-color: #e7e7e7;
}

.card:hover> :nth-child(1) {
  color: #ff750b;
}
.card:hover> :nth-child(3) {
  opacity: 1;
}
</style>