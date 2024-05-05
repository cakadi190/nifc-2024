<template>
	<div id="blog-content-page">
		<header-section />
	</div>
</template>

<script lang="ts" setup>
import headerSection from "~/components/berita-slug/header.vue";

/** ==============================================
 * SEO META TAG
 ============================================== */
const title = ref(
	"Informasi Sobat Arkeolog: Museum Trinil Tutup Sementara • Museum Trinil"
);
const desc = ref(
	"Halo sobat Arkeolog! Mohon maaf ya, untuk sementara Museum Trinil ini kami tutup terlebih dahulu dikarenakan kami sedang melakukan pemeriksaan dan perbaikan berkala."
);

useSeoMeta({
	title: title,
	description: desc,
	ogTitle: title,
	ogDescription: desc,
	twitterTitle: title,
	twitterDescription: desc,
	ogUrl: "/berita",
	ogImage: "/images/blog/maintenance.jpg",
	twitterImage: "/images/blog/maintenance.jpg",
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