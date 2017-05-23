<template>
<div class="news-list">
<ul>
<li class="news-item" v-for="(article, index) in computedUsers">
<span class="title"><router-link v-bind:to="'/articles/'+article.id">{{article.id}} - {{ article.title }}</router-link></span><br>
<span class="body">{{ article.body }}</span>
</li>
</ul>

<ul class="list-inline">
<li v-for="n in numOfPages"><a href="" @click.prevent="setPage(n)">{{n}}</a></li>
</ul>

</div>
</template>

<script>
import {mapActions, mapGetters}   from 'vuex'

export default {
data () {
return {
currentPage: 1,
perPage: 15,
}
},

created () {
this.getAllArticles()
},
computed: {
...mapGetters({reducedArticles: 'reducedArticles'}),
  offset() {
return ((this.currentPage - 1) * this.perPage);
},
limit() {
return (this.offset + this.perPage);
},
numOfPages() {
return Math.ceil(this.reducedArticles.length / this.perPage);
},
computedUsers() {
if (this.offset > this.reducedArticles.length) {
this.currentPage = this.numOfPages;
}
return this.reducedArticles.slice(this.offset, this.limit);
}
},
methods: {
...mapActions({getAllArticles: 'getAllArticles'}),
  setPage(n) {
this.currentPage = n;
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>