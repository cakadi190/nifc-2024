<template>
	<header id="masthead">
		<div class="overlay" />
		<div class="container-small">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center">
					<h1 class="text-white title">Pameran Prasasti-Prasasti Kuno</h1>
					<p class="text-white subtitle">
            Detail kegiatan pameran atau kegiatan yang ada di Museum Trinil.
					</p>

					<nav aria-label="breadcrumb" class="pt-4">
						<ol class="breadcrumb mb-0 justify-content-center">
							<li class="breadcrumb-item">
								<router-link class="text-white opacity-50" to="/"
									>Beranda</router-link
								>
							</li>
							<li class="breadcrumb-item">
								<router-link class="text-white opacity-50" to="/pameran"
									>Pameran & Kegiatan</router-link
								>
							</li>
							<li class="breadcrumb-item text-white active" aria-current="page">
								Pameran Prasasti-Prasasti Kuno
							</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "HeaderSection",
});
</script>

<style lang="scss" scoped>
#masthead {
	background: url("/images/museum_trinil.jpg") no-repeat center center;
	background-size: cover;
	position: relative;

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.65);
		width: 100%;
		height: 100%;
		z-index: 1;
		backdrop-filter: blur(0.25rem);
	}

	.row {
		position: relative;
		z-index: 2;
		align-items: center;
		justify-content: center;
		min-height: 50svh;
		padding-top: 3.5rem;
    
		@media screen and (max-width: 1200px) {
			padding-bottom: 4rem;
		}
	}

	.title {
		font-size: 3rem;
		font-family: var(--bs-font-serif);
		font-weight: normal;
		margin-bottom: 1rem;

		@media screen and (max-width: 1200px) {
			font-size: 2rem;
		}
	}

	.subtitle {
		font-size: 1.25rem;

		@media screen and (max-width: 1200px) {
			font-size: 1rem;
		}
	}
}
</style>