<template>
  <div id="gallery-page">
    <header-section />
    <gallery-section />
  </div>
</template>

<script lang="ts" setup>
import headerSection from '~/components/gallery/header.vue';
import gallerySection from '~/components/gallery/gallery-section.vue';


const title = ref(
	"Galeri • Museum Trinil"
);
const desc = ref(
	"Yuk lihat-lihat koleksi museum kami."
);

useSeoMeta({
	title: title,
	description: desc,
	ogTitle: title,
	ogDescription: desc,
	twitterTitle: title,
	twitterDescription: desc,
	ogUrl: "/",
	ogImage: "/images/slider-home/1.jpg",
	twitterImage: "/images/slider-home/1.jpg",
	twitterCard: "summary_large_image",
});

useHead({
	title: title,
	htmlAttrs: {
		lang: "id",
	},
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon.ico",
		},

		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			href: "/apple-touch-icon.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			href: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			href: "/favicon-16x16.png",
		},
		{ rel: "manifest", href: "/site.webmanifest" },
	],
});
</script>

<style>

</style>