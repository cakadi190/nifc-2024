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
						to="/berita"
						class="me-auto text-decoration-none justify-content-start justify-content-md-end text-end d-flex gap-2 align-items-center"
					>
						<span>Lihat Semua</span>
						<i class="fas fa-chevron-right"></i>
					</router-link>
				</div>
			</div>

			<div class="row gy-4">
				<div class="col-xl-4 col-md-6" v-for="(item, index) in sortedBlogItems" :key="index">
          <blog-card :item="item" />
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
import blogCard from "../blog-card.vue";

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
		thumbnail: "/images/blog/museum_trinil.jpg",
		title:
			"Menelusuri Sejarah: Mengungkap Keindahan dan Misteri di Museum Trinil",
		desc: "Museum Trinil merupakan sebuah tempat yang memikat hati para pengunjung dengan koleksi artefak prasejarah yang menakjubkan. Dari fosil-fosil purba hingga artefak manusia purba, mari kita telusuri keindahan dan misteri yang tersembunyi di dalam Museum Trinil.",
		created_at: "2024-05-04 10:00:00",
		category: [
			{ name: "Blog", slug: "blog" },
			{ name: "History", slug: "history" },
		],
		author: {
			name: "Fitri Utami",
			email: "fitriutami@example.com",
			image: "/images/blog/author12.jpg",
		},
	},
	{
		thumbnail: "/images/blog/patung_prasejarah.jpg",
		title:
			"Karya Seni Prasejarah: Memahami Kehidupan Manusia Purba Melalui Patung-Patung Prasejarah",
		desc: "Patung-pratung prasejarah memberikan pandangan unik tentang kehidupan manusia purba. Dari kegiatan sehari-hari hingga kepercayaan spiritual, mari kita eksplorasi karya seni prasejarah yang mempesona ini dan mencoba memahami dunia mereka melalui patung-patung yang mereka tinggalkan.",
		created_at: "2024-05-02 11:30:00",
		category: [
			{ name: "Blog", slug: "blog" },
			{ name: "Art", slug: "art" },
		],
		author: {
			name: "Rizki Pratama",
			email: "rizkipratama@example.com",
			image: "/images/blog/author13.jpg",
		},
	},
	{
		thumbnail: "/images/blog/peninggalan_peradaban.jpg",
		title:
			"Jejak Peradaban: Mengungkap Peninggalan Budaya di Situs Arkeologi Terkenal",
		desc: "Situs arkeologi merupakan saksi bisu dari perjalanan panjang peradaban manusia. Dari piramida Mesir hingga Machu Picchu, mari kita menjelajahi jejak-jejak peradaban yang kaya dan menarik yang tertinggal di situs arkeologi terkenal di seluruh dunia.",
		created_at: "2024-05-01 14:00:00",
		category: [
			{ name: "Blog", slug: "blog" },
			{ name: "Archaeology", slug: "archaeology" },
		],
		author: {
			name: "Sinta Dewi",
			email: "sintadewi@example.com",
			image: "/images/blog/author14.jpg",
		},
	},
	{
		thumbnail: "/images/blog/bengawan_solo.jpg",
		title:
			"Melintasi Sejarah: Eksplorasi Legenda Bengawan Solo Yang Ikonik Banget",
		desc: "Bengawan Solo adalah salah satu sungai terpanjang di Pulau Jawa, Indonesia, yang melintasi beragam wilayah dengan keindahan alam yang memukau. Namun, keindahan alamnya bukanlah satu-satunya daya tariknya. Bengawan Solo juga dikenal karena kaya akan nilai sejarah dan mitos yang melegenda. Mari kita telusuri jejak sejarah dan cerita-cerita mistis yang terkait dengan sungai yang memikat hati ini.",
		created_at: "2024-05-05 11:00:00",
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
