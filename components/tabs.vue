<script setup>
    const screenRef = ref(true)
</script>

<template>
    <section>
        <div :class="screenRef ? 'max-w-screen-lg' : ''" class="mx-auto text-center">
            <Tabs default-value="1" class="w-full">
                <TabsList class="m-auto">
                    <TabsTrigger value="1" @click="screenRef = true">
                        1
                    </TabsTrigger>
                    <TabsTrigger value="2" @click="screenRef = false">
                        2
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="1">
                    <iframe class="frame" src='https://my.spline.design/untitled-7b79c4a4766cb6105076ce44b769d92e/'
                        frameborder='0' width='100%' height='100%'>
                    </iframe>
                </TabsContent>
                <TabsContent value="2" class="mt-20 relative">
                    <iframe class="h-[700px]" src='https://my.spline.design/untitled-8759f2046fb140a51569ad4b6e3da3da/' frameborder='0' width='100%' height='100%'>
                    </iframe>
                    <div class="absolute top-[10%] ml-12">
                        <h1 class="fade-in-left text-[#eeeeee] text-4xl mb-4 tracking-tighter">Just Imagine the Possibilities</h1>
                        <h3 class="fade-in-left delay-1900 text-[#eeeeee] text-normal tracking-wider">Give yourself the pleasure fo workign with a top Professional</h3>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </section>
</template>

<style>
.frame {
    width: 100%;
    height: 600px;
}

.left {}

.right {}
</style>