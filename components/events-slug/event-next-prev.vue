<template>
	<section class="section-ns">
		<div class="container-small">
			<div class="row">
				<div class="col-md-6">
					<a href="/" class="d-flex gap-4 align-items-center text-decoration-none p-3">
						<div class="p-3 border border-gray rounded-pill">
							<i class="fas fa-arrow-left"></i>
						</div>

						<div class="d-flex gap-2 flex-column">
							<h3 class="mb-0">Event Sebelumnya</h3>
							<p class="mb-0">Lorem ipsum</p>
						</div>
					</a>
				</div>
				<div class="col-md-6">
					<a href="/" class="d-flex gap-4 text-end align-items-center text-decoration-none p-3 justify-content-end">
						<div class="d-flex gap-2 flex-column">
							<h3 class="mb-0">Event Selanjutnya</h3>
							<p class="mb-0">Lorem ipsum</p>
						</div>
						<div class="p-3 border border-gray rounded-pill">
							<i class="fas fa-arrow-right"></i>
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "EventNextPrev",
});
</script>


<style>
</style>
