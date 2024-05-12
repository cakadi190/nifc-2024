<template>
	<section class="section-ns-wider">
		<div class="container-small mt-5">
			<div class="row">
				<div class="col-md-6">
					<div class="information mb-3">
						<h4 class="mb-3" style="font-family: var(--bs-font-serif)">
							Informasi
						</h4>

						<div class="mb-3 border-bottom pb-3">
							<strong>Alamat</strong>
							<p class="mb-0 text-muted">
								Pilang, Kawu, Kec. Kedunggalar, Kabupaten Ngawi, Jawa Timur
								63254
							</p>
						</div>
						<div class="mb-3 border-bottom pb-3">
							<strong>Nomor Telpon</strong>
							<p class="mb-0 text-muted">+62 857-3547-7211</p>
						</div>
						<div class="mb-3 border-bottom pb-3">
							<strong>Surel</strong>
							<p class="mb-0 text-muted">sekretariat@trinil.ngawikab.go.id</p>
						</div>
					</div>
					<div class="map">
						<h4 class="mb-3" style="font-family: var(--bs-font-serif)">
							Lokasi
						</h4>
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
				<div class="col-md-6">
					<div class="card p-3 card-body bg-light border-light">
						<h4 class="mb-3" style="font-family: var(--bs-font-serif)">
							Hubungi Kami
						</h4>
            <p class="text-muted">Silahkan gunakan kotak formulir dibawah ini untuk mengirim pesan kepada kami. Kami akan membalas dan menindak lanjuti pesan anda.</p>

						<form @submit.prevent>
							<div class="mb-3">
								<label for="name" class="form-label">Nama</label>
								<input type="text" class="form-control" id="name" required />
							</div>
							<div class="mb-3">
								<label for="email" class="form-label">Email</label>
								<input type="email" class="form-control" id="email" required />
							</div>
							<div class="mb-3">
								<label for="message" class="form-label">Pesan</label>
								<textarea rows="10" class="form-control" id="message" required></textarea>
							</div>
							<button type="submit" class="btn btn-primary">Kirim</button>
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
	name: "ContactPage",
	data() {
		return {
			email: "museumtrinil@ngawi.com",
			phone: "081234567890",
			address:
				"Jl. Raya Ngawi - Kediri, Trinil, Kedunggalar, Ngawi, Jawa Timur 63283",
			mapSrc:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1087080221143!2d111.42421761432027!3d-7.716372294448955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cd5934ee0d1bcf%3A0x41967e71e05395d9!2sMuseum%20Trinil!5e0!3m2!1sen!2sid!4v1642744690564!5m2!1sen!2sid",
		};
	},
});
</script>
