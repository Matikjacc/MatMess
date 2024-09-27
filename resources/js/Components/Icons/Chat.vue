<script setup lang="ts">

const props = defineProps({
    class : {
        type: String,
        default : '1.5rem',
        required : false
    },
    width : {
        type: String,
        default : '1.5rem',
        required : false
    },
    height : {
        type: String,
        required : false
    }
})

</script>
<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="props.class" viewBox="0 0 24 24">
        <path fill="currentColor" d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8" />
    </svg>
</template>
