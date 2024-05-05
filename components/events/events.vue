<template>
	<section class="section-ns-wider" id="event-exhibition">
		<div class="container-small">
			<div class="d-flex flex-column gap-3">
        <event-card v-for="(item, index) in eventList" :key="index" :item="item" />
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "EventSection",
});
</script>

<script lang="ts" setup>
const eventList = ref([
	{
		image: "/images/events/pameran-fosil.jpg",
		title: "Pameran Fosil Manusia Purba",
		date: ["2024-05-01 14:15:00", "2024-05-01 16:45:00"],
		place: "Pelataran Museum Trinil",
		price: 10000,
		kategori: [{ name: "Pameran", slug: "pameran" }],
	},
	{
		image: "/images/events/tur-manusia-purba.jpg",
		title: "Tur Sejarah: Jejak Manusia Purba",
		date: ["2024-05-07 10:00:00", "2024-05-07 12:00:00"],
		place: "Museum Trinil",
		price: 12500,
		kategori: [{ name: "Giat Eksternal", slug: "giat-eksternal" }],
	},
	{
		image: "/images/events/lokakarya.jpg",
		title: "Lokakarya Arkeologi untuk Anak-anak",
		date: ["2024-05-14 13:30:00", "2024-05-14 15:30:00"],
		place: "Museum Trinil",
		price: 13500,
		kategori: [{ name: "Giat Eksternal", slug: "giat-eksternal" }],
	},
	{
		image: "/images/events/discuss.jpg",
		title: "Diskusi: Menggali Misteri Manusia Purba",
		date: ["2024-05-21 17:00:00", "2024-05-21 19:00:00"],
		place: "Gedung Utama Museum Trinil",
		price: 25000,
		kategori: [{ name: "Giat Eksternal", slug: "giat-eksternal" }],
	},
	{
		image: "/images/events/charity.jpeg",
		title: "Konser Amal untuk Lingkungan",
		date: ["2024-05-10 18:00:00", "2024-05-10 22:00:00"],
		place: "Alun-Alun Timur Ngawi",
		price: 0,
		kategori: [
			{ name: "Konser", slug: "konser" },
			{ name: "Amal", slug: "amal" },
			{ name: "Lingkungan", slug: "lingkungan" },
		],
	},
  
	{
		image: "/images/events/pameran-fosil.jpg",
		title: "Pameran Artefak Prasejarah",
		date: ["2024-05-02 10:00:00", "2024-05-02 15:00:00"],
		place: "Aula Utama Museum Trinil",
		price: 12000,
		kategori: [{ name: "Pameran", slug: "pameran" }],
	},
	{
		image: "/images/events/pameran-fosil.jpg",
		title: "Pameran Seni Pra Sejarah",
		date: ["2024-05-08 09:00:00", "2024-05-08 13:00:00"],
		place: "Gedung Serbaguna Ngawi",
		price: 8000,
		kategori: [{ name: "Pameran", slug: "pameran" }],
	},
	{
		image: "/images/events/pameran-fosil.jpg",
		title: "Pameran Batu-batu Prasejarah",
		date: ["2024-05-15 11:00:00", "2024-05-15 16:00:00"],
		place: "Lapangan Desa Trinil",
		price: 15000,
		kategori: [{ name: "Pameran", slug: "pameran" }],
	},
	{
		image: "/images/events/pameran-fosil.jpg",
		title: "Pameran Perkakas Prasejarah",
		date: ["2024-05-22 10:30:00", "2024-05-22 14:30:00"],
		place: "Taman Kota Ngawi",
		price: 11000,
		kategori: [{ name: "Pameran", slug: "pameran" }],
	},
	{
		image: "/images/events/pameran-fosil.jpg",
		title: "Pameran Prasasti-prasasti Kuno",
		date: ["2024-05-29 13:00:00", "2024-05-29 17:00:00"],
		place: "Gedung Pemerintahan Ngawi",
		price: 17000,
		kategori: [{ name: "Pameran", slug: "pameran" }],
	},
]);

eventList.value.sort((a, b) => {
	const dateA = new Date(a.date[0]).getTime();
	const dateB = new Date(b.date[0]).getTime();
	return dateB - dateA;
});
</script>

<style lang="scss" scoped>
#event-exhibition {
	background: lighten(#805231, 63.5%);
}
</style>
