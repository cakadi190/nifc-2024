<script setup lang="ts">
import headerSlider from '~/components/home/header-slider.vue';
import aboutUs from '~/components/home/about-us.vue';

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
    <about-us />
	</div>
</template>
