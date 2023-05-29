<template>
    <section>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Careers
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Trader4 open positions designed to help you to join to our team.</p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Position
                </th>
                <th scope="col" class="px-6 py-3">
                    Org. Unit
                </th>
                <th scope="col" class="px-6 py-3">
                    Office
                </th>
                <th scope="col" class="px-6 py-3">
                    Join Us
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="position in openPositions"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ position.title }}
                </th>
                <td class="px-6 py-4">
                  {{ position.unit }}
                </td>
                <td class="px-6 py-4">
                  {{ position.office }}
                </td>
                <td class="px-6 py-4">
                    <NuxtLink to="/contact" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Send Resume</NuxtLink>
                </td>
            </tr>
            </tbody>
        </table>
    </section>
</template>
<script lang="ts" setup>
import { initFlowbite } from "flowbite";
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});
const openPositions = [
  {'title': 'Marketing Expert', 'unit': 'Marketing', 'office': 'Remote - Rabat'},
  {'title': 'Marketing Expert', 'unit': 'Marketing', 'office': 'Remote - London'},
  {'title': 'Marketing Expert', 'unit': 'Marketing', 'office': 'Remote - Dubai'},
  {'title': 'Algo Trading Engineer', 'unit': 'Information Technology', 'office': 'Hybrid - London'},
  {'title': 'Golang Developer', 'unit': 'Information Technology', 'office': 'Remote - London'},
  {'title': 'CTO Assistant', 'unit': 'Information Technology', 'office': 'Hybrid - London'},
  {'title': 'Business Development', 'unit': 'Operation', 'office': 'Hybrid - London'},
  {'title': 'Sales Manager', 'unit': 'Sales', 'office': 'Hybrid - London'},
  {'title': 'Sales Manager', 'unit': 'Sales', 'office': 'Hybrid - Rabat'},
  {'title': 'Sales Manager', 'unit': 'Sales', 'office': 'Hybrid - Dubai'},
]
</script>
