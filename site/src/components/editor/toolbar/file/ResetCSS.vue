<template>
  <UiButton
    class="gap-x-1.5 w-full h-8 justify-start"
    variant="ghost"
    size="sm"
    @click="resetCSS"
  >
    <span i-ic:baseline-format-clear text-base />
    {{ $t("toolbar.file.reset_css") }}
  </UiButton>
</template>

<script lang="ts" setup>
import { DEFAULT_CSS_CONTENT } from "~/composables/constant/variables";

const { data } = useDataStore();

const resetCSS = async () => {
  if (!data.resumeId) return;

  const { setContent } = useMonaco();

  setContent("css", DEFAULT_CSS_CONTENT);
};
</script>
