<template>
  <ul class="row"><li v-for="photo in photos" class="col col-2"> <img :src="photo.url" alt="avatar" width="200" height="200"></li></ul>
</template>

<script>
  import {mapActions, mapState}   from 'vuex'

  export default {
    created () {
      this.getPhotos(this.$route.params.id)
    },
    computed: {
    ...mapState(['photos'])
    },
    methods: {
    ...mapActions(['getPhotos']),
      info() {
        this.tabInfo = true
        this.tabAlbum = false
      },
      album() {
        this.tabInfo = false
        this.tabAlbum = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>