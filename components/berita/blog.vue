<template>
	<section class="section-ns-wider">
		<div class="container-small">
			<div class="row gy-4">
				<div
					class="col-xl-4 col-md-6"
					v-for="(item, index) in sortedBlogItems"
					:key="index"
				>
					<blog-card :item="item" />
				</div>
			</div>

			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					<li class="page-item active"><a class="page-link" href="#">1</a></li>
					<li class="page-item"><a class="page-link" href="#">2</a></li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BlogListSection",
});
</script>

<script lang="ts" setup>
import blogCard from "~/components/blog-card.vue";

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
		created_at: "2024-05-08 10:00:00",
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
		thumbnail: "/images/blog/cyber.jpg",
		title:
			"Informasi Sobat Arkeolog: Website Tidak Merespon dan Sedang Bermasalah",
		desc: "Halo sobat Arkeolog! Mohon maaf ya, beberapa hari yang lalu website kami sedang mengalami masalah dan sedang kami investigasi terlebih dahulu yang mana disebabkan oleh serangan DDoS (Distributed Denial of Service) yang mana membuat peladen ini tidak kuat menahan serangan itu.",
		created_at: "2023-12-21 10:30:00",
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
		title:
			"Melintasi Sejarah: Eksplorasi Legenda Bengawan Solo Yang Ikonik Banget",
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

/** ==============================================
 * SEO META TAG
 ============================================== */
const title = ref("Informasi dan Berita • Museum Trinil");
const desc = ref(
	"Semua informasi dan berita terkait Museum Trinil ada disini."
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

<style scoped lang="scss">
.pagination {
	align-items: center;
	justify-content: center;
	margin-top: 3rem;
  gap: .5rem;

	.page-item {
		.page-link {
			border: none;
			height: 3rem;
			width: 3rem;
			display: flex;
			align-items: center;
			justify-content: center;
			background: transparent;
      border-radius: 99rem;
		}

		&.active > .page-link {
			background: var(--bs-primary);
		}
	}
}
</style>