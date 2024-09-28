<script setup>
import Phone from '@/Components/Icons/Phone.vue'
import VideoChat from "@/Components/Icons/VideoChat.vue";
import ThreeDots from "@/Components/Icons/ThreeDots.vue";
import ChatMessage from "@/Components/Messages/Conversation/ChatMessage/ChatMessage.vue";
</script>

<template>
    <div class="h-screen w-full grow">
        <div class="flex flex-col h-screen pt-6 space-y-2 my-4 w-full">
            <div class="p-2">
                <div class="flex justify-between items-center">
                    <div class="w-fit flex gap-4">
                        <div class="relative">
                            <div class="size-10 overflow-hidden rounded-full">
                                <img class="object-cover w-full h-full" src="https://media.istockphoto.com/id/1446934118/pl/zdj%C4%99cie/szcz%C4%99%C5%9Bliwy-biznesmen-s%C5%82uchaj%C4%85cy-dyskusji-w-biurze.jpg?s=2048x2048&w=is&k=20&c=ykkDojzA18-nEzbYUZLMSJvXj5GtqldT3q7wertEt10=" alt="">
                            </div>
                            <div class="absolute size-2 bg-green-400 right-0.5 top-0.5 rounded-full"></div>
                        </div>
                        <div>
                            <h3 class="font-semibold">Andrzej Kowalski</h3>
                            <p class="text-xs text-green-400 font-semibold">Online</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <Phone class="size-6 text-blue-500"></Phone>
                        <VideoChat class="size-6 text-blue-500"></VideoChat>
                        <div class="bg-blue-200 rounded-full p-1">
                            <ThreeDots class="size-4 text-blue-600"></ThreeDots>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-0.5 bg-gray-100 "></div>
            <div class="my-3 flex justify-center items-center">
                <div class="w-fit py-1 px-2 rounded-full bg-gray-200">
                    <p class="text-xs text-gray-700 font-semibold text-opacity-60">Wczoraj</p>
                </div>
            </div>
            <ChatMessage :sender="false"></ChatMessage>
        </div>
    </div>
</template>

<style scoped>

</style>
