<script setup lang='ts'>
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<template>
  <section class="max-w-screen-lg mx-auto container pb-10" id="contact">
    <Card class="">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>Schedule a meeting to discuss your project</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="calendly-inline-widget" data-url="https://calendly.com/gevsbay/30min" style="min-width:320px;height:630px;"></div>
      </CardContent>
    </Card>
  </section>
</template>