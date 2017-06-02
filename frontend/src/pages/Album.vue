<template>
  <div>
    <waterfall :line-gap="320" :watch="photos">
      <waterfall-slot
              v-for="(photo, index) in photos"
              :width="380"
              :height="380"
              :order="index"
              :key="photo.id"
              move-class="photo-move">

        <div class="panel photo-box hover-sh">
          <img :src="photo.thumbnailUrl"  @click="showPhotoModal(photo, index)">
        </div>
      </waterfall-slot>
    </waterfall>
    <photo-modal
            v-model="show"
            :value="show"
            :photoModal="photoModal"
            :index="index">
    </photo-modal>

  </div>
</template>

<script>
  import { waterfall, waterfallSlot } from 'vue-waterfall'
  import photoModal from '../components/photoModal'
  import { mapActions, mapState } from 'vuex'
  export default {
    data(){
      return {
        show: false,
        photoModal: {},
        index: null
      }
    },
    components: {
      waterfall,
      waterfallSlot,
      photoModal
    },
    created () {
      this.getPhotos(this.$route.params.id)
    },
    computed: {
      ...mapState(['photos'])
    },
    methods: {
      ...mapActions(['getPhotos']),
      showPhotoModal(item,index){
        this.photoModal = item;
        this.index = index;
        this.show = true;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>