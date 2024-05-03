<template>
	<div id="core-app">
    <navbar-main />

		<slot />
	</div>
</template>

<script lang="ts" setup>
import navbarMain from './components/home/navbar-main.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultLayout',
})
</script>


<style>
</style>