<template>
	<div class="section-ns-wider">
		<div class="container-small">
			<GridGallery :images="galleryImages" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "GallerySection",
});
</script>

<script lang="ts" setup>
import GridGallery from "~/components/gallery-component.vue";

const galleryImages = [
	{ src: "https://picsum.photos/400/600", alt: "Image 1" },
	{ src: "https://picsum.photos/500/350", alt: "Image 2" },
	{ src: "https://picsum.photos/500/350", alt: "Image 3" },
	{ src: "https://picsum.photos/450/500", alt: "Image 4" },
	{ src: "https://picsum.photos/550/350", alt: "Image 5" },
	{ src: "https://picsum.photos/480/600", alt: "Image 6" },
	{ src: "https://picsum.photos/700/400", alt: "Image 7" },
	{ src: "https://picsum.photos/350/450", alt: "Image 8" },
	{ src: "https://picsum.photos/650/500", alt: "Image 9" },
	{ src: "https://picsum.photos/500/550", alt: "Image 10" },
	{ src: "https://picsum.photos/400/600", alt: "Image 11" },
	{ src: "https://picsum.photos/600/550", alt: "Image 12" },
	{ src: "https://picsum.photos/450/400", alt: "Image 13" },
	{ src: "https://picsum.photos/550/500", alt: "Image 14" },
	{ src: "https://picsum.photos/700/600", alt: "Image 15" },
	{ src: "https://picsum.photos/650/450", alt: "Image 16" },
	{ src: "https://picsum.photos/480/550", alt: "Image 17" },
	{ src: "https://picsum.photos/600/480", alt: "Image 18" },
	{ src: "https://picsum.photos/400/450", alt: "Image 19" },
	{ src: "https://picsum.photos/550/600", alt: "Image 20" },
];
</script>

<style>
</style>