<template>
  <ClientOnly>
    <file-pond
      name="file"
      ref="pond"
      :label-idle="lableIdle"
      :allow-multiple="isMultiple"
      maxFileSize="5MB"
      :accepted-file-types="acceptedFileType"
      :files="myFiles"
      :server="{
        url: `${baseURL}/v1/my/account/`,
        process: {
          url: 'attachments',
          method: 'POST',
          headers: {
            // @ts-ignore
            Authorization: useCookie('user').value.access_token,
          },
          ondata: (formData:FormData) => {
                formData.append('type', '11001');
                return formData;
            },
        },
      }"
      @init="handleFilePondInit"
      @processfile="processfile"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
const emit = defineEmits(["onUploadedSuccessfully"]);
const baseURL = useRuntimeConfig().public.baseUrl;
// Import FilePond
import vueFilePond from "vue-filepond";

// Import plugins
// @ts-ignore
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
// @ts-ignore
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";

// Import styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Create FilePond component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize
);

defineProps({
  lableIdle: {
    type: String,
  },
  isMultiple: {
    type: Boolean,
    default: false,
  },
  acceptedFileType: {
    type: String,
  },
});

const pond = ref();
const myFiles = ref([]);
const handleFilePondInit = () => {
  console.log("FilePond has initialized");

  // example of instance method call on pond reference
  pond.value.getFiles();
};

// * when everything was ok
const processfile = (error: any, file: any) => {
  console.log(JSON.parse(file.serverId));
  emit("onUploadedSuccessfully", JSON.parse(file.serverId));
};
</script>

<style>
.filepond--credits {
  display: none !important;
}
</style>
