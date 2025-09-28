<template>
  <section class="mt-8 lg:mt-20" id="testimonials">
    <div class="container max-w-screen-lg mx-auto py-16">
      <h2 class="text-3xl font-bold text-center mb-12 text-slate-900">What Our Clients Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>John Doe, CEO of TechStart</CardTitle>
          </CardHeader>
          <CardContent>
            &quot;Their team delivered an outstanding SaaS platform ahead of schedule. The 25% discount made it even better!&quot;
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Jane Smith, Founder of ShopEase</CardTitle>
          </CardHeader>
          <CardContent>
            &quot;We got a fully functional e-commerce store that boosted our sales. Highly professional and great value.&quot;
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Mike Johnson, App Developer</CardTitle>
          </CardHeader>
          <CardContent>
            &quot;Expertise in mobile apps is unmatched. They turned our idea into a reality with seamless integration.&quot;
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
</script>
