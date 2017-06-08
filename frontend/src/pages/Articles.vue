<template>
  <div class="posts-list">
    <article class="subchapter media-left media-not-sm" v-for="(article, index) in computedArticles">
      <div class="image">
        <img src="/app/img/img_post_item_1.jpg" alt="">
      </div>
      <div class="text">
        <div class="meta">
          <span class="tag"><a href="#" rel="category tag">Life</a></span>
          <span class="small date">March 11, 196(^^)</span>
        </div>
        <div class="header"><router-link v-bind:to="'/articles/'+article.id">{{ article.title }}</router-link></div>
        <div class="content">{{ article.body }}</div>
        <div class="btn btn-ghost-main read-more"><router-link v-bind:to="'/articles/'+article.id">Continue Reading</router-link></div>
      </div>
    </article>
    <ul class="col list-inline">
      <li v-for="n in numOfPages"><a href="" @click.prevent="setPage(n)">{{n}}</a></li>
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapState}   from 'vuex'

  export default {
    data () {
      return {
        currentPage: 1,
        perPage: 15,
      }
    },
    created () {
      this.getArticleList()
    },
    computed: {
      ...mapState(['articles']),
      offset() {
        return ((this.currentPage - 1) * this.perPage);
      },
      limit() {
        return (this.offset + this.perPage);
      },
      numOfPages() {
        return Math.ceil(this.articles.length / this.perPage);
      },
      computedArticles() {
        if (this.offset > this.articles.length) {
          this.currentPage = this.numOfPages;
        }
        return this.articles.slice(this.offset, this.limit);
      }
    },
    methods: {
      ...mapActions(['getArticleList']),
      setPage(n) {
        this.currentPage = n;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>