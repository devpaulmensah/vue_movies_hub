<template>
    <div class="full-screen-content flex">
        <div class="flex-1 flex flex-col sm:justify-center py-12 px-4 sm:px-6 lg:flex-none">
            <div class="mx-auto w-full md:w-96">
                <div>
                    <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                    <h2 class="mt-6 text-2xl font-bold text-gray-900 dark:text-white">Sign Up</h2>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">
                      Or
                      <NuxtLink to="/sign-in" class="font-medium text-indigo-600 hover:text-indigo-500">
                        sign in to access your account
                      </NuxtLink>
                    </p>
                </div>
                <SignUpForm />
            </div>
        </div>
        <div class="hidden lg:block relative w-0 flex-1">
            <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="">
        </div>
    </div>
</template>

<script>
import SignUpForm from "~/components/SignUpForm.vue";

export default {
    auth: 'guest',
    name: "SignUpPage",
    components: { SignUpForm },
    layout: "mainLayout"
}
</script>
