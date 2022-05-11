<script lang="ts" setup>
defineProps<{ modal?: boolean }>()
</script>

<template>
  <div class="card" :class="{ modal: modal }">
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  @apply flex flex-col space-y-4 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900;
}

@media screen {
}

.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 400px;
  margin-left: -200px;
}
</style>
