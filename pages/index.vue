<script setup lang="ts">
import headerSlider from '~/components/home/header-slider.vue';
import featuredSection from '~/components/home/featured.vue';

useSeoMeta({
	title: "Museum Trinil",
});

useHead({
	title: "Museum Trinil",
});
</script>

<template>
	<div id="homepage-wrapper">
		<header-slider />
    <featured-section />
	</div>
</template>
