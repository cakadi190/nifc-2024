<template>
	<section class="section-ns-wider">
		<div class="container-small">
			<div class="row align-items-end mb-5">
				<div class="col-md-8 mb-4 mb-md-0">
					<h3 class="section-subtitle text-start opacity-50">Berita</h3>
					<h2 class="section-title text-start mb-0">
						Berita & Informasi Terbaru
					</h2>
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

			<div class="row gy-4">
				<div class="col-xl-4 col-md-6" v-for="(item, index) in sortedBlogItems" :key="index">
					<div class="card card-blog card-body rounded-5 p-4">
						<div class="ratio ratio-16x9 overflow-hidden rounded-4 mb-4">
							<nuxt-img class="w-100 mb-4" :src="item.thumbnail" />
						</div>

						<time
							:datetime="$dayjs(item.created_at).toString()"
							class="blog-time"
						>
							<i class="fas fa-calendar"></i>
							<span>{{ $dayjs(item.created_at).format("DD MMMM YYYY") }}</span>
						</time>

						<h3 class="blog-title">{{ item.title }}</h3>
						<p>{{ truncateParagraph(item.desc, 200) }}</p>

						<a href="#" class="stretched-link text-decoration-none"
							>Baca Lebih</a
						>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BlogSection",
});
</script>

<script lang="ts" setup>
const truncateParagraph = (paragraph: string, maxLength: number): string =>
	paragraph.length > maxLength
		? paragraph.substring(0, maxLength).replace(/\s\w+$/, "...")
		: paragraph;

const blogItem = [
	{
		thumbnail: "/images/blog/bbm.jpg",
		title: "Tahukah Kamu: BBM Kita Terbuat dan Berasal Dari Fosil Lho!",
		desc: "Apakah Anda pernah bertanya-tanya dari mana asal mula bahan bakar minyak (BBM) yang begitu penting dalam kehidupan sehari-hari kita? Jawabannya tersembunyi dalam jejak fosil yang melintasi jutaan tahun sejarah bumi. BBM, termasuk minyak bumi, gas alam, dan batu bara, adalah hasil dari proses alami penguraian sisa-sisa organisme laut dan darat di dalam lapisan tanah. Inilah yang membuatnya disebut sebagai sumber energi fosil.",
		created_at: "2024-01-13 12:22:15",
		category: [
			{ name: "Blog", slug: "blog" },
			{ name: "FunFact", slug: "funfact" },
		],
		author: {
			name: "Agus Nanang Prasetyo",
			email: "agusnanang2235@gmail.com",
			image: "/images/blog/author1.jpg",
		},
	},
	{
		thumbnail: "/images/blog/maintenance.jpg",
		title: "Informasi Sobat Arkeolog: Museum Trinil Tutup Sementara",
		desc: "Halo sobat Arkeolog! Mohon maaf ya, untuk sementara Museum Trinil ini kami tutup terlebih dahulu dikarenakan kami sedang melakukan pemeriksaan dan perbaikan berkala untuk memastikan kenyamanan dan keamanan sobat ketika berkunjung ke Museum Trinil hingga tanggal 08 Agustus mendatang ya. Bagi yang sudah memesan tiket untuk masuk ke dalam museum dan ingin mengembalikan uang pembelian (refund) bisa langsung hubungi admin dibawah ini ya.",
		created_at: "2023-07-25 10:30:00",
		category: [
			{ name: "Blog", slug: "blog" },
			{ name: "Maintenance", slug: "maintenance" },
		],
		author: {
			name: "Dian Puspita",
			email: "dianpuspita@example.com",
			image: "/images/blog/author2.jpg",
		},
	},
	{
		thumbnail: "/images/blog/bengawan_solo.jpg",
		title: "Melintasi Sejarah: Eksplorasi Legenda Bengawan Solo Yang Ikonik Banget",
		desc: "Bengawan Solo adalah salah satu sungai terpanjang di Pulau Jawa, Indonesia, yang melintasi beragam wilayah dengan keindahan alam yang memukau. Namun, keindahan alamnya bukanlah satu-satunya daya tariknya. Bengawan Solo juga dikenal karena kaya akan nilai sejarah dan mitos yang melegenda. Mari kita telusuri jejak sejarah dan cerita-cerita mistis yang terkait dengan sungai yang memikat hati ini.",
		created_at: "2024-05-08 11:00:00",
		category: [
			{ name: "Blog", slug: "blog" },
			{ name: "History", slug: "history" },
		],
		author: {
			name: "Eko Prasetyo",
			email: "ekoprasetyo@example.com",
			image: "/images/blog/author5.jpg",
		},
	},
	{
		thumbnail: "/images/blog/eksplorasi.jpg",
		title: "Menjelajahi Dunia: Petualangan di Balik Eksplorasi",
		desc: "Eksplorasi merupakan bagian penting dari pengembangan diri dan pengetahuan manusia. Dari eksplorasi lautan yang dalam hingga penjelajahan luar angkasa, dunia kita penuh dengan keajaiban yang menunggu untuk ditemukan. Temukan kisah inspiratif dari para penjelajah yang berani mengeksplorasi wilayah yang belum dijelajahi.",
		created_at: "2024-03-06 09:45:00",
		category: [
			{ name: "Blog", slug: "blog" },
			{ name: "Exploration", slug: "exploration" },
		],
		author: {
			name: "Budi Santoso",
			email: "budisantoso@example.com",
			image: "/images/blog/author3.jpg",
		},
	},
	{
		thumbnail: "/images/blog/amal.jpeg",
		title: "Keindahan Memberi: Kisah-Kisah Inspiratif dari Dunia Amal",
		desc: "Memberi adalah tindakan mulia yang memiliki dampak besar dalam kehidupan orang lain maupun diri sendiri. Melalui kisah-kisah inspiratif dari dunia amal, kita dapat memahami betapa pentingnya memiliki hati yang penuh kasih dan kepedulian terhadap sesama. Temukan cerita-cerita menginspirasi tentang kebaikan dan pengabdian.",
		created_at: "2023-05-07 08:15:00",
		category: [
			{ name: "Blog", slug: "blog" },
			{ name: "Charity", slug: "charity" },
		],
		author: {
			name: "Citra Lestari",
			email: "citralestari@example.com",
			image: "/images/blog/author4.jpg",
		},
	},
];

const parseDate = (dateString: string): Date => {
	const [date, time] = dateString.split(" ");
	const [year, month, day] = date.split("-").map(Number);
	const [hours, minutes, seconds] = time.split(":").map(Number);
	return new Date(year, month - 1, day, hours, minutes, seconds);
};

const sortedBlogItems = blogItem.slice().sort((a, b) => {
	const dateA = parseDate(a.created_at);
	const dateB = parseDate(b.created_at);
	return dateB.getTime() - dateA.getTime();
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