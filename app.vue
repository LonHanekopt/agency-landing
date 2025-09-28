<script>
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <div>
    <Toaster position="top-center" richColors/>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

:root {
  --bg: #EEEEEE;
  --bg-card: #f1f1f1;
  --secondary: #686D76;
  --accent: #373A40;
  --accent2: #0f172a;
  --action: #DC5F00;
}

.sidebar{
  background-color: var(--bg);
}

html {
  font-family: 'Lato', 'sans-serif';
  /* color: var(--accent); */
  user-select: none;
  scroll-behavior: smooth;
}

a.active {
  color: var(--bg);
}

.chat {
  color: var(--action);
}

.clip{
  clip-path: polygon(62% 0, 100% 32%, 100% 100%, 0 100%, 0 0);
}

.contact{
  background-color: var(--action);
  color: var(--bg);
}

h1 {
  font-weight: 700;
  letter-spacing: -0.025em;
}

h3 {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.fade-in-left{
    animation: left 1s cubic-bezier(0.23, 1, 0.320, 1);
    animation-fill-mode: backwards;
    animation-delay: 1.6s;
}

.fade-in-right{
    animation: right 1s cubic-bezier(0.23, 1, 0.320, 1);
    animation-fill-mode: backwards;
    animation-delay: 2.2s;
}

.delay-1500{
    animation-delay: 2.5s;
}

.delay-1900{
    animation-delay: 2.9s;
}

@keyframes left {
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes right {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
