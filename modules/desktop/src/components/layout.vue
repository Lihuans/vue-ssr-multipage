<template>
  <div>
    <vhead></vhead>
    <router-view></router-view>
  </div>
</template>

<script>
import vhead from './header';
export default {
	name: 'layout',
	components: {
		vhead
	}
};
</script>

<style scoped>

</style>
