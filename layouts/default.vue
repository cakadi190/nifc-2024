<template>
	<div id="core-app">
    <navbar-main />

		<slot />

    <footer-main />

    <back-to-top />
	</div>
</template>

<script lang="ts" setup>
import navbarMain from './components/home/navbar-main.vue';
import backToTop from '~/components/back-to-top.vue';
import footerMain from './components/home/footer.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultLayout',
})
</script>

<style>
</style>