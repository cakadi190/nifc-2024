<template>
  <div class="masonry-grid">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="masonry-item"
      :class="{ tall: index % 5 === 0 || index % 7 === 0, wide: index % 3 === 0 }"
    >
      <img :src="image.src" :alt="image.alt" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GridGallery'
})
</script>


<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  images: {
    type: Array as () => Array<{ src: string; alt: string }>,
    required: true
  }
});
</script>

<style scoped>
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

.masonry-item {
  break-inside: avoid;
}

.masonry-item img {
  width: 100%;
  height: auto;
  display: block;
}

.tall {
  grid-row: span 2;
}

.wide {
  grid-column: span 2;
}
</style>
