<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border bg-[--bg-card] text-card-foreground shadow outline outline-[1px] outline-[--action]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
