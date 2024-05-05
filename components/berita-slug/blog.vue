<template>
	<section class="section-ns-wider">
		<div class="container-small">
			<div class="row">
				<div class="col-md-8 pb-4">
					<div class="card-content card-body card">
						<nuxt-img
							src="/images/blog/maintenance.jpg"
							alt="Informasi Sobat Arkeolog: Museum Trinil Tutup Sementara"
							class="card-img mb-4"
						/>

						<h3 class="blog-title mb-3">
							Informasi Sobat Arkeolog: Museum Trinil Tutup Sementara
						</h3>

						<div class="d-flex gap-3 mb-4 pb-3 border-bottom">
							<time
								:datetime="$dayjs('2024-02-15 12:23:57').toString()"
								class="d-flex gap-2 align-items-center"
							>
								<i class="fas fa-calendar"></i>
								<span>{{
									$dayjs("2024-02-15 12:23:57").format("DD MMMM YYYY")
								}}</span>
							</time>

							<span class="d-flex gap-2 align-items-center">
								<i class="fas fa-user"></i>
								Admin
							</span>
						</div>

						<div>
							<p>
								Halo sobat Arkeolog! Mohon maaf ya, untuk sementara Museum
								Trinil ini kami tutup terlebih dahulu dikarenakan kami sedang
								melakukan pemeriksaan dan perbaikan berkala untuk memastikan
								kenyamanan dan keamanan sobat ketika berkunjung ke Museum Trinil
								hingga tanggal 08 Agustus mendatang ya. Bagi yang sudah memesan
								tiket untuk masuk ke dalam museum dan ingin mengembalikan uang
								pembelian (refund) bisa langsung hubungi admin dibawah ini ya.
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="widget-section pb-4">
						<h5>Kategori</h5>

						<ul class="list-group pt-3 list-group-flush">
							<li
								class="list-group-item py-3 d-flex gap-3 justify-content-between"
							>
								<span>Informasi</span>
								<span class="badge bg-primary lh-1 d-flex align-items-center"
									>15</span
								>
							</li>
							<li
								class="list-group-item py-3 d-flex gap-3 justify-content-between"
							>
								<span>Seputar Trinil</span>
								<span class="badge bg-primary lh-1 d-flex align-items-center"
									>5</span
								>
							</li>
							<li
								class="list-group-item py-3 d-flex gap-3 justify-content-between"
							>
								<span>Kegiatan</span>
								<span class="badge bg-primary lh-1 d-flex align-items-center"
									>25</span
								>
							</li>
							<li
								class="list-group-item py-3 d-flex gap-3 justify-content-between"
							>
								<span>Infotekno</span>
								<span class="badge bg-primary lh-1 d-flex align-items-center"
									>8</span
								>
							</li>
						</ul>
					</div>
					<div class="widget-section pb-3">
						<h5>Berita Lainnya</h5>

						<ul class="list-group list-group-flush">
							<li v-for="i in 5" :key="i" class="list-group-item px-0 py-4 d-flex gap-3">
								<div
									class="ratio flex-shrink-0 ratio-1x1 rounded-4 overflow-hidden"
									style="height: 6.5rem; width: 6.5rem"
								>
									<nuxt-img src="/images/manusia-purba.jpg" />
								</div>

								<div>
									<h3 class="h6">Lorem Ipsum</h3>
									<p class="mb-1">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</p>

									<time
										:datetime="$dayjs('2024-02-15 12:23:57').toString()"
										class="d-flex gap-2 align-items-center"
									>
										<i class="fas fa-calendar"></i>
										<span>{{
											$dayjs("2024-02-15 12:23:57").format("DD MMMM YYYY")
										}}</span>
									</time>
								</div>
							</li>
						</ul>
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
</script>

<style scoped lang="scss">
.card-content {
	padding: 2rem;
	border-radius: var(--bs-border-radius-xl);
	box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.025);

	.blog-title {
		font-family: var(--bs-font-serif);
		font-weight: normal;
		font-size: 1.75rem;
	}
}
</style>