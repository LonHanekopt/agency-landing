<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <Icon class="cursor-pointer text-2xl" name="ion:menu" />
    </SheetTrigger>
    <SheetContent side="right" class="w-fit pt-12">
      <SheetHeader>
        <SheetTitle>
          <div>
            <h1 style="animation-delay: 300ms;" class="fade-in-left  space-y-4 font-bold tracking-tight">Gevorg
              Bayatyan</h1>
            <h3 style="animation-delay: 500ms;" class="fade-in-left text-sm font-light tracking-wider">UI/UX Team
              Lead</h3>
          </div>
        </SheetTitle>
      </SheetHeader>
      <div class="flex flex-col items-center space-y-6 mt-10">
        <div style="animation-delay: 800ms;" class="fade-in-right flex flex-col space-y-6">
          <SheetClose as-child>
            <a href="#home" class="chat cursor-pointer 
             transition-all duration-300
            rounded-md">Home</a>
          </SheetClose>
          <SheetClose as-child>
            <a href="#about" class="chat cursor-pointer 
             transition-all duration-300
            rounded-md">About</a>
          </SheetClose>
          <SheetClose as-child>
            <a href="#contact" class="chat cursor-pointer 
             transition-all duration-300
            rounded-md">Contact</a>
          </SheetClose>
        </div>
        <div style="animation-delay: 1200ms;" class="fade-in-right flex-shrink-0">
          <SheetClose>
            <a class="chat cursor-pointer outline-1 outline-slate-300 
            shadow-sm hover:shadow-none transition-all duration-300 
            rounded-md outline px-4 py-2">LetChat</a>
          </SheetClose>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>