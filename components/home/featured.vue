<template>
	<section class="section-ns-wider" id="featured">
		<div class="container-small">
			<h3 class="section-subtitle opacity-50">Informasi</h3>
			<h2 class="section-title pb-5 mb-5">
				Jelajahi Serunya Berpetualang Ke Masa Lampau!
			</h2>

			<div class="row">
				<div
					class="col-lg-4 mb-3 col-md-6"
					v-for="(item, index) in rowContents"
					:key="index"
				>
					<div class="card rounded-4 p-4">
						<div
							class="card-body d-flex flex-column justify-content-center align-items-center"
						>
							<div class="p-3 bg-light-primary rounded-pill">
								<Icon :name="item.icon" size="64" />
							</div>

							<h4 class="mt-4 mb-3" style="font-family: var(--bs-font-serif);letter-spacing: .075rem;">{{ item.title }}</h4>
							<div v-html="item.desc" />

							<div class="mt-3">
								<a
									v-if="item.button.isExternal"
									:href="item.button.link"
									class="btn btn-primary"
									target="_blank"
									>{{ item.button.name }}</a
								>
								<router-link
									v-else
									:to="item.button.link"
									class="btn btn-primary"
									>{{ item.button.name }}</router-link
								>
							</div>
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
	name: "FeaturedSection",
});
</script>

<script lang="ts" setup>
const rowContents = [
	{
		title: "Jam Operasional",
		desc: `<p class="mb-1 text-center">Hari Kerja: 09.00-20.00 WIB</p><p class="mb-1 text-center">Akhir Pekan: 10.00-17.00 WIB</p>`,
		icon: "material-symbols:av-timer",
		button: {
			name: "Kegiatan Mendatang",
			link: "/pameran",
		},
	},
	{
		title: "Lokasi",
		desc: `<p class="mb-1 text-center">Pilang, Kawu, Kec. Kedunggalar, Kabupaten Ngawi, Jawa Timur 63254</p>`,
		icon: "material-symbols:map-outline",
		button: {
			name: "Arahkan Saya",
			isExternal: true,
			link: "https://maps.app.goo.gl/zw1E5sSfMeGmt8yL8",
		},
	},
	{
		title: "Dapatkan Tiket",
		desc: `<p class="mb-1 text-center">Yuk, beli tiket resmi disini. Jangan sampai kehabisan!</p>`,
		icon: "ion:ticket-outline",
		button: {
			name: "Dapatkan Tiket",
			link: "/get-ticket",
		},
	},
];
</script>