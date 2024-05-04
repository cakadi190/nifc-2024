<template>
  <button class="back-to-top" :class="{hide: !showButton}" @click="scrollToTop">
    <Icon name="fa:chevron-up" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BackToTop',
});
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 50;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped lang="scss">
.back-to-top {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bs-primary);
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: .5;
  transition: all .3s;
  border-radius: .5rem;
  font-size: 1rem;
  z-index: 1000;
  display: block;
  line-height: 1;

  &.hide {
    opacity: 0;
    bottom: 0;
    display: none;
  }
}

.back-to-top:hover {
  opacity: 1;
  border-radius: 99rem;
}
</style>