<template>
  <div id="shareMenuContainer" class="share-menu-container bg-black/50 min-h-screen min-w-full fade-off">
      <div class="hide-share-menu-area"></div>
      <div class="bg-white share-menu dark:bg-slate-800 rounded-t-2xl p-4">
        <div class="text-center dark:text-gray-300">
          Share<br/>
          <span class="font-bold">{{ title }}</span>
        </div>
        <ul role="list" class="my-5 divide-y divide-gray-200 dark:divide-black/20">
            <li class="py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 rounded-full" viewBox="0 0 48 48" style=" fill:#000;">
                    <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-base font-medium text-gray-900 dark:text-gray-300 truncate">WhatsApp</p>
                </div>
                <div>
                  <a
                  :href="`https://api.whatsapp.com/send?text=Have you seen this movie, *${title }*? You should check it out! Get more details about it here, ${url}`"
                  target="_blank"
                  class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-slate-800/60 text-sm leading-5 font-medium rounded-full dark:text-gray-300 text-gray-700 dark:bg-slate-700"> Share </a>
                </div>
              </div>
            </li>
            <li class="py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 rounded-full" viewBox="0 0 48 48" style=" fill:#000;">
                    <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-base font-medium text-gray-900 dark:text-gray-300 truncate">Twitter</p>
                </div>
                <div>
                  <a href="#" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-slate-800/60 text-sm leading-5 font-medium rounded-full dark:text-gray-300 text-gray-700 dark:bg-slate-700"> Share </a>
                </div>
              </div>
            </li>
            <li class="py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 rounded-full" viewBox="0 0 48 48" style=" fill:#000;">
                    <linearGradient id="CXanuwD9EGkBgTn76_1mxa_p62ASPK2Kpqp_gr1" x1="9.993" x2="40.615" y1="-299.993" y2="-330.615" gradientTransform="matrix(1 0 0 -1 0 -290)" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#2aa4f4"></stop>
                      <stop offset="1" stop-color="#007ad9"></stop>
                    </linearGradient>
                    <path fill="url(#CXanuwD9EGkBgTn76_1mxa_p62ASPK2Kpqp_gr1)" d="M24,4C12.954,4,4,12.954,4,24c0,10.028,7.379,18.331,17.004,19.777	C21.981,43.924,22.982,41,24,41c0.919,0,1.824,2.938,2.711,2.818C36.475,42.495,44,34.127,44,24C44,12.954,35.046,4,24,4z"></path>
                    <path d="M27.707,21.169c0-1.424,0.305-3.121,1.757-3.121h4.283l-0.001-5.617l-0.05-0.852l-0.846-0.114	c-0.608-0.082-1.873-0.253-4.206-0.253c-5.569,0-8.636,3.315-8.636,9.334v2.498H15.06v7.258h4.948V43.6	C21.298,43.861,22.633,44,24,44c1.268,0,2.504-0.131,3.707-0.357V30.301h5.033l1.122-7.258h-6.155V21.169z" opacity=".05"></path>
                    <path d="M27.207,21.169c0-1.353,0.293-3.621,2.257-3.621h3.783V12.46l-0.026-0.44l-0.433-0.059	c-0.597-0.081-1.838-0.249-4.143-0.249c-5.323,0-8.136,3.055-8.136,8.834v2.998H15.56v6.258h4.948v13.874	C21.644,43.876,22.806,44,24,44c1.094,0,2.16-0.112,3.207-0.281V29.801h5.104l0.967-6.258h-6.072V21.169z" opacity=".05"></path>
                    <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46	c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.475	C21.988,43.923,22.981,44,24,44c0.921,0,1.82-0.062,2.707-0.182V29.301z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-base font-medium text-gray-900 dark:text-gray-300 truncate">Facebook</p>
                </div>
                <div>
                  <a href="#" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-slate-800/60 text-sm leading-5 font-medium rounded-full dark:text-gray-300 text-gray-700 dark:bg-slate-700"> Share </a>
                </div>
              </div>
            </li>
            <li class="py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 rounded-full" viewBox="0 0 48 48" style=" fill:#000;">
                    <linearGradient id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#33bef0"></stop>
                      <stop offset="1" stop-color="#0a85d9"></stop>
                    </linearGradient>
                    <path fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                    <path d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z" opacity=".05"></path>
                    <path d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z" opacity=".07"></path>
                    <path fill="#fff" d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-base font-medium text-gray-900 dark:text-gray-300 truncate">Telegram</p>
                </div>
                <div>
                  <a href="#" class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 dark:border-slate-800/60 text-sm leading-5 font-medium rounded-full dark:text-gray-300 text-gray-700 dark:bg-slate-700"> Share </a>
                </div>
              </div>
            </li>
        </ul>
        <div>
          <button class="text-center w-full dark:text-white py-4 bg-black/10 rounded-md" @click="hideShareMenu">
            Cancel
          </button>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShareMenu',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data: () => ({
      url: window.location.href
    }),
    methods: {
      hideShareMenu() {
        document.getElementById("shareMenuContainer").classList.remove('fade-in');
        document.getElementById("shareMenuContainer").classList.add('fade-off');
        document.querySelector("body").classList.remove('overflow-hidden')
      }
    }
  }
</script>

<style scoped>
  .share-menu-container {
    position:fixed;
    top:0;
    z-index: 50;
    overflow: hidden;
  }

  .hide-share-menu-area {
    height: calc(100vh - 415px);
  }

  .share-menu {
    height: 450px;
  }

  .share-menu-container.fade-off {
    display: none;
    animation: display ease-out 3s;
  }

  .share-menu-container.fade-in {
    display: block;
    animation: display ease-in 3s;
  }

</style>
