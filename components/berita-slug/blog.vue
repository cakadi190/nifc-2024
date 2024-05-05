<template>
	<section class="section-ns-wider">
		<div class="container-small">
      <div class="row">
        <div class="col-md-8"></div>
        <div class="col-md-4"></div>
      </div>

			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					<li class="page-item active"><a class="page-link" href="#">1</a></li>
					<li class="page-item"><a class="page-link" href="#">2</a></li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item">
						<a class="page-link" href="#" aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BlogListSection",
});
</script>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.pagination {
	align-items: center;
	justify-content: center;
	margin-top: 3rem;
  gap: .5rem;

	.page-item {
		.page-link {
			border: none;
			height: 3rem;
			width: 3rem;
			display: flex;
			align-items: center;
			justify-content: center;
			background: transparent;
      border-radius: 99rem;
		}

		&.active > .page-link {
			background: var(--bs-primary);
		}
	}
}
</style>