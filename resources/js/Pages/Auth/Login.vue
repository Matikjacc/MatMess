<script setup>
import TextInput from "@/Components/Forms/TextInput.vue";
import PrimaryButton from "@/Components/Forms/PrimaryButton.vue";
import { Head, Link, useForm } from '@inertiajs/vue3';


const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <div class="w-full min-h-dvh background flex justify-center items-center">
        <div class="p-4 bg-white rounded-2xl flex flex-col gap-2">
            <h3 class="text-2xl font-semibold text-center">Zaloguj się</h3>
            <div>
                <p>Email</p>
                <TextInput autofocus :model-value="form.email"></TextInput>
            </div>
            <div>
                <p>Hasło</p>
                <TextInput autofocus :model-value="form.password"></TextInput>
            </div>
            <PrimaryButton @click="submit">
                Zaloguj się
            </PrimaryButton>
        </div>
    </div>
</template>

<style scoped>
.background{
    background-image: url("../../../assets/backgrounds/login_bg_1.jpg");
}
</style>
