<template>
	<div id="page-error">
		<div class="inner-content">
			<div class="content-main">
				<h1 class="error-title">{{ error.statusCode }}</h1>
				<p class="error-desc">{{ computedDescription }}</p>

				<router-link
					v-if="error.statusCode <= 500"
					to="/"
					class="btn btn-primary"
					>Kembali Ke Beranda</router-link
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ErrorPageHandler",
});
</script>

<script lang="ts" setup>
interface ErrorResponse {
	url: string;
	statusCode: number;
	statusMessage: string;
	message: string;
	stack: string;
	data: string | any[];
}

const props = defineProps<{
	error: ErrorResponse;
}>();

const computedTitle = computed(() => {
	interface StatusTitle {
		[status: number]: string;
	}

	let statusTitle: StatusTitle = {
		401: "Tidak Diizinkan",
		402: "Pembayaran Diperlukan",
		403: "Dilarang",
		404: "Tidak Ditemukan",
		405: "Metode tidak diizinkan",
		406: "Tidak Dapat Diterima",
		407: "Memerlukan Otorisasi Proksi",
		408: "Request Time-out",
		409: "Konflik",
		410: "Hilang",
		411: "Panjang yang dibutuhkan",
		412: "Prasyarat Gagal",
		413: "Entitas Permintaan Terlalu Besar",
		414: "URI terlalu panjang",
		415: "Tipe Media Tidak Didukung",
		416: "Rentang yang Diminta Tidak Memuaskan",
		417: "Harapan yang Gagal",
		418: "Saya adalah sebuah teh pot",
		422: "Entitas Tidak Dapat Diproses",
		423: "Terkunci",
		424: "Tergantung",
		425: "Perlu PEM",
		426: "Upgrade Diperlukan",
		428: "Precondition Diperlukan",
		429: "Terlalu Banyak Permintaan",
		431: "Kepala Permintaan Terlalu Besar",
		451: "Tidak Tersedia Untuk Alasan Hukum",
		500: "Kesalahan Internal Server",
		501: "Belum Diimplementasikan",
		502: "Gateway Salah",
		503: "Layanan Tidak Tersedia",
	};

	return `${statusTitle[props.error.statusCode]} • Museum Trinil`;
});

const computedDescription = computed(() => {
	interface StatusDescription {
		[status: number]: string;
	}

	let arrayStatusDescription: StatusDescription = {
		401: "Permintaan tidak diizinkan karena kredensial tidak valid.",
		402: "Permintaan tidak dapat diproses tanpa pembayaran.",
		403: "Akses ke sumber daya tertentu dilarang.",
		404: "Sumber daya yang diminta tidak ditemukan di server.",
		405: "Metode permintaan tidak diizinkan untuk sumber daya ini.",
		406: "Server tidak dapat memenuhi tipe konten yang diminta oleh klien.",
		407: "Klien harus melakukan otentikasi dengan proxy sebelum melakukan permintaan.",
		408: "Server timeout menunggu permintaan dari klien.",
		409: "Permintaan tidak dapat diselesaikan karena konflik dalam permintaan.",
		410: "Sumber daya yang diminta tidak lagi tersedia dan tidak akan lagi tersedia di masa depan.",
		411: "Server tidak menerima permintaan tanpa panjang yang didefinisikan.",
		412: "Server tidak dapat memenuhi prasyarat permintaan.",
		413: "Server tidak dapat memproses permintaan karena permintaan terlalu besar.",
		414: "URI permintaan terlalu panjang untuk diproses oleh server.",
		415: "Tipe media permintaan tidak didukung oleh server.",
		416: "Server tidak dapat memenuhi rentang yang diminta oleh klien.",
		417: 'Server tidak dapat memenuhi harapan permintaan yang ditentukan dalam header "Expect".',
		418: "Server mengklaim bahwa kopi teapot sedang membuat kopi.",
		422: "Entitas yang digunakan untuk permintaan tidak dapat diproses oleh server karena terdapat kesalahan yang bermakna.",
		423: "Sumber daya yang diinginkan terkunci.",
		424: "Server gagal untuk mengatur koneksi atau dependensi yang diperlukan.",
		425: "Entitas yang mengirim permintaan memerlukan keberadaan ekstensi pemrosesan yang mungkin tidak didukung oleh server.",
		426: "Server menganggap bahwa klien harus beralih ke protokol yang berbeda.",
		428: "Server memerlukan prasyarat untuk membuat permintaan.",
		429: "Klien telah mengirim terlalu banyak permintaan dalam periode waktu tertentu.",
		431: "Server tidak dapat memproses permintaan karena permintaan terlalu besar untuk diproses.",
		451: "Server tidak dapat menyediakan sumber daya yang diminta karena terdapat hambatan hukum.",
		500: "Server mengalami kesalahan internal yang menyebabkan tidak dapat memenuhi permintaan.",
		501: "Server belum mendukung fungsionalitas yang diminta.",
		502: "Server bertindak sebagai gateway atau proxy dan mendapat respons yang tidak valid dari upstream server.",
		503: "Server sedang tidak tersedia karena overload atau pemeliharaan sementara.",
	};

	return arrayStatusDescription[props.error.statusCode];
});

useSeoMeta({
	title: computedTitle,
	description: computedDescription,
	ogTitle: computedTitle,
	ogDescription: computedDescription,
	twitterTitle: computedTitle,
	twitterDescription: computedDescription,
	ogUrl: "/",
	ogImage: "/images/manusia-purba.jpg",
	twitterImage: "/images/manusia-purba.jpg",
	twitterCard: "summary_large_image",
});

useHead({
	title: computedTitle,
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

<style lang="scss" scoped>
#page-error {
	background: url("/images/manusia-purba.jpg") no-repeat center center;
	background-size: cover;
	min-height: 100dvh;
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: "";
		bottom: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		backdrop-filter: blur(0.5rem);
		background: rgba(0, 0, 0, 0.75);
	}

	.inner-content {
		z-index: 2;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100vh;

		.content-main {
			width: calc(100% / 3);

			@media screen and (max-width: 768px) {
				width: calc(100% - 2rem);
				margin: 0 auto;
			}

      .error-title, .error-desc {
        color: white;
      }

      .error-title {
        font-size: 4.5em;
      }

      .error-desc {
        font-size: 1.5em;
        margin-bottom: 2rem !important;
        opacity: .75;
      }
		}
	}
}
</style>
