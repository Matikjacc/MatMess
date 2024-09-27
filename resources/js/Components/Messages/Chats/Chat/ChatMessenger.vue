<script setup>

const props = defineProps({
    selected : {
        type: Boolean,
        default: false,
        required : true
    },
    img_src : {
        type: String,
        required : true
    }
})

</script>

<template>
    <div class="w-full px-8 py-4 rounded-xl flex gap-4 cursor-pointer"
    :class="{'bg-darkblue' : selected, 'hover:bg-gray-200 hover:bg-opacity-90' : !selected}">
        <div class="relative w-fit">
            <div class="size-10 overflow-hidden rounded-full">
                <img class="object-cover w-full h-full" :src="img_src" alt="">
            </div>
            <div class="absolute size-2 bg-green-400 right-0.5 top-0.5 rounded-full"></div>
        </div>
        <div>
            <h4 class="font-semibold" :class="{'text-white' : selected, 'text-gray-600' : !selected}">Andrzej Kowalski</h4>
            <div class="w-full flex items-center gap-1">
                <p class="text-gray-500 max-w-32 text-xs truncate">Ty: Dobra</p>
                <div class="size-1 bg-gray-500 rounded-full"></div>
                <p class="text-blue-500 text-xs">1min ago</p>
            </div>

        </div>

    </div>
</template>

<style scoped>

</style>
