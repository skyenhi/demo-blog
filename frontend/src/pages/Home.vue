<template>
  <div class="news-list">
    <ul>
      <li class="news-item" v-for="(article, index) in reducedArticles">
        <span class="title"><a href="#">{{ article.title }}</a></span><br>
        <span class="body">{{ article.body }}</span>
      </li>
    </ul>
  </div>
</template>


<script>
  import {mapActions, mapGetters}   from 'vuex'

  export default {
    created () {
      this.getAllArticles()
    },
    computed: {
    ...mapGetters(['reducedArticles'])
    },
    methods: {
    ...mapActions(['getAllArticles'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
