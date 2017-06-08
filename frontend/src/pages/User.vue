<template>
  <div class="subchapter media-left">
    <div class="image">
      <img src="//placehold.it/240x160" alt="avatar">
      <strong class="img-title">{{ user.name }}</strong>
    </div>

    <div class="text">
      <ul class="list-links-inline">
        <li :class="{'active': tabInfo}" @click="info"><b>Info</b> </li>
        <li :class="{'active': tabAlbum}" @click="album"><b>Albums</b></li>
      </ul>
      <div class="tabs-content">
        <div v-if="tabInfo">
          <p>Address: {{ user.address.suite }} {{ user.address.street }} {{ user.address.city }} {{ user.address.zipcode }}</p>
          <p>Phone: {{ user.phone }}</p>
          <p>Website: {{ user.website }}</p>
          <p>Company: {{ user.company.name }}</p>
          <p><i>{{ user.company.catchPhrase }}</i></p>
          <p>{{ user.address.geo.lat }}, {{ user.address.geo.lng }}</p>
          <gmap-map
                  :center="{lat: 10, lng: 10}"
                  :zoom="7"
                  map-type-id="terrain"
                  style="width: 500px; height: 300px"
          >
            <gmap-marker
                    :position="{lat:10, lng:10}"
                    :clickable="true"
                    :draggable="true"
            ></gmap-marker>
          </gmap-map>
        </div>
        <div v-else>
          <ul class="row">
            <li class="col col-4" v-for='album in albums'>
              <router-link v-bind:to="'/albums/'+album.id">
                <img src="//placehold.it/240x160" alt="album">
                <span class="img-title">{{ album.title }}</span>
              </router-link>
              </li>
            </ul>
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
      this.getUser(this.$route.params.id),
      this.getAlbums(this.$route.params.id)
    },
    computed: {
      ...mapState(['user', 'albums'])
    },
    methods: {
      ...mapActions(['getUser', 'getAlbums']),
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