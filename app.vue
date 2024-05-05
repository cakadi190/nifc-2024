<script lang="ts" setup>
onMounted(() => {
	// TODO: enable tooltip bootstrap 5
	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new window.bootstrap.Tooltip(tooltipTriggerEl);
	});

	// TODO: enable popover bootstrap 5
	var popoverTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="popover"]')
	);
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new window.bootstrap.Popover(popoverTriggerEl);
	});
});
</script>

<template>
	<nuxt-loading-indicator color="#805231" :height="4" />

	<nuxt-layout>
		<nuxt-page />
	</nuxt-layout>
</template>

<style lang="scss">
:root {
	--bs-font-sans-serif: "Plus Jakarta Sans", sans-serif;
	--bs-font-serif: "Playfair Display", sans-serif;
	--bs-font-monospace: "JetBrains Mono", monospace;
}

.section-ns {
	min-height: 5rem;
	padding: 2.5rem 1rem;

	&-wider {
		min-height: 10rem;
		padding: 7.5rem 1rem;

		@media screen and (max-width: 992px) {
			padding: 7.5rem 0;
		}

		.section-title {
			text-align: center;
			font-size: 3.5rem;
			font-weight: normal;
			font-family: var(--bs-font-serif);

			@media screen and (max-width: 992px) {
				font-size: 2.5rem;
			}
		}

		.section-subtitle {
			text-align: center;
			font-size: 2rem;
			font-weight: 600;
			font-family: var(--bs-font-sans-serif);
			position: relative;

			@media screen and (max-width: 992px) {
				font-size: 1.5rem;
			}
		}
	}

	.section-title {
		text-align: center;
		font-size: 3.5rem;
		font-weight: normal;
		font-family: var(--bs-font-serif);

		@media screen and (max-width: 992px) {
			font-size: 2.5rem;
		}
	}

	.section-subtitle {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 600;
		font-family: var(--bs-font-sans-serif);
		position: relative;

		@media screen and (max-width: 992px) {
			font-size: 1.5rem;
		}
	}
}

.container {
	&-wider,
	&-small {
		margin: 0 auto;
	}

	&-small {
		max-width: 1320px;
	}
	&-wider {
		max-width: 90%;
	}

	@media screen and (max-width: 1400px) {
		&-wider,
		&-small {
			max-width: calc(95% - 2rem);
		}
	}

	@media screen and (max-width: 992px) {
		&-wider,
		&-small {
			max-width: calc(100% - 2rem);
		}
	}
}

/* Define warna scrollbar */
$scrollbar-color: #ffebdc;
$scrollbar-thumb-color: #63421f;
$scrollbar-hover-color: #472b0f;

/* Gaya umum untuk scrollbar */
::-webkit-scrollbar {
	width: 10px; /* Lebar scrollbar */
}

/* Gaya untuk bagian yang bisa di-geser */
::-webkit-scrollbar-thumb {
	background-color: $scrollbar-thumb-color;
	border-radius: 5px; /* Sudut melengkung */
}

/* Gaya saat mengarahkan kursor ke scrollbar */
::-webkit-scrollbar-thumb:hover {
	background-color: $scrollbar-hover-color;
}

/* Gaya untuk bagian track scrollbar (bagian yang tidak bergerak) */
::-webkit-scrollbar-track {
	background-color: $scrollbar-color;
}

/* Gaya untuk bagian bawah dan atas scrollbar */
::-webkit-scrollbar-button {
	display: none; /* Sembunyikan tombol bawah dan atas */
}
</style>