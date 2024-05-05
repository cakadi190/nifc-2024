<template>
	<section class="section-ns-wider" id="event-exhibition">
		<div class="container-small">
			<div class="row align-items-end mb-5">
				<div class="col-md-8 mb-4 mb-md-0">
					<h3 class="section-subtitle text-start opacity-50">Pameran</h3>
					<h2 class="section-title text-start mb-0">Pameran & Kegiatan</h2>
				</div>
				<div class="col-md-4">
					<router-link
						to="/pameran"
						class="me-auto text-decoration-none justify-content-start justify-content-md-end text-end d-flex gap-2 align-items-center"
					>
						<span>Lihat Semua</span>
						<i class="fas fa-chevron-right"></i>
					</router-link>
				</div>
			</div>

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
const eventList = [
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
];
</script>

<style lang="scss" scoped>
#event-exhibition {
	background: lighten(#805231, 63.5%);
}
</style>
