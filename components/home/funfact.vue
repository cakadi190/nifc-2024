<template>
	<section class="section-ns-wider" id="funfact">
		<div class="row gap-0">
			<div class="col-md-6 left-side"></div>
			<div class="col-md-6">
				<div class="p-5 px-3 px-md-5">
					<h4 class="section-subtitle">Sedikit Spoiler</h4>
					<h3 class="text-white section-title text-start">
						Awal Mula Museum Trinil Berdiri
					</h3>
					<p class="desc">
						Museum Trinil berdiri sebagai
						penghormatan atas temuan revolusioner Eugene Dubois pada tahun 1891
						dan 1892 yang mengubah pemahaman kita tentang evolusi manusia. Dalam
						perjalanan panjangnya, museum ini bermula dari hobi seorang pribumi,
						Wirodiharjo, yang menjadi penyelamat fosil manusia purba di tepian
						Sungai Bengawan Solo. Dengan dedikasi Wirobalung dan dukungan
						Pemerintah Daerah Kabupaten Ngawi, museum ini menjadi jendela bagi
						dunia untuk memahami perjalanan evolusi manusia.
					</p>

          <router-link class="readmore" to="/tentang">Pelajari Lebih Lanjut</router-link>

          <div class="row counter pt-5">
            <div class="col-md-4 mb-4">
              <div class="d-flex gap-3 align-items-center">
                <h3>759</h3>
                <strong>Pameran dan Kegiatan</strong>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="d-flex gap-3 align-items-center">
                <h3>5.2K</h3>
                <strong>Pengunjung Tahun Ini</strong>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="d-flex gap-3 align-items-center">
                <h3>10</h3>
                <strong>Penghargaan Yang Diraih</strong>
              </div>
            </div>
          </div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "FunFactSection",
});
</script>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
#funfact {
	background: darken(#805231, 30%);
	padding: 0 0.75rem;

	.row {
		.left-side {
			background: url("/images/manusia-purba.jpg") no-repeat center center;
			background-size: cover;
      min-height: 25rem;
		}
	}

	.section-title {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		line-height: 1.5;

		@media screen and (max-width: 1200px) {
			font-size: 1.75rem;
		}
	}

	.section-subtitle {
		color: mix(#fdc200, #805231, 50%);
		margin-bottom: 1rem;
		font-size: 1.5rem;
		text-align: left;
		display: flex;
		align-items: center;
		gap: 1rem;

		&::before {
			content: "";
			position: relative;
			width: 3rem;
			height: 0.125rem;
			background: mix(#fdc200, #805231, 50%);
		}
	}

	.desc {
		font-size: 1.125rem;
		color: white;
		opacity: 0.75;
	}

  .counter {
    h3, strong {
      color: white;
      margin-bottom: 0;
    }

    h3 {
      height: 5rem;
      width: 5rem;
      border-radius: .75rem;
      align-items: center;
      display: flex;
      justify-content: center;
      background: mix(#fdc200, #805231, 50%);
      flex-shrink: 0;
    }

    strong {
      font-size: 1.25em;
    }
  }

  .readmore {
    color: mix(#fdc200, #805231, 60%);
    text-decoration: none;
  }
}
</style>