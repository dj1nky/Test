<script setup>
import { NuxtLink, UiButton, UiDiv, UiIcon } from "#components";
</script>

<template>
  <ui-div container>
    <h1>Home</h1>
    <p>
      This site extends the unBloched layer. Browse every component at
      <NuxtLink to="/design-system">/design-system</NuxtLink>
      .
    </p>
    <ui-button
      variant="primary"
      class="w-fit"
      size="lg"
      :link="'/design-system'"
    >
      Go to Design System
    </ui-button>
    <ui-icon
      icon-color="text-yellow-700"
      icon-name="tabler:acorn"
    />
  </ui-div>
</template>
