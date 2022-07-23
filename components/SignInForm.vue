<template>
  <div class="mt-6">
    <form v-if="isRequestForOtp" class="space-y-6" @submit.prevent="requestOtp">
      <div>
        <label for="mobileNumber" class="block font-medium text-gray-700 dark:text-gray-100">Mobile Number</label>
        <div class="mt-1">
          <input
            id="mobileNumber"
            v-model="otpRequest.mobileNumber"
            name="mobileNumber"
            maxlength="10"
            minlength="10"
            pattern="[0-9]{10}"
            type="tel"
            required
            class="rounded-md appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>
      </div>
      <div>
        <button
          :disabled="processing"
          type="submit"
          class="rounded-md w-full flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400">
            {{ !processing ? "Send OTP" : "Sending OTP Code..." }}
        </button>
      </div>
    </form>
    <form v-if="!isRequestForOtp" class="space-y-6" @submit.prevent="verifyOtp">
      <div>
        <label for="otpCode" class="block font-medium text-gray-700 dark:text-gray-100">OTP Code</label>
        <div class="mt-1 flex">
          <span class="rounded-l-md inline-flex items-center px-4 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 font-medium">{{ otpPrefixDisplay }}</span>
          <input
            id="otpCode"
            v-model="otpVerification.code"
            name="otpCode"
            maxlength="6"
            minlength="6"
            pattern="[0-9]{6}"
            type="tel"
            placeholder="123456"
            required
            class="rounded-r-md appearance-none block w-full px-3 py-2 border border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
        </div>
      </div>

      <div>
        <button
          :disabled="otpVerification.code.length < 6 || processing"
          type="submit"
          class="rounded-md w-full flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400">
            {{ !processing ? "Verify OTP" : "Verifying OTP ..." }}
        </button>
      </div>
    </form>
    <!-- Error Notification-->
    <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 sm:py-6 py-4 pointer-events-none sm:items-start z-50">
      <div class="w-full flex flex-col items-center  sm:items-end">
        <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <div v-if="showNotification" class="sm:max-w-sm w-full bg-red-500 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="p-4">
              <div class="flex items-start">
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="font-medium text-gray-100">{{ title }}</p>
                  <p class="mt-1 text-gray-200">{{ message }}</p>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <button class="bg-white rounded-md inline-flex text-red-500 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700" @click="showNotification = false">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "SignInForm",
    data() {
        return {
            showNotification: false,
            isRequestForOtp: true,
            processing: false,
            message: "",
            title: "",
            otpVerification: {
              requestId: "",
              prefix: "",
              code: ""
            },
            otpRequest: {
              mobileNumber: ""
            }
        };
    },
    computed: {
      otpPrefixDisplay () {
        return `${this.otpVerification.prefix}-`;
      }
    },
    methods: {
        async requestOtp() {
          this.processing = true;

          await this.$axios.get(`auth/otp/request/${this.otpRequest.mobileNumber}`)
          .then((result) => {
            this.otpVerification.prefix = result.data.data.prefix;
            this.otpVerification.requestId = result.data.data.requestId;
            this.isRequestForOtp = false;
          }).catch((err) => {
            this.title = "OTP Request Error";
            this.message = err.response.data.message
            this.showNotification = true;
          });

          this.processing = false;
        },

        async verifyOtp() {
          this.processing = true;

          await this.$axios.post(`auth/otp/verify/${this.otpRequest.mobileNumber}`, this.otpVerification)
          .then(async result=> {
            await this.$auth.setUser(result.data.data.user)
            await this.$auth.strategy.token.set(result.data.data.token)

            window.location.replace('/')
          }).catch((err) => {
            this.title = "OTP Verification Error";
            this.message = err.response.data.message
            this.showNotification = true;
          });

          this.processing = false;
        }
    }
}
</script>
