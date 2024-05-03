<template>
  <button class="back-to-top" v-show="showButton" @click="scrollToTop">
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
  showButton.value = window.scrollY > 300;
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

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
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
  transition: opacity 0.3s ease;
  border-radius: .5rem;
  font-size: 1.25rem;
}

.back-to-top:hover {
  opacity: 1;
}
</style>