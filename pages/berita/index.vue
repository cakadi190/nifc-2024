<template>
	<div id="blog-page">
    <header-section />
    <blog-list-section />
	</div>
</template>

<script lang="ts" setup>
import blogListSection from '~/components/berita/blog.vue';
import headerSection from '~/components/berita/header.vue';

/** ==============================================
 * SEO META TAG
 ============================================== */
const title = ref("Informasi dan Berita • Museum Trinil");
const desc = ref(
	"Semua informasi dan berita terkait Museum Trinil ada disini."
);

useSeoMeta({
	title: title,
	description: desc,
	ogTitle: title,
	ogDescription: desc,
	twitterTitle: title,
	twitterDescription: desc,
	ogUrl: "/berita",
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
