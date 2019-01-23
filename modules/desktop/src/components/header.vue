<template>
    <div class="header clearfix">
      <h1 class="f-l">欢欢的项目</h1>
      <ul class="f-l menu">
        <li><router-link to="/">Foo</router-link></li>
        <li><router-link to="/bar">Bar</router-link></li>
        <li><router-link to="/baz">Baz</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
	name: 'vhead'
};
</script>

<style scoped>
.header {
  padding: 0 30px;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
}
.menu {
  margin-left: 30px;
}
.menu li {
  float: left;
  width: 100px;
  font-size: 20px;
  /*cursor: pointer;*/
}
</style>
