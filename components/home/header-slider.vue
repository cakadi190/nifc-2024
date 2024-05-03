<template>
	<header id="masthead">
		<swiper
			:slides-per-view="1"
			:space-between="0"
			:modules="modules"
			:loop="true"
			:navigation="true"
			:pagination="{
				clickable: true,
			}"
			:autoplay="{
				delay: 7000,
				disableOnInteraction: false,
			}"
		>
			<swiper-slide v-for="(item, index) in swiperItems" :key="index">
				<div
					class="swiper-items"
					:style="{
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						backgroundImage: `url(${item.background})`,
					}"
				>
					<div class="container-wider">
						<div class="gradient-overlay"></div>
						<div class="row">
							<div class="col-lg-6">
								<h1 class="slider-title">
									{{ item.title }}
								</h1>
								<p class="slider-desc">
									{{ item.desc }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "HeaderSlider",
});
</script>

<script lang="ts" setup>
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [SwiperAutoplay, SwiperPagination, SwiperNavigation];

const swiperItems = [
	{
		title: "Jelajahi Keberadaban Manusia Purba di Musium Trinil",
		desc: "Temukan jejak manusia purba di Musium Trinil dengan eksplorasi yang memukau dalam sejarah evolusi manusia.",
		background: "/images/Museum-Trinil.jpg",
	},
	{
		title: "Misteri Fosil Homo Erectus",
		desc: "Telusuri misteri fosil Homo Erectus di Musium Trinil: pengalaman mendalam dalam perjalanan evolusi manusia.",
		background: "/images/museum-trinil-2-1024x683.jpg",
	},
	{
		title: "Penemuan Artefak Prasejarah",
		desc: "Terpesona dengan penemuan artefak prasejarah di Musium Trinil: jendela ke masa lalu yang menakjubkan.",
		background: "/images/PXL_20211031_100304170_11zon.jpg",
	},
	{
		title: "Eksplorasi Situs Penggalian",
		desc: "Jelajahi situs penggalian arkeologi di Musium Trinil: menyelami kekayaan sejarah bumi dan manusia.",
		background: "/images/627da6607e945.jpeg",
	},
];
</script>

<style lang="scss" scoped>
#masthead {
	height: 100vh;
}

.swiper-items {
	position: relative;

	.gradient-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%; /* Lebar gradient */
		height: 100%;
		background: linear-gradient(
			-295deg,
			rgba(255, 255, 255, 1) 35%,
			rgba(255, 255, 255, 0.8) 55%,
			rgba(255, 255, 255, 0.6) 75%,
			rgba(255, 255, 255, 0.4) 85%,
			rgba(255, 255, 255, 0.25)
		);
	}

	.row {
		min-height: 100vh;
		align-items: center;
		position: relative;
		z-index: 1; /* Menempatkan teks di atas gradient */
	}

	.slider-title {
		font-size: 5rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
		font-family: var(--bs-font-serif);
		line-height: 1.25;

		@media screen and (max-width: 1600px) {
			line-height: 1.25;
			font-size: 2.5rem;
		}
	}

	.slider-desc {
		font-size: 1.75rem;
		font-weight: 500;
		font-family: var(--bs-font-sans-serif);

		@media screen and (max-width: 1600px) {
			line-height: 1.5;
			font-size: 1.5rem;
		}
	}
}
</style>

<style lang="scss">
.swiper-button-next,
.swiper-button-prev {
	position: absolute;
	bottom: 5rem;
	color: white;
	height: 5rem;
	width: 5rem;
	padding: 1rem;
	background: var(--bs-primary);
	border-radius: 99rem;
  transition: all .2s;

	&::after {
		font-family: "Font Awesome 6 Free";
		font-weight: 900;
		font-size: 2rem !important;
	}

	@media screen and (max-width: 1400px) {
		width: 4rem;
		height: 4rem;

		&::after {
			font-size: 1rem;
		}
	}
}

.swiper-button-next {
	right: 5rem;
	left: unset;
	top: unset;
  
	@media screen and (max-width: 992px) {
    right: 2rem;
    bottom: 2rem;
	}

	&::after {
		content: "\f054";
	}
}

.swiper-button-prev {
	right: calc(5rem + 2rem + 4rem);
	left: unset;
	top: unset;

	@media screen and (max-width: 1400px) {
		right: calc(5rem + 1rem + 4rem);
	}
  
	@media screen and (max-width: 992px) {
    right: calc(2rem + 1rem + 4rem);
    bottom: 2rem;
	}

	&::after {
		content: "\f053";
	}
}

.swiper-pagination {
	position: absolute !important;
	bottom: 5rem !important;
	left: 7rem !important;
	top: unset !important;
	width: fit-content !important;
	display: flex;
	gap: 0.5rem;

	@media screen and (max-width: 1400px) {
		left: 3rem !important;
	}

	@media screen and (max-width: 992px) {
		left: 1rem !important;
	}

	@media screen and (max-width: 767px) {
		display: none;
	}

	.swiper-pagination-bullet {
		width: 1.5rem;
		border-radius: 0.25rem;
		height: 0.5rem;

		&.swiper-pagination-bullet-active {
			background: var(--bs-primary);
		}
	}
}
</style>
