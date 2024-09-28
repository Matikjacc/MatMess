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
        <g fill="currentColor">
            <rect width="4" height="4" x="3" y="10" rx="2" />
            <rect width="4" height="4" x="10" y="10" rx="2" />
            <rect width="4" height="4" x="17" y="10" rx="2" />
        </g>
    </svg>
</template>
