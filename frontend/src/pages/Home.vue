<template>
    <div class="posts-list">
      <paginate name="articles" :list="articles" :per="10" class="paginate-list">
        <li v-for="item in paginated('articles')">
          <div class="text">
            <div class="header"><router-link :to="'/articles/'+item.id">{{ item.title }}</router-link></div>
            <div class="content">{{ item.body }}</div>
          </div>
        </li>
      </paginate>
      <paginate-links for="articles" :limit="4" :show-step-links="true" class="list-inline"></paginate-links>
    </div>
</template>

<script>
  import {mapActions, mapState}   from 'vuex'
  export default {
    data () {
      return {
        paginate: ['articles']
      }
    },
    created () {
      this.getArticleList()
    },
    computed: {
      ...mapState(['articles'])
    },
    methods: {
      ...mapActions(['getArticleList']),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass"></style>