<template>
	<section class="section-ns-wider">
		<div class="container-small">
			<div class="row">
				<div class="col-md-8">
					<ul class="nav nav-pills" role="tablist">
						<li class="nav-item">
							<a
								class="nav-link active"
								data-bs-toggle="tab"
								href="#event-detail"
								role="tab"
								>Informasi Kegiatan</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link"
								data-bs-toggle="tab"
								href="#event-schedule"
								role="tab"
								>Jadwal</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link"
								data-bs-toggle="tab"
								href="#contact"
								role="tab"
								>Hubungi</a
							>
						</li>
					</ul>

					<div class="bg-dark p-4 rounded-4 overflow-hidden mt-4 card-info">
						<div class="row">
							<div class="col-md-6">
								<div class="p-4 card-inner rounded-3">
									<div class="info-widget">
										<h4>Tanggal dan Waktu</h4>
										<p>
											<i class="fas fa-clock fa-fw"></i>24 Juli 2024 pukul 15:00
											WIB
										</p>
									</div>
									<div class="info-widget">
										<h4>Lokasi</h4>
										<p>
											<i class="fas fa-map-pin fa-fw"></i>Pendoopo dan Ruangan
											Utama Museum Trinil
										</p>
									</div>
									<div class="info-widget">
										<h4>Penyelenggara</h4>
										<p>
											<i class="fas fa-briefcase fa-fw"></i>DISBUDPAR Kab. Ngawi
										</p>
									</div>
									<div class="info-widget border-0 mb-0">
										<h4>Harga Tiket</h4>
										<p>
											<i class="fas fa-ticket fa-fw"></i>Dewasa 15rb &mdash;
											Anak-anak 7.5rb*
										</p>
									</div>

									<p class="mb-0">
										*Untuk batita dibebaskan HTM (Harga tiket masuk).
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="tab-content pt-5">
						<div
							class="tab-pane fade show active"
							id="event-detail"
							role="tabpanel"
						>
							<h3 class="mb-3" style="font-family: var(--bs-font-serif)">
								Detail Kegiatan Ini
							</h3>

							<p>
								Ngawi, sebuah kota kecil yang kaya akan sejarah, merayakan ulang
								tahunnya yang ke-666 dengan sebuah pameran istimewa yang memukau
								para pengunjung. Pameran tersebut menampilkan sejumlah
								prasasti-prasasti kuno yang menggambarkan kejayaan masa lalu
								kota ini. Dari prasasti-prasasti tersebut, kita dapat memahami
								perjalanan panjang dan beragamnya budaya yang telah menghiasi
								Ngawi selama berabad-abad.
							</p>

							<p>
								Prasasti-prasasti yang dipamerkan berasal dari berbagai periode
								sejarah, mulai dari masa Kerajaan Majapahit hingga masa kolonial
								Belanda. Setiap prasasti memiliki cerita uniknya sendiri,
								mencerminkan kekayaan warisan budaya dan peradaban yang pernah
								ada di wilayah ini. Pengunjung dapat menyaksikan relief-detail
								yang rumit dan inskripsi-inskripsi yang menyimpan berbagai makna
								filosofis dan sejarah.
							</p>

							<p>
								Pameran ini juga menjadi kesempatan bagi masyarakat setempat
								untuk lebih mengenal dan menghargai warisan budaya mereka
								sendiri. Dengan menyaksikan langsung prasasti-prasasti kuno ini,
								generasi muda dapat terinspirasi untuk menjaga dan melestarikan
								warisan budaya yang telah ditinggalkan oleh nenek moyang mereka.
								Pameran ini tidak hanya sekadar merayakan ulang tahun kota,
								tetapi juga menjadi peringatan akan pentingnya memahami dan
								merawat warisan budaya bagi masa depan.
							</p>
						</div>
						<div class="tab-pane fade show" id="event-schedule" role="tabpanel">
							<h3 class="mb-3" style="font-family: var(--bs-font-serif)">
								Jadwal Kegiatan Ini
							</h3>

							<div class="row align-items-center border-bottom py-4">
								<div class="col-md-3">
									<h5 class="mb-0">15.00 - 15.30</h5>
								</div>
								<div class="col-md-9">
									<h4
										class="mb-2 mb-xxl-3"
										style="font-family: var(--bs-font-serif)"
									>
										Pembukaan
									</h4>
									<p class="mb-0">
										Sambutan Bupati Ngawi, KADISBUDPAR Kabupaten Ngawi dan
										KEMDIKBUD.
									</p>
								</div>
							</div>
							<div class="row align-items-center border-bottom py-4">
								<div class="col-md-3">
									<h5 class="mb-0">15.30 - 16.00</h5>
								</div>
								<div class="col-md-9">
									<h4
										class="mb-2 mb-xxl-3"
										style="font-family: var(--bs-font-serif)"
									>
										Peresmian Logo HUT Ngawi Ke-666
									</h4>
									<p class="mb-0">
										Peresmian dan Peluncuruan logo HUT Ngawi Ke-666.
									</p>
								</div>
							</div>
							<div class="row align-items-center border-bottom py-4">
								<div class="col-md-3">
									<h5 class="mb-0">16.00 - 17.30</h5>
								</div>
								<div class="col-md-9">
									<h4
										class="mb-2 mb-xxl-3"
										style="font-family: var(--bs-font-serif)"
									>
										Inti Acara
									</h4>
									<p class="mb-0">
										Penampilan Band Lokal dan OM (Orkes Melayu) Sera Mania.
									</p>
								</div>
							</div>
							<div class="row align-items-center border-bottom py-4">
								<div class="col-md-3">
									<h5 class="mb-0">17.30 - 18.30</h5>
								</div>
								<div class="col-md-9">
									<h4
										class="mb-2 mb-xxl-3"
										style="font-family: var(--bs-font-serif)"
									>
										Istirahat
									</h4>
									<p class="mb-0">Istirahat, Sholat dan Makan.</p>
								</div>
							</div>
							<div class="row align-items-center border-bottom py-4">
								<div class="col-md-3">
									<h5 class="mb-0">18.30 - 19.45</h5>
								</div>
								<div class="col-md-9">
									<h4
										class="mb-2 mb-xxl-3"
										style="font-family: var(--bs-font-serif)"
									>
										Lanjutan Inti Acara
									</h4>
									<p class="mb-0">
										Penampilan Band Lokal dan OM (Orkes Melayu) Sera Mania.
									</p>
								</div>
							</div>
							<div class="row align-items-center border-bottom py-4">
								<div class="col-md-3">
									<h5 class="mb-0">19.45 - 20.00</h5>
								</div>
								<div class="col-md-9">
									<h4
										class="mb-2 mb-xxl-3"
										style="font-family: var(--bs-font-serif)"
									>
										Penutupan
									</h4>
									<p class="mb-0">Acara Penutupan.</p>
								</div>
							</div>
						</div>
						<div class="tab-pane fade show" id="contact" role="tabpanel">
							<h4 class="mb-3" style="font-family: var(--bs-font-serif)">
								Kontak Penanggung Jawab Acara
							</h4>
							<p>
								Apabila anda memiliki pertanyaan terkait kegiatan dan pameran
								ini, silahkan hubungi kontak dibawah ini pada saat jam kerja.
								Karena kami tidak bekerja selama 24 jam tanpa henti.
							</p>

							<div class="row pt-3">
								<div class="col-md-6">
									<strong>Nama:</strong>
									<p class="mb-3">Budi Santoso</p>
									<strong>Posisi:</strong>
									<p class="mb-3">Koordinator Acara</p>
									<strong>Telepon:</strong>
									<p class="mb-3">+62 123-456-7890</p>
									<strong>Telepon:</strong>
									<p class="mb-3">+62 123-456-7890</p>
									<strong>Surel:</strong>
									<p class="mb-0">budi.santoso@trinil.ngawikab.go.id</p>
								</div>
								<div class="col-md-6">
									<strong>Museum Trinil Ngawi</strong>
									<p>
										Pilang, Kawu, Kec. Kedunggalar, Kabupaten Ngawi, Jawa Timur
										63254
									</p>

									<client-only>
										<div class="w-100 rounded-4 overflow-hidden">
											<iframe
												width="100%"
												height="300"
												frameborder="0"
												scrolling="no"
												marginheight="0"
												marginwidth="0"
												src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=J9F4+6C9,%20Pilang,%20Kawu,%20Kec.%20Kedunggalar,%20Kabupaten%20Ngawi,%20Jawa%20Timur%2063254+(Museum%20Trinil%20Ngawi)&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
												><a href="https://www.gps.ie/">gps devices</a></iframe
											>
										</div>
									</client-only>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card card-body card-order p-4 bg-primary">
						<h3
							class="mb-4 text-white"
							style="font-family: var(--bs-font-serif)"
						>
							Pesan Disini
						</h3>

						<form action="#">
							<div class="form-group mb-3">
								<input
									type="text"
									class="form-control"
									placeholder="Nama Lengkap"
								/>
							</div>
							<div class="form-group mb-3">
								<input
									type="email"
									class="form-control"
									placeholder="Alamat surel"
								/>
							</div>
							<div class="form-group mb-3 row">
								<div class="col-md-6">
									<div class="input-group">
										<button
											class="btn btn-link border-end-0"
											@click="decreaseButton"
											type="button"
										>
											<i class="fas fa-minus fa-fw"></i>
										</button>
										<input
											type="text"
											v-model="refInputTicket"
											class="form-control"
											aria-label="Ubah jumlah"
										/>
										<button
											class="btn btn-link border-start-0"
											@click="increaseButton"
											type="button"
										>
											<i class="fas fa-plus fa-fw"></i>
										</button>
									</div>
								</div>
								<div class="col-md-6">
									<input
										type="text"
										class="form-control"
										placeholder="Jumlah anak kecil"
									/>
								</div>
							</div>
							<div class="form-group mb-3">
								<textarea
									name=""
									placeholder="Isikan deskripsi tambahan"
									id=""
									cols="10"
									rows="5"
									class="form-control"
								></textarea>
							</div>

							<div class="pt-3">
								<button
									class="btn btn-link-submit btn-lg border p-3 border-white w-100 d-flex gap-2 align-items-center justify-content-center text-white"
								>
									Pesan Sekarang
								</button>
							</div>
						</form>
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
const refInputTicket = ref(0);

