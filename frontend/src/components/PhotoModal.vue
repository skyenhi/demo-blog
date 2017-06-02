<template>
  <transition name="photo-modal">
    <div class="photo-modal text-center" v-show="value">
      <div class="photo-modal-dialog panel text-left">
        <div class="panel-title">
          <h4>{{ photoModal.title }}</h4>
        </div>
        <div class="panel-body" @click="close">
          <img :src="photoModal.url">
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    props:{
      value: {
        'default': true
      },
      photoModal: {
        type: Object,
        'default': null
      },
      index: {
        type: Number,
        'default': null
      }
    },
    computed: {
      ...mapActions(['getPhotos'])
    },
    methods: {
      close(){
        this.$emit('input', false);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>