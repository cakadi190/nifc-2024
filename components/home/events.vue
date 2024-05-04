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
						class="me-auto text-decoration-none justify-content-start justify-content-lg-end text-end d-flex gap-2 align-items-center"
					>
						<span>Lihat Semua</span>
						<i class="fas fa-chevron-right"></i>
					</router-link>
				</div>
			</div>

			<div class="d-flex flex-column gap-3">
				<div class="event-list" v-for="(item, index) in eventList" :key="index">
					<div class="row align-items-start align-items-md-center">
						<div class="col-md-6 left-side">
							<div
								class="d-flex flex-column flex-lg-row pb-4 pb-lg-0 gap-4 align-items-start align-items-lg-center"
							>
								<div class="event-image-wrap">
									<nuxt-img :src="item.image" />
								</div>

								<div class="event-name">
									<div class="event-dates">
										<h3 class="event-date">
											{{ $dayjs(item.date[0]).format("DD") }}
										</h3>

										<div class="event-month-day">
											<span class="event-month">{{
												$dayjs(item.date[0]).format("MMMM")
											}}</span>
											<div class="event-day">
												{{ $dayjs(item.date[0]).format("dddd") }}
											</div>
										</div>
									</div>

									<h4
										class="mb-0"
										style="
											font-family: var(--bs-font-serif);
											font-weight: normal;
										"
									>
										{{ item.title }}
									</h4>
								</div>
							</div>
						</div>
						<div class="col-md-6 right-side">
							<div
								class="d-flex flex-column flex-md-row align-items-start align-items-lg-center justify-content-between px-0 px-md-3"
							>
								<div class="event-detail pt-4 pt-md-0">
									<div class="d-flex gap-2">
										<Icon name="ion:clock" size="20" />
										<div>
											<strong>Waktu</strong><br />
											<span>{{ $dayjs(item.date[0]).format("HH.mm") }}</span>
											s/d
											<span>{{ $dayjs(item.date[1]).format("HH.mm") }}</span>
										</div>
									</div>

									<div class="d-flex gap-2">
										<Icon name="ion:map-outline" size="20" />
										<div>
											<strong>Lokasi</strong><br />
											<span>{{ item.place }}</span>
										</div>
									</div>
								</div>

								<router-link
									to="/"
									class="event-book mt-3 mt-md-0 btn-lg btn btn-primary"
								>
									Lihat Detail
								</router-link>
							</div>
						</div>
					</div>

					<div class="event-overlay">
						<div
							class="w-100 h-100 gap-3 d-flex align-items-center justify-content-center"
						>
							<Icon name="bi:ticket-perforated" size="48" />
							<h3 class="mb-0">HTM: {{ item.price > 0 ? formatCurrency(item.price) : 'Gratis!!!' }}</h3>
						</div>
					</div>
				</div>
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
		place: "Pelataran Museum Trinil",
		price: 0,
		kategori: [
			{ name: "Konser", slug: "konser" },
			{ name: "Amal", slug: "amal" },
			{ name: "Lingkungan", slug: "lingkungan" },
		],
	},
];

const formatCurrency = (amount: number) =>
	new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(amount);
</script>

<style lang="scss" scoped>
#event-exhibition {
	background: lighten(#805231, 63.5%);
}

.event-list {
	padding: 2rem;
	border-radius: var(--bs-border-radius-xl);
	background: var(--bs-body-bg);
	border: 1px solid #eaeaea;
	overflow: hidden;
	position: relative;

	.event-image-wrap {
		border-radius: 99rem;
		height: 7.5rem;
		width: 7.5rem;
		overflow: hidden;
		position: relative;

		img {
			left: -2rem;
			position: absolute;
			height: 7.5rem;
		}
	}

	.event-dates {
		display: flex;
		gap: 1rem;
		align-items: center;
		margin-bottom: 1rem;

		.event-month-day {
			display: flex;
			flex-direction: column;

			.event-month,
			.event-day {
				font-size: 1.25rem;
			}
		}

		.event-date,
		.event-month,
		.event-day {
			font-family: var(--bs-font-serif);
			margin: 0;
		}

		.event-date {
			margin-top: -1.25rem;
			font-size: 3rem;
			font-weight: normal;
			line-height: 1em;
			font-size: 5rem;
			color: var(--bs-primary);
		}
	}

	.left-side {
		border-right: 1px solid #eaeaea;

		@media screen and (max-width: 768px) {
			border-right: unset;
			border-bottom: 1px solid #eaeaea;
		}
	}

	.event-detail {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.event-book {
		z-index: 1010;

		@media screen and (max-width: 992px) {
			width: 100%;
		}
	}

	.event-overlay {
		z-index: 1000;
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(lighten(#805231, 60%), 0.75);
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: all 0.2s;
		backdrop-filter: blur(0.5rem);
		opacity: 0;
	}

	&:hover .event-overlay {
		margin-top: 0;
		opacity: 1;
	}
}
</style>