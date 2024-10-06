<script setup lang="ts">
import Phone from '../../Icons/Phone.vue'
import VideoChat from "../../Icons/VideoChat.vue";
import ThreeDots from "../../Icons/ThreeDots.vue";
import ChatMessage from "./ChatMessage/ChatMessage.vue";
import {ChatMessageType} from "../../../Types/types";
import {ref, onMounted, nextTick, PropType} from "vue";

const messages = ref<ChatMessageType[]>([]);
const message_input = ref<string>("")
const messages_window = ref(null)
const showScrollDown = ref<boolean>(false)

const props = defineProps({
    messages: {
        type: Array as PropType<ChatMessageType[]>,
        required: true
    }
});

function sendMessage(){
    messages.value.push({
        message : message_input.value,
        sent_ago : "now",
        sender : "Andrzej Kowalski",
        sender_pic_url : "#"
    });
    nextTick(() => {
        scrollDown()
        message_input.value = "";
    })
}

function onScrollFun(){
    showScrollDown.value = messages_window.value.scrollHeight >= Math.round(messages_window.value.scrollTop + messages_window.value.clientHeight);
}

function scrollDown(){
    messages_window.value.scrollTo(0, messages_window.value.scrollHeight)
}

onMounted(() => {
    scrollDown()
    messages.value = props.messages
})
</script>

<template>
    <div class="h-screen w-full flex flex-col max-h-screen">
        <div class="flex flex-col grow pt-6 space-y-2 mt-4 w-full">
            <div class="p-2">
                <div class="flex justify-between items-center">
                    <div class="w-fit flex gap-4">
                        <div class="relative">
                            <div class="size-10 overflow-hidden rounded-full">
                                <img
                                    class="object-cover w-full h-full"
                                    src="https://media.istockphoto.com/id/1446934118/pl/zdj%C4%99cie/szcz%C4%99%C5%9Bliwy-biznesmen-s%C5%82uchaj%C4%85cy-dyskusji-w-biurze.jpg?s=2048x2048&w=is&k=20&c=ykkDojzA18-nEzbYUZLMSJvXj5GtqldT3q7wertEt10="
                                    alt=""
                                />
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
            <div class="w-full h-0.5 bg-gray-100"></div>
            <div class="flex justify-center items-center bg-transparent">
                <div class="w-fit py-1 px-2 rounded-full bg-gray-200">
                    <p class="text-xs text-gray-700 font-semibold text-opacity-60">Wczoraj</p>
                </div>
            </div>
            <div @scroll="onScrollFun" ref="messages_window" class="grow overflow-y-auto convoscreenheigh">
                <ChatMessage v-for="message in messages" :message="message" :sender="(Math.round(Math.random()*2)) % 2 === 0"></ChatMessage>
            </div>
            <div class="p-2">
                <input
                    v-model="message_input"
                    @keyup.enter="sendMessage"
                    class="w-full rounded-2xl p-2 border border-gray-300"
                    type="text"
                    placeholder="Type your message here..."
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
::-webkit-scrollbar {
    background: white;
    width: 10px;
}

::-webkit-scrollbar-track {
    background: white;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.convoscreenheigh{
    height: calc(100vh - 212px);
}
</style>
