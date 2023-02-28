<template>
  <van-button type="primary"> <slot /></van-button>
</template>

<script>
import { Button } from 'vant';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'gw-button',
  components: {
    [Button.name]: Button,
  },
  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
});
</script>

<style lang="scss"></style>
