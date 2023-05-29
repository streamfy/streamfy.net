<template>
  <section class="bg-white dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Trader4, Open Source, Build Together
        </h2>
        <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
          In Trader4 we believe in the power of open source. We are building a community of developers who want to build together.
        </p>
      </div>
      <div class="grid grid-cols-1 gap-12 mt-12 sm:gap-8 lg:gap-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="project in projects">
          <div class="space-y-3 mb-6">
            <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              <NuxtLink :to="project.link" class="hover:underline">{{ project.title }}</NuxtLink>
            </h3>
            <span v-if="project.tags.includes('design')"
              class="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300">
            <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" />
            </svg>
            Design
          </span>
            <span v-if="project.tags.includes('frontend')"
                class="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300">
            <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            Frontend
          </span>
            <span v-if="project.tags.includes('backend')"
                  class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded-sm dark:bg-primary-900 dark:text-primary-300">
            <svg aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
            </svg>
            Backend
          </span>
            <span v-if="project.tags.includes('mobile')"
                  class="bg-teal-100 text-teal-800 text-xs font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded-sm dark:bg-teal-900 dark:text-teal-300">
            Mobile
          </span>
            <span v-if="project.tags.includes('android')"
                  class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
            Android
          </span>
            <span v-if="project.tags.includes('mql4')"
                  class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
            MQL4
          </span>
          <span v-if="project.tags.includes('mql5')"
                  class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
            MQL5
          </span>
            <span v-if="project.tags.includes('archived')"
                  class="bg-orange-100 text-orange-800 text-xs font-medium inline-flex items-center mr-2 px-2.5 py-0.5 rounded-sm dark:bg-orange-900 dark:text-orange-300">
            Archived
          </span>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400">{{project.description}}</p>
          </div>
          <div class="flex items-center gap-4">
            <NuxtLink :to="project.link" class="inline-flex items-center justify-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white border border-gray-200 rounded-sm shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Homepage
            </NuxtLink>
            <NuxtLink :to="project.github" class="inline-flex items-center justify-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white border border-gray-200 rounded-sm shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              <svg aria-hidden="true" class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Github
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { initFlowbite } from "flowbite";
onMounted(() => {
    initFlowbite();
});
const projects=[
  {
    'title':'Trader4.net',
    'description':'The official website of the Trader4.net project.',
    'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg',
    'imageDark':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    'tags':['frontend'],
    'link':'https://trader4.net',
    'github':'https://github.com/traderfour/trader4.net'
  },
  {
    'title':'Docs',
    'description':'The official documentation of the Trader4.net project.',
    'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg',
    'imageDark':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    'tags':['frontend', 'archived'],
    'link':'https://docs.trader4.net',
    'github':'https://github.com/traderfour/docs'
  },
  {
    'title':'Laravel SDK',
    'description':'The official Laravel SDK of the Trader4.net project.',
    'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg',
    'imageDark':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    'tags':['backend'],
    'link':'https://trader4.net/docs/sdks/laravel',
    'github':'https://github.com/traderfour/laravel'
  },
  {
    'title':'Base Layers',
    'description':'The official base layers of the Trader4.net project.',
    'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg',
    'imageDark':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    'tags':['frontend', 'archived'],
    'link':'https://trader4.net',
    'github':'https://github.com/traderfour/base-layers'
  },
  {
    'title':'Trend Line',
    'description':'The Trend Line MetaTrader4/5 Indicator.',
    'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg',
    'imageDark':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    'tags':['mql4', 'mql5'],
    'link':'https://trader4.net/product/trend-line',
    'github':'https://github.com/traderfour/trend-line'
  },
  {
    'title':'Android SDK',
    'description':'The official Android SDK of the Trader4.net project.',
    'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg',
    'imageDark':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    'tags':['mobile', 'android'],
    'link':'https://trader4.net/app/android',
    'github':'https://github.com/traderfour/android-sdk'
  },
  {
    'title':'Laravel RethinkDB',
    'description':'RethinkDB adapter for Laravel (with Eloquent support)',
    'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg',
    'imageDark':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    'tags':['backend'],
    'link':'https://github.com/traderfour/laravel-rethinkdb',
    'github':'https://github.com/traderfour/laravel-rethinkdb'
  },
  {
    'title':'PHP RQL',
    'description':'A PHP client driver for the RethinkDB query language (ReQL)',
    'image':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system.jpg',
    'imageDark':'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/mail-management-system-dark.jpg',
    'tags':['backend'],
    'link':'http://php-rql.dnsalias.net/',
    'github':'https://github.com/traderfour/php-rql'
  },
];
</script>
