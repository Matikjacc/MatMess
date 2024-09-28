<script setup>

const props = defineProps({
    sender : {
        type: Boolean,
        required: true
    }
})

</script>

<template>
    <div class="w-full p-2">
        <div class="max-w-96 flex gap-4 order-2">
            <div class="size-10 overflow-hidden rounded-full">
                <img class="object-cover w-full h-full" src="https://media.istockphoto.com/id/1446934118/pl/zdj%C4%99cie/szcz%C4%99%C5%9Bliwy-biznesmen-s%C5%82uchaj%C4%85cy-dyskusji-w-biurze.jpg?s=2048x2048&w=is&k=20&c=ykkDojzA18-nEzbYUZLMSJvXj5GtqldT3q7wertEt10=" alt="">
            </div>
            <div>
                <div class="flex items-center gap-2">
                    <h5 class="font-semibold text-gray-500 text-sm">Andrzej Kowalski</h5>
                    <p class="text-gray-400 text-xs"> 11:00 AM</p>
                </div>
                <div class="p-3 bg-gray-100 rounded-r-2xl rounded-bl-2xl">
                    <p class="font-semibold text-sm">Cześc co tam u ciebie?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
