<template>
  <div class="subchapter media-left">
    <div class="image">
      <img src="//placehold.it/240x160" alt="avatar">
      <strong class="img-title">{{ user.name }}</strong>
    </div>

    <div class="text">
      <ul class="list-links-inline">
        <li :class="{'active': tabInfo}" @click="info">Info </li>
        <li :class="{'active': tabAlbum}" @click="album">Album</li>
      </ul>
      <div class="tabs-content">
        <div v-if="tabInfo">
          <p>Address: {{ user.address.suite }} {{ user.address.street }} {{ user.address.city }} {{ user.address.zipcode }}</p>
          <p>Phone: {{ user.phone }}</p>
          <p>Website: {{ user.website }}</p>
          <p>Company: {{ user.company.name }}</p>
          <p><i>{{ user.company.catchPhrase }}</i></p>
          <div id="map_canvas1"></div>
        </div>
        <div v-else>
          <p>My album</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapActions, mapState}   from 'vuex'

  export default {
    data() {
      return {
        tabInfo: true,
        tabAlbum: false
      }
    },
    created () {
      this.getUser(this.$route.params.id)
    },
    computed: {
    ...mapState(['user'])
    },
    methods: {
    ...mapActions(['getUser']),
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