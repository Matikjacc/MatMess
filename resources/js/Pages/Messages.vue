<script setup>
import { Head } from '@inertiajs/vue3';
import Chats from "@/Components/Messages/Chats/Chats.vue";
</script>

<template>
    <Head title="Wiadomości" />
    <div class="h-screen">
        <Chats></Chats>
    </div>
</template>