const increaseButton = () => (refInputTicket.value = refInputTicket.value + 1);
const decreaseButton = () =>
	refInputTicket.value > 0
		? (refInputTicket.value = refInputTicket.value - 1)
		: null;
</script>

<style scoped lang="scss">
.card-info {
	background: url("/images/museum_trinil.jpg") no-repeat center center;
	background-size: cover;
	position: relative;

	.card-inner {
		background: rgba(var(--bs-primary-rgb), 0.75);
		backdrop-filter: blur(1rem);
	}
}

.nav-pills {
	justify-content: space-evenly;
	align-items: stretch;
	padding: 1rem;
	border-top: 1px solid rgba(var(--bs-primary-rgb), 0.125);
	border-bottom: 1px solid rgba(var(--bs-primary-rgb), 0.125);
	overflow: hidden;
	overflow-x: auto;
	flex-wrap: nowrap;
	gap: 0.5rem;

	.nav-item {
		width: 33.3%;

		@media screen and (max-width: 768px) {
			width: 100%;
		}

		.nav-link {
			width: 100%;
			height: 100%;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
			white-space: nowrap;
			color: var(--bs-dark);
			opacity: 0.75;
			border-radius: 0;
			padding: 0.75rem 1.5rem;

			&.active {
				opacity: 1;
				background: transparent;
				color: var(--bs-primary);
				font-weight: bold;
			}
		}

		&:not(:last-child) .nav-link {
			border-right: 1px solid rgba(var(--bs-primary-rgb), 0.125);
		}
	}
}

.info-widget {
	padding-bottom: 1.5rem;
	margin-bottom: 1.5rem;
	border-bottom: 1px solid rgba(var(--bs-primary-rgb), 0.125);

	h4 {
		font-family: var(--bs-font-serif);
		color: white;
		margin-bottom: 0.75rem;
	}

	p {
		margin-bottom: 0;
		opacity: 0.75;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
}

.card-order {
	.form-control {
		background: transparent;
		color: white;
		border-color: rgba(255, 255, 255, 0.25);
		padding: 0.75rem 1rem;

		&::placeholder {
			color: rgba(255, 255, 255, 0.5);
		}
	}

	.btn.btn-link {
		color: rgba(255, 255, 255, 0.5);
		border: 1px solid rgba(255, 255, 255, 0.25);
	}

	.btn-link-submit:hover {
		color: var(--bs-primary);
		border-color: var(--bs-primary);
		background: transparent;
	}
}
</style>