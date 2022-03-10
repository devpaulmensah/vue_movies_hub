<template>
    <footer class="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="page-max-width mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p class="text-base text-gray-600 text-center">
              &copy; {{ new Date().getFullYear() }} VueMoviesHub. All rights reserved.
          </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>
