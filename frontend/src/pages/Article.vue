<template>
  <div class="article">
    <div id="content">
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
    </div>
    <comment></comment>

  </div>
</template>

<script>
  import {mapActions, mapState}   from 'vuex'
  import Comment  from '../components/Comment.vue'


  export default {
    components: {
      Comment
    },
    created () {
      this.getArticle(this.$route.params.id)
    },
    computed: {
      ...mapState(['article'])
    },
    methods: {
      ...mapActions(['getArticle'])
    }
  }
</script>

<style scoped></style>