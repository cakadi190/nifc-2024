<template>
  <div id="contact-us-page">
    <header-section />
    <contact-page />
  </div>
</template>

<script lang="ts" setup>
import headerSection from '~/components/contact/header.vue';
import contactPage from '~/components/contact/contact-section.vue';

/** ==============================================
 * SEO META TAG
 ============================================== */
 const title = ref("Hubungi Kami • Museum Trinil");
const desc = ref(
	"Mari, hubungi kami apabila ada yang perlu disampaikan, dilaporkan atau butuh bantuan kepada tim teknis kami."
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

<style>

</style>