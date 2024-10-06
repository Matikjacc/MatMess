<script setup lang="ts">
import { ChatMessageType } from "../../../../Types/types";
import {PropType} from "vue";

const props = defineProps({
    sender : {
        type: Boolean,
        required: true,
        default: true
    },
    message : {
        type : Object as PropType<ChatMessageType>,
        required : true,
        default : {
            message : "Error",
            timestamp : "0:00 AM",
            sender : "Unknown",
            sender_pic_url : "#"
        }
    }
})

</script>

<template>
    <div class="w-full p-2 flex" :class="{'justify-end' : sender}">
        <div class="flex gap-4 max-w-xl">
            <div class="size-10 flex-shrink-0 overflow-hidden rounded-full">
                <img class="object-cover w-full h-full" :src="message.sender_pic_url" alt="">
            </div>
            <div class="shrink" :class="{'order-first' : sender}">
                <div class="flex items-center gap-2">
                    <h5 class="font-semibold text-gray-500 text-sm">{{message.sender}}</h5>
                    <p class="text-gray-400 text-xs" :class="{'order-first' : sender}">{{ message.sent_ago }}</p>
                </div>
                <div class="p-3 "
                     :class="{'bg-blue-500 text-white rounded-l-2xl rounded-br-2xl' : sender,
          'rounded-r-2xl bg-gray-100 rounded-bl-2xl' : !sender}">
                    <p class="font-semibold text-sm">{{message.message}}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>
