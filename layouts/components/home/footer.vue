<template>
	<footer id="main-footer" class="footer">
		<!-- Footer Top Start -->
		<div class="footer-top">
			<div class="container-small">
				<div class="row">
					<div class="col-md-5">
						<router-link class="text-decoration-none d-flex mb-3" to="/">
							<img :src="imageLogo" alt="logo" height="96" width="auto" />
						</router-link>

            <p class="text-white">Museum Trinil, merupakan sebuah museum yang berada di Kawu, Kedunggalar, Ngawi yang memberikan wawasan mengenai kehidupan, kebudayaan dan juga keberadaban manusia pada zaman dahulu di Indonesia.</p>
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
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "FooterMain",
});
</script>


<style lang="scss" scoped>
footer {
	background: darken(#805231, 25%);

	.footer-top {
		padding: 3rem 0;
	}

	.footer-bottom {
		padding: 2rem 0;
		background: rgba(darken(#805231, 100%), 0.5);

		a {
			color: white;
			opacity: 0.75;
		}
	}
}
</style>