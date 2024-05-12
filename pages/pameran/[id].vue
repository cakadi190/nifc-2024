<template>
  <div id="exhibition-details-page">
    <header-section />
    <event-section />
    <event-next-prev />
  </div>
</template>

<script lang="ts" setup>
import headerSection from '~/components/events-slug/header.vue';
import eventSection from '~/components/events-slug/event-section.vue';
import eventNextPrev from '~/components/events-slug/event-next-prev.vue';

const title = ref(
	"Pameran Prasasti-Prasati Kuno • Museum Trinil"
);
const desc = ref(
	"Yuk kunjungi Museum Trinil. Tapi sebelum itu beli tiket secara resmi disini supaya tidak rugi nantinya"
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