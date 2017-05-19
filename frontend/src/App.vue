<template>
  <div id="app">
    <bar-top></bar-top>
    <transition name="fade" mode="out-in">
    <div class="container">
      <div class="col main-view">
        <router-view></router-view>
      </div>
    </div>
    </transition>
    <bar-bottom></bar-bottom>
  </div>
</template>

<script>
  import BarBottom from './components/BarBottom.vue';
  import BarTop from './components/BarTop.vue';
  import { store } from './store/index';


  export default {
    name: 'app',
    components: {
      BarBottom,
      BarTop,
      store
    },
  };
</script>

<style lang="sass" scoped>
</style>