<template>
	<footer id="main-footer" class="footer">
		<!-- Footer Top Start -->
		<div class="footer-top">
			<div class="container-small">
				<div class="row">
					<div class="mb-5 mb-lg-0 col-md-5">
						<router-link class="text-decoration-none d-flex mb-3" to="/">
							<img :src="imageLogo" alt="logo" height="96" width="auto" />
						</router-link>

						<p class="text-white mb-0">
							Museum Trinil, merupakan sebuah museum yang berada di Kawu,
							Kedunggalar, Ngawi yang memberikan wawasan mengenai kehidupan,
							kebudayaan dan juga keberadaban manusia pada zaman dahulu di
							Indonesia.
						</p>
					</div>

					<div class="mb-5 mb-lg-0 col-md-3">
						<h3 class="text-white mb-4">Hubungi</h3>
						<p class="text-white opacity-75">
							<strong>Sekretariat Museum Trinil</strong><br />Pilang, Kawu, Kec. Kedunggalar,
							Kabupaten Ngawi, Jawa Timur 63254
						</p>
						<div>
							<a
								href="https://wa.me/6285735477211"
								class="text-white opacity-75 mb-3 d-flex gap-2 text-decoration-none align-items-center"
							>
								<i class="fab fa-whatsapp"></i>
								<span>+62 857-3547-7211</span>
							</a>
						</div>
						<div>
							<a
								href="mailto:sekretariat@trinil.ngawikab.go.id"
								class="text-white opacity-75 d-flex gap-2 text-decoration-none align-items-center"
							>
								<i class="fas fa-envelope"></i>
								<span>sekretariat@trinil.ngawikab.go.id</span>
							</a>
						</div>
					</div>

					<div class="mb-5 mb-lg-0 col-md-2">
						<h3 class="text-white mb-4">Tautan Lain</h3>
						<ul class="list-unstyled d-flex flex-column gap-3">
              <li v-for="(item, index) in otherLinks" :key="index">
                <router-link class="text-white text-decoration-none opacity-75" :to="item.link">{{ item.name }}</router-link>
              </li>
            </ul>
					</div>
          <div class="mb-5 mb-lg-0 col-md-2">
            <nuxt-img src="/images/lets-encrypt.png" height="96" width="auto" />
          </div>
				</div>
			</div>
		</div>
		<!-- Footer Top End -->

		<!-- Footer Bottom Start -->
		<div class="footer-bottom">
			<div class="container-small">
				<div class="row">
					<div class="col-md-6">
						<p class="text-white mb-0">
							Hak Cipta &copy; {{ new Date().getFullYear() }}
							<router-link to="/">Museum Trinil</router-link>. Hak Cipta
							Dilindungi Undang-Undang.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Footer Bottom End -->
	</footer>
</template>

<script lang="ts" setup>
import imageLogo from "~/assets/image/logo-main.png";

const otherLinks = [
  { name: "Tentang Kami", link: "/tentang" },
  { name: "Pameran & Kegiatan", link: "/pameran" },
  { name: "Galeri", link: "/galeri" },
  { name: "Hubungi Kami", link: "/hubungi" },
];
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "FooterMain",
});
</script>

<style lang="scss" scoped>
footer {
	background: mix(#000, #805231, 85%);

	.footer-top {
		padding: 6.25rem 0 5rem 0;
	}

	.footer-bottom {
		padding: 2rem 0;
		background: rgba(lighten(#805231, 15%), 0.125);

		a {
			color: white;
			opacity: 0.75;
		}
	}
}
</style>