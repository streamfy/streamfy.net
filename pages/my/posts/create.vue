<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new product
      </h2>
      <VForm :validation-schema="postSchema" @submit="addPost">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div class="sm:col-span-2">
            <label
              for="title"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <VField
              v-model="postData.title"
              type="text"
              name="title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
            />
            <VErrorMessage class="text-red-700 text-sm" name="title" />
          </div>
          <div class="w-full">
            <label
              for="slogan"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Slogan
            </label>
            <input
              v-model="postData.slogan"
              type="text"
              name="slogan"
              id="slogan"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Slogan"
              required
            />
          </div>
          <div class="w-full">
            <label
              for="exceprt"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Exceprt
            </label>
            <input
              type="text"
              name="exceprt"
              id="exceprt"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Exceprt"
            />
          </div>
          <div>
            <label
              for="public"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Public</label
            >
            <select
              v-model="postData.is_public"
              id="category"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option :value="false">Private</option>
              <option :value="true">Public</option>
            </select>
          </div>
          <div>
            <label
              for="item-weight"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Item Weight (kg)</label
            >
            <input
              type="number"
              name="item-weight"
              id="item-weight"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="12"
              required
            />
          </div>
          <!-- Logo & cover -->
          <ImageUploader
            lable-idle="Logo here"
            @on-uploaded-successfully="
              ($event) => {
                postData.logo_id = $event.results.uuid;
              }
            "
            accepted-file-type="image/jpeg, image/png"
          />

          <ImageUploader
            lable-idle="Cover here"
            @on-uploaded-successfully="
              ($event) => {
                postData.cover_id = $event.results.uuid;
              }
            "
            accepted-file-type="image/jpeg, image/png"
          />
          <div class="sm:col-span-2">
            <ClientOnly>
              <Editor v-model="postData.content" />
            </ClientOnly>
            <span v-if="hasContentError" class="text-red-700 text-sm">
              Content is Required
            </span>
          </div>
        </div>
        <button
          type="submit"
          class="items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white rounded !bg-blue-800 disabled:!bg-gray-500 disabled:cursor-not-allowed"
          :disabled="loadingDisabled"
        >
          <Icon
            v-if="loadingDisabled"
            class="animate-spin"
            size="1.5rem"
            name="mdi:loading"
          />
          <span v-else>Add Post +</span>
        </button>
      </VForm>
    </div>
  </section>
</template>

<script setup lang="ts">
import Editor from "@tinymce/tinymce-vue";
import * as Yup from "yup";

const postData = ref({
  title: "",
  slogan: "",
  logo_id: "",
  cover_id: "",
  excerpt: "",
  content: "",
  comments: 0,
  type: 0,
  is_public: true,
  attachments: "",
  categories: "",
  tags: "",
  platforms: "",
});

const hasContentError = ref(false);
const loadingDisabled = ref(false);

const addPost = () => {
  loadingDisabled.value = true;
  if (postData.value.content) {
    usePostsStore()
      .createPost(postData.value)
      .then((res) => {
        loadingDisabled.value = false;
        console.log(res);
      })
      .catch((err) => {
        loadingDisabled.value = false;
        console.log(err);
      });
  } else {
    hasContentError.value = true;
  }
};

// Form Validation
const postSchema = Yup.object({
  title: Yup.string().required("Title is Required"),
});
</script>

<style>
.tox-notifications-container {
  display: none;
}
</style>
