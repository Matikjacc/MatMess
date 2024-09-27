<script setup lang="ts">
import NewChat from "../../../Components/Icons/NewChat.vue";
import Chat from "../../../Components/Icons/Chat.vue"
import ChatMessenger from "../../../Components/Messages/Chats/Chat/ChatMessenger.vue";
import {ChatType} from "./types.js"
import {ChatGenerator} from './ChatGenerator'
import { ref } from "vue";

const chats : ChatType[] = ChatGenerator(30)
const currently_selected = ref<number>(1)

</script>

<template>
    <div class="flex h-screen">
        <div class="flex flex-col min-h-screen max-h-screen p-2 w-96 pt-6 space-y-2">
            <div class="px-8">
                <div class="my-4 flex justify-between">
                    <h3 class="text-2xl font-bold text-gray-700">Chats</h3>
                    <NewChat class="size-8 text-gray-600"></NewChat>
                </div>
                <div class="relative">
                    <input
                        type="text"
                        class="w-full rounded-md bg-gray-100 border-none pl-10"
                        name="chat_search"
                        id="chat_search"
                        placeholder="Szukaj w MatMess...">
                    <Chat class="text-gray-500 size-6 absolute left-2 top-1/2 -translate-y-1/2"></Chat>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                <ChatMessenger
                    v-for="chat in chats"
                    @click="currently_selected = chat.chat_id"
                    :key="chat.chat_id"
                    :img_src="chat.user_img_url"
                    :selected="chat.chat_id === currently_selected"
                />
            </div>
        </div>
        <div class="min-h-screen w-0.5 bg-gray-100"></div>
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
</style>
