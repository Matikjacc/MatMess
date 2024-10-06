<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import Chats from "../Components/Messages/Chats/Chats.vue";
import Conversation from "../Components/Messages/Conversation/Conversation.vue";
import {MessagesSampleData} from "../Pages/MessagesSampleData.js";
import {ChatMessageType} from "../Types/types";
import {ref} from "vue";


const message_generator = new MessagesSampleData;
const messages = ref<ChatMessageType[]>(message_generator.generate_messages(100));
//https://dribbble.com/shots/19570328-Facebook-Messenger-Handcrafted


</script>

<template>
    <Head title="Wiadomości" />
    <div class="h-screen flex">
        <Chats></Chats>
        <Conversation :messages="messages"></Conversation>
    </div>
</template>
