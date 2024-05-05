<template>
	<nav class="fixed-top w-100" id="main-navbar">
		<div class="container-wider">
			<nav class="navbar navbar-expand-lg">
				<router-link class="navbar-brand" to="/">
					<img :src="imageLogo" alt="logo" class="navbar-logo" />
				</router-link>
				<button
					class="btn btn-link btn-toggler d-lg-none"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#sidebarMenu"
					aria-controls="sidebarMenu"
				>
					<Icon name="fa:bars" />
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav gap-3 me-auto">
						<li
							v-for="(item, index) in menuItems"
							:key="index"
							class="nav-item"
						>
							<router-link
								class="nav-link"
								:class="{ active: item.active }"
								aria-current="page"
								:to="item.link"
							>
								{{ item.title }}
							</router-link>
						</li>
					</ul>
					<ul class="navbar-nav gap-3 ms-auto">
						<li class="nav-item">
							<router-link to="/get-ticket" class="nav-link nav-button"
								>Pesan Tiket</router-link
							>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</nav>

	<div
		class="offcanvas offcanvas-start"
		tabindex="-1"
		id="sidebarMenu"
		aria-labelledby="sidebarMenuLabel"
	>
		<div class="offcanvas-header">
			<router-link class="offcanvas-title" to="/">
				<img :src="imageLogo" alt="logo" class="navbar-logo" />
			</router-link>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="offcanvas"
				aria-label="Close"
			></button>
		</div>
		<div class="offcanvas-body">
			<ul class="nav sidenav-menu">
				<li v-for="(item, index) in menuItems" :key="index" class="nav-item">
					<router-link
						class="nav-link"
						:class="{ active: item.active }"
						aria-current="page"
						:to="item.link"
					>
						{{ item.title }}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import imageLogo from "~/assets/image/logo-main.png";

const routes = useRoute();

interface MenuItem {
	title: string;
	link: string;
	active?: boolean;
}

const menuItems: MenuItem[] = [
	{ 
    title: "Beranda", 
    link: "/", 
    active: routes.fullPath === "/" 
  },
	{
		title: "Pameran",
		link: "/pameran",
		active: routes.fullPath === "/pameran",
	},
	{ title: "Galeri", link: "/galeri", active: routes.fullPath === "/galeri" },
	{
		title: "Tentang Kami",
		link: "/tentang",
		active: routes.fullPath === "/tentang",
	},
	{
		title: "Hubungi Kami",
		link: "/hubungi",
		active: routes.fullPath === "/hubungi",
	},
];

const initNavbarScrolled = () => {
	let navbar: JQuery<HTMLElement> = $("#main-navbar");
	let scrollValue: number = 0;

	$(window).on("scroll", () => {
		scrollValue = $(window).scrollTop() as number;

		if (scrollValue >= 50) {
			navbar.find(".navbar").addClass("scrolled");
			navbar
				.find(".container-wider")
				.addClass("container-small")
				.removeClass("container-wider");
		} else {
			navbar.find(".navbar").removeClass("scrolled");
			navbar
				.find(".container-small")
				.addClass("container-wider")
				.removeClass("container-small");
		}
	});
};

onMounted(initNavbarScrolled);
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "NavbarMain",
});
</script>

<style scoped lang="scss">
#main-navbar {
	[class*="container"] {
		transition: all 0.2s;
	}

	.navbar {
		transition: all 0.2s;
		margin-top: 0;
		border-radius: 0 0 1rem 1rem;
		border: 1px solid transparent;

		.btn-toggler {
			--bs-btn-hover-color: var(--bs-white);
			--bs-btn-active-color: var(--bs-white);
			--bs-btn-color: var(--bs-white);

			transition: all 0.2s;
			height: 3rem;
			width: 3rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.nav-item {
			.nav-link {
				position: relative;
				color: var(--bs-white);
				opacity: 0.5;

				&::after {
					content: "";
					width: 0;
					height: 4px;
					position: absolute;
					transition: all 0.2s;
					bottom: 0;
					left: 0;
					right: 0;
					border-radius: 99rem;
					margin: 0 auto;
					background: var(--bs-white);
				}

				&:hover,
				&.active {
					opacity: 1;
					color: var(--bs-white);

					&::after {
						width: 35%;
					}
				}
			}

			.nav-button {
				--bs-navbar-nav-link-padding-x: 1rem;
				--bs-navbar-nav-link-padding-y: 0.75rem;

				opacity: 1;
				background: var(--bs-primary);
				color: var(--bs-white);
				border-radius: var(--bs-border-radius);

				&:hover {
					color: var(--bs-white);

					&::after {
						width: 0;
					}
				}
			}
		}

		&.scrolled {
			padding: 1rem 1.5rem;
			background: rgba(lighten(#805231, 60%), 0.75);
			backdrop-filter: blur(0.5rem);
			border-color: rgba(lighten(#805231, 60%), 0.25);

			.btn-toggler {
				--bs-btn-hover-color: var(--bs-primary);
				--bs-btn-active-color: var(--bs-primary);
				--bs-btn-color: var(--bs-primary);

				margin-right: -1rem;
				padding: 0;
			}

			.nav-item {
				.nav-link {
					opacity: 1;
					color: var(--bs-dark);

					&::after {
						background: var(--bs-primary);
					}

					&:hover,
					&.active {
						color: var(--bs-primary);

						&::after {
							width: 35%;
						}
					}
				}

				.nav-button {
					--bs-navbar-nav-link-padding-x: 1rem;
					--bs-navbar-nav-link-padding-y: 0.75rem;

					background: var(--bs-primary);
					color: var(--bs-white);
					border-radius: var(--bs-border-radius);

					&:hover {
						color: var(--bs-white);
					}
				}
			}
		}
	}
}

.offcanvas .sidenav-menu {
	flex-direction: column;
  gap: .5rem;

	.nav-item {
		.nav-link {
			--bs-nav-link-padding-y: 0.75rem;
			--bs-nav-link-padding-x: 1rem;

			border-radius: 0.5rem;
			transition: all 0.2s;
      background: var(--bs-nav-link-bg);
      color: var(--bs-nav-link-color);

			&:hover {
				--bs-nav-link-color: var(--bs-primary);
				--bs-nav-link-bg: rgba(var(--bs-primary-rgb), 0.125);
			}

			&.active,
			&:active,
			&:focus {
				--bs-nav-link-color: var(--bs-white);
				--bs-nav-link-bg: var(--bs-primary);
			}
		}
	}
}

.navbar-logo {
	height: 56px;
	width: auto;

	@media screen and (max-width: 992px) {
		height: 32px;
	}
}
</style>