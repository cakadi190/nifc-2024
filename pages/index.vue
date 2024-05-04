<script setup lang="ts">
import headerSlider from '~/components/home/header-slider.vue';
import featuredSection from '~/components/home/featured.vue';

useSeoMeta({
	title: "Museum Trinil • Menelusuri Jejak Manusia Purba dan Keajaiban Paleontologi",
});

useHead({
	title: "Museum Trinil • Menelusuri Jejak Manusia Purba dan Keajaiban Paleontologi",
});
</script>

<template>
	<div id="homepage-wrapper">
		<header-slider />
    <featured-section />
	</div>
</template>
