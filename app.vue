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

		.section-title {
			text-align: center;
			font-size: 3.5rem;
			font-weight: normal;
			font-family: var(--bs-font-serif);
		}

		.section-subtitle {
			text-align: center;
			font-size: 2rem;
			font-weight: 600;
			font-family: var(--bs-font-sans-serif);
		}
	}

	.section-title {
		text-align: center;
		font-size: 3.5rem;
		font-weight: normal;
		font-family: var(--bs-font-serif);
	}

	.section-subtitle {
		text-align: center;
		font-size: 2.5rem;
		font-weight: 600;
		font-family: var(--bs-font-sans-serif);
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
</style>