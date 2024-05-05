<script setup lang="ts">
import headerSlider from '~/components/home/header-slider.vue';
import featuredSection from '~/components/home/featured.vue';
import eventSection from '~/components/home/events.vue';
import funfactSection from '~/components/home/funfact.vue';
import blogSection from '~/components/home/blog.vue';

useSeoMeta({
	title: "Museum Trinil • Menelusuri Jejak Manusia Purba dan Keajaiban Paleontologi",
  description: "Jejak manusia purba dan keajaiban paleontologi terungkap di sini. Temukan peninggalan kuno yang memikat dan cerita tentang evolusi manusia yang menarik di Museum Trinil yang menakjubkan.",
	ogTitle: "Museum Trinil • Menelusuri Jejak Manusia Purba dan Keajaiban Paleontologi",
  ogDescription: "Jejak manusia purba dan keajaiban paleontologi terungkap di sini. Temukan peninggalan kuno yang memikat dan cerita tentang evolusi manusia yang menarik di Museum Trinil yang menakjubkan.",
	twitterTitle: "Museum Trinil • Menelusuri Jejak Manusia Purba dan Keajaiban Paleontologi",
  twitterDescription: "Jejak manusia purba dan keajaiban paleontologi terungkap di sini. Temukan peninggalan kuno yang memikat dan cerita tentang evolusi manusia yang menarik di Museum Trinil yang menakjubkan.",
  ogUrl: '/',
});

useHead({
	title: "Museum Trinil • Menelusuri Jejak Manusia Purba dan Keajaiban Paleontologi",
});
</script>

<template>
	<div id="homepage-wrapper">
		<header-slider />
    <featured-section />
    <event-section />
    <funfact-section />
    <blog-section />
	</div>
</template>
