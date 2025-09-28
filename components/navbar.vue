<script setup lang="ts">
const activeLinkRef = ref('home'); // Default to 'home' or any link you want to be active by default
const activeLinkRefPrevious = ref('home'); // Default to 'home' or any link you want to be active by default

const styleRef = computed(() => {
    if (activeLinkRef.value == 'home') {
        return 'transform: translate(12%, 12%); width: 22%;'
    } else if (activeLinkRef.value == 'work') {
        return 'transform: translate(117%, 12%); width: 22%;'
    } else if (activeLinkRef.value == 'about')  {
        return 'transform: translate(223%, 12%); width: 22%;'
    } else if (activeLinkRef.value == 'contact') {
        return 'transform: translate(335%, 12%); width: 22%;'
    } else {
        return 'transform: translate(17%, 12%);'
    }
})

const classRef = ref('')

const interval = ref(null);

const navItemHover = (target) => {
    if (activeLinkRef.value === target) return;
    activeLinkRef.value = target;

    if (interval.value != null) {
        clearInterval(interval.value)
        classRef.value = ''
        setTimeout(() => {
            classRef.value = 'animationbloble'
        }, 50);
    } else {
        classRef.value = 'animationbloble'
        interval.value = setTimeout(() => {
            classRef.value = ''
            interval.value = null
        }, 800);
    }
}

const navItemClick = (target) => {
    if (activeLinkRefPrevious.value === target) return;
    activeLinkRef.value = target;
    activeLinkRefPrevious.value = target;
}

function navItemOut() {
    if (activeLinkRef.value === activeLinkRefPrevious.value)
        return

    activeLinkRef.value = activeLinkRefPrevious.value;
} 
</script>


<template>
    <section id="nav" class="border-b border-slate-400 container">
        <nav class="hidden md:flex py-6 items-center max-w-screen-lg mx-auto justify-between">
            <div>
                <h1 style="animation-delay: 300ms;" class="fade-in-left  space-y-4 font-bold tracking-tight">Gevorg
                    Bayatyan</h1>
                <h3 style="animation-delay: 500ms;" class="fade-in-left text-sm font-light tracking-wider">UI/UX Team
                    Lead</h3>
            </div>
            <div class="flex items-center space-x-6">
                <div id="navigation" style="animation-delay: 800ms;"
                    class="fade-in-right outline-1 outline-slate-300 shadow-sm hover:shadow-none transition-all duration-300 rounded-md outline px-2 py-2">
                    <a href="#home" :class="{ 'active': activeLinkRef === 'home' }" @mouseover="navItemHover('home')"
                        @click="navItemClick('home')" @mouseleave="navItemOut"
                        class="cursor-pointer rounded-md px-10 py-1 transition-colors duration-300">Home</a>
                    <a href="#carla" :class="{ 'active': activeLinkRef === 'work' }" @mouseover="navItemHover('work')"
                        @click="navItemClick('work')" @mouseleave="navItemOut"
                        class="cursor-pointer rounded-md px-10 py-1 transition-colors duration-300">Work</a>
                    <a href="#about" :class="{ 'active': activeLinkRef === 'about' }" @mouseover="navItemHover('about')"
                        @click="navItemClick('about')" @mouseleave="navItemOut"
                        class="cursor-pointer rounded-md px-10 py-1 transition-colors duration-300">About</a>
                    <a href="#contact" :class="{ 'active': activeLinkRef === 'contact' }" @mouseover="navItemHover('contact')"
                        @click="navItemClick('contact')" @mouseleave="navItemOut"
                        class="cursor-pointer rounded-md px-10 py-1 transition-colors duration-300">Contact</a>
                    <div class="bgparent" :style="styleRef">
                        <div class="background" :class="classRef"></div>
                    </div>
                </div>
                <div style="animation-delay: 1200ms;" class="fade-in-right flex-shrink-0">
                    <a
                        class="chat cursor-pointer outline-1 outline-slate-300 shadow-sm hover:shadow-none transition-all duration-300 rounded-md outline px-4 py-2">Lets
                        Chat</a>
                </div>
            </div>
        </nav>
        <nav class="border-b border-slate-400 md:hidden sidebar
            flex items-end justify-end py-4 max-w-screen-lg mx-auto fixed inset-x-0 px-4 z-40">
            <Sidebar />
        </nav>
    </section>
</template>

<style>
#navigation {
    position: relative;
    z-index: 20;
}

.bgparent {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 80%;
    width: 26%;
    transition: all 0.4s ease;
}

.background {
    background-color: var(--accent2);
    color: var(--bg);
    height: 100%;
    width: 100%;
    border-radius: 10px;
}

.animationbloble {
    animation: bloble 0.8s cubic-bezier(0.380, 0.925, 0.515, 1.005);
}

@keyframes bloble {
    0% {
        transform: scale3d(1, 1, 1);
    }

    40% {
        transform: scale3d(0.7, 1, 1);
    }

    50% {
        transform: scale3d(1.15, 1, 1);
    }

    65% {
        transform: scale3d(0.95, 1, 1);
    }

    75% {
        transform: scale3d(1.05, 1, 1);
    }

    100% {
        transform: scale3d(1, 1, 1);
    }
}
</style>