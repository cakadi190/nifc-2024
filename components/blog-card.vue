<template>
	<router-link :to="`/berita/${toSlug(item.title)}`" class="text-decoration-none card card-blog card-body rounded-5 p-4">
		<div class="ratio ratio-16x9 overflow-hidden rounded-4 mb-4">
			<nuxt-img :alt="item.title" class="w-100 mb-4" :src="item.thumbnail" />
		</div>

		<time :datetime="$dayjs(item.created_at).toString()" class="blog-time">
			<i class="fas fa-calendar"></i>
			<span>{{ $dayjs(item.created_at).format("DD MMMM YYYY") }}</span>
		</time>

		<h3 class="blog-title">{{ item.title }}</h3>
		<p>{{ truncateParagraph(item.desc, 200) }}</p>

		<a href="#" class="stretched-link text-decoration-none">Baca Lebih</a>
	</router-link>
</template>

<script lang="ts" setup>
const truncateParagraph = (paragraph: string, maxLength: number): string =>
	paragraph.length > maxLength
		? paragraph.substring(0, maxLength).replace(/\s\w+$/, "...")
		: paragraph;

defineProps<{
  item: any;
}>();

const toSlug = (title: string): string => 
  title.toLowerCase().replace(/[^a-zA-Z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlogCard',
});
</script>

<style lang="scss" scoped>
.card-blog {
	border-radius: 0.75rem;
	overflow: hidden;
	box-shadow: 0 0 2rem 0.5rem rgba(0, 0, 0, 0.05);

	.blog-title {
		font-family: var(--bs-font-serif);
		font-weight: normal;
		font-size: 1.75rem;
	}

	.blog-time {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		position: absolute;
		font-size: 0.875em;
		padding: 0.5rem 0.75rem;
		background: var(--bs-body-bg);
		top: 2.5rem;
		left: 2.5rem;
		border-radius: var(--bs-border-radius-lg);

		i {
			color: rgba(lighten(#805231, 15%), 0.75);
		}
	}
}
</style>