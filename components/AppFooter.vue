<template>
    <footer class="bg-white dark:bg-slate-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="max-w-screen-2xl mx-auto py-12 px-4">
          <p class="text-base text-gray-600 dark:text-gray-200 text-center">
              &copy; {{ year }} VueMoviesHub. All rights reserved.
          </p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
