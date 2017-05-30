<template>
  <div  class="comments-area">
    <h2 class="comments-title">4 comments</h2>
    <ul class="comment-list">
      <li class="comment clearfix" v-for='comment in comments'>
        <article class="comment-body">
          <div class="comment-meta">
            <div class="comment-author">
              <img src="/app/img/avatar.jpg" height="100" width="100" alt="">
            </div><!-- .comment-author -->
            <div class="comment-metadata">
              <div class="author">
                <cite><router-link v-bind:to="'/users/'+comment.id">{{ comment.email }}</router-link></cite>
              </div>
              <div class="comment-content">
                <p>{{ comment.body }}</p>
              </div>
            </div><!-- .comment-metadata -->
          </div><!-- .comment-meta -->
        </article><!-- .comment-body -->
      </li><!-- #comment-## -->
    </ul>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    data () {
      return {
        name: '',
        address: '',
        content: ''
      }
    },
    created () {
      this.getAllComments(this.$route.params.id)
    },
    computed: {
      ...mapState(['comments'])
    },
    methods: {
      ...mapActions(['getAllComments'])
    }
  }
</script>