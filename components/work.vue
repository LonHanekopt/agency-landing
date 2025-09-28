<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const projects = [
    {
        name: 'Npc Roamers',
        url: 'https://npcroamers.com',
        images: ['/e2.png', '/e.png', '/e3.png'  ] // Add more images here if available
    },
    {
        name: 'Sales Vue',
        url: 'https://example.com/ton',
        images: ['s.png' , 's1.png' , 's2.png' , 's3.png']
    },
    {
        name: 'Dakarmy',
        url: 'https://example.com/crm',
        images: ['/e.png']
    },
    // {
    //     name: 'Stocks App',
    //     url: 'https://example.com/stocks',
    //     images: ['/stocks2.png']
    // }
]
</script>

<template>
    <section class="max-w-screen-lg mx-auto container" id="work">
        <!-- Header -->
        <div class="mt-20 sm:mt-36">
            <div class="grid sm:grid-cols-2 sm:gap-20 text-left">
                <div class="space-x-2">
                    <h1 class="text-slate-900 text-2xl sm:text-4xl">
                        A small glimplse into my recent <span class="inline-flex items-center gap-3 ">Projects
                            <Icon class="text-orange-500" size="40" name="line-md:star-pulsating-filled-loop" />
                        </span>
                    </h1>

                </div>
                <h3 class=" m-auto text-slate-500 text-base tracking-normal">
                    I have been passionate about these
                    projects, helping startup teams create a brand that will last forever</h3>
            </div>
        </div>
        <Carousel class="mt-20 lg:mt-36 px-8" :items-to-show="1" :wrap-around="true" :mouse-drag="false" :breakpoints="{
            640: { itemsToShow: 1, snapAlign: 'start' },
        }">
            <Slide v-for="project in projects" :key="project.name">
                <div class="shadow-md hover:shadow-none card relative border-2
                     border-opacity-15 border-solid transition-all duration-150 
                     border-stone-500 p-4 pt-7 pb-5 bg-stone-200 rounded-3xl m-2">
                     <!-- Header -->
                    <div class="mx-6 mb-4 flex justify-between items-center">
                        <h3 class="text-xl font-bold">{{ project.name }}</h3>
                        <a :href="project.url" target="_blank" rel="noopener noreferrer">
                            <Icon name="bi:box-arrow-up-right" size="24" class="text-orange-500" />
                        </a>
                    </div>
                    <!-- end Header -->
                    <Carousel :autoplay="2000" :wrap-around="true" :transition="500">
                        <Slide v-for="(img, index) in project.images" :key="index">
                            <NuxtImg class="aspect rounded-xl w-full" :src="img" alt="Project image" loading="lazy" />
                        </Slide>
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                </div>
            </Slide>
            <template #addons>
                <Navigation>
                    <template #prev>
                        <Icon name="bi:arrow-left" size="24" class="text-orange-500 hover:text-orange-600
                        transition-all duration-200 cursor-pointer hover:scale-110 " />
                    </template>
                    <template #next>
                        <Icon name="bi:arrow-right" size="24" class="text-orange-500 hover:text-orange-600
                        transition-all duration-200 cursor-pointer hover:scale-110 " />
                    </template>
                </Navigation>
            </template>
        </Carousel>
    </section>
</template>

<style>
.aspect {
    aspect-ratio: 16/9;
}

@keyframes pong {

    75%,
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

.card:hover {
    transform: scale(1.02);
}

.card:hover> :nth-child(1)> :nth-child(1)> :nth-child(1) {
    /* animation: pong 1s cubic-bezier(0, 0, 0.2, 1) infinite; */
}
</style>