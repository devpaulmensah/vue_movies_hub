<template>

    <div class="min-h-full flex">
        <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none">
            <div class="mx-auto w-full lg:w-96">
                <div>
                    <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                    <h2 class="mt-6 text-2xl font-bold text-gray-900">
                        Sign up request services
                    </h2>
                    <p class="mt-2 text-gray-600">
                        Or
                    <NuxtLink to="/sign-in" class="font-medium text-indigo-600 hover:text-indigo-500">
                        sign in to access your account
                    </NuxtLink>
                    </p>
                </div>

                <div class="mt-8">
                    <div class="mt-6">
                        <form method="POST" class="space-y-6" @submit.prevent="signUp">
                            <div>
                                <label for="firstName" class="block font-medium text-gray-700">
                                    First Name
                                </label>
                                <div class="mt-1">
                                    <input
                                        id="firstName"
                                        v-model="user.firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                </div>
                            </div>

                            <div class="space-y-1">
                                <label for="password" class="block font-medium text-gray-700">
                                    Password
                                </label>
                                <div class="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autocomplete="current-password"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                </div>
                            </div>

                            <div class="flex items-center justify-between">
                                <div>
                                    <NuxtLink to="/forgot-password" class="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                    </NuxtLink>
                                </div>
                            </div>

                            <div>
                            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign in
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden lg:block relative w-0 flex-1">
            <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  layout: 'mainLayout',
  data () {
    return {
        user: {
            firstName: '',
            lastName: '',
            otherNames: '',
            mobileNumber: '',
            password: '',
            confirmPassword: ''
        }
    }
  },
  methods: {
      signUp() {
          console.log(this.user)
      }
  }
}
</script>
