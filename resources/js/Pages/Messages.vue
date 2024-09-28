<script setup>
import { Head } from '@inertiajs/vue3';
import Chats from "@/Components/Messages/Chats/Chats.vue";
import Conversation from "@/Components/Messages/Conversation/Conversation.vue";

//https://dribbble.com/shots/19570328-Facebook-Messenger-Handcrafted
</script>

<template>
    <Head title="Wiadomości" />
    <div class="h-screen flex">
        <Chats></Chats>
        <Conversation></Conversation>
    </div>
</template>
